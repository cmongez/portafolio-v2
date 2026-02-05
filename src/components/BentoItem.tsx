"use client";

import {
  User,
  Share2,
  FolderKanban,
  Code2,
  Activity,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { cn } from "@/lib/utils";

const bentoIconMap: Record<string, LucideIcon> = {
  user: User,
  share2: Share2,
  "folder-kanban": FolderKanban,
  code2: Code2,
  activity: Activity,
};

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  iconName?: keyof typeof bentoIconMap;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  index?: number;
  /** Acentos de color en cabecera (ej. text-blue-400, text-emerald-400). */
  headerAccentClassName?: string;
  /** Si true, se añade el efecto de línea de escaneo en el contenido. */
  showScanLine?: boolean;
  id?: string;
}

export function BentoItem({
  children,
  className,
  title,
  iconName,
  colSpan = 1,
  rowSpan = 1,
  index = 0,
  headerAccentClassName,
  showScanLine = false,
  isFeatured = false,
  id,
  contentClassName,
}: BentoItemProps & { isFeatured?: boolean; contentClassName?: string }) {
  const Icon = iconName ? bentoIconMap[iconName] : undefined;
  const accent = headerAccentClassName ?? "text-neutral-400";

  // Mouse tracking for Glow Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const { scrollYProgress } = useScroll({
    offset: ["0 1", "1.2 1"], // Reveal when enter viewport
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]); // Simple fade in? Or use whileInView

  // We want a "reveal on scroll" with slight upward movement
  // Using Variants is cleaner for "whileInView"
  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as const;

  // 3D Tilt Effect - Refined for "Linear" feel (smoother, higher range for featured)
  const xPct = useSpring(0, { stiffness: 60, damping: 12 });
  const yPct = useSpring(0, { stiffness: 60, damping: 12 });

  function handleTiltMove(e: React.MouseEvent) {
    if (!isFeatured) return;
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate percentage from center (-0.5 to 0.5)
    const xP = (x / width) - 0.5;
    const yP = (y / height) - 0.5;

    xPct.set(xP);
    yPct.set(yP);

    handleMouseMove(e);
  }

  function handleTiltLeave() {
    if (!isFeatured) return;
    xPct.set(0);
    yPct.set(0);
    mouseX.set(0);
  }

  // Linear Style: Stronger tilt
  const rotateX = useTransform(yPct, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(xPct, [-0.5, 0.5], [-8, 8]);

  // Determine glow color based on accent class
  const isBlue = headerAccentClassName?.includes("blue");
  const isAmber = headerAccentClassName?.includes("amber"); // Changed from emerald/green to amber

  // Linear-style large background glow
  let bgGlowColor = "transparent";
  if (isBlue) bgGlowColor = "rgba(59, 130, 246, 0.15)";
  if (isAmber) bgGlowColor = "rgba(245, 158, 11, 0.15)"; // Amber-500ish

  // Top Neon Border Color
  let topBorderColor = "rgba(255,255,255,0.2)";
  if (isBlue) topBorderColor = "rgba(96, 165, 250, 0.5)";
  if (isAmber) topBorderColor = "rgba(251, 191, 36, 0.5)"; // Amber-400ish

  return (
    <motion.article
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{
        rotateX: isFeatured ? rotateX : 0,
        rotateY: isFeatured ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={isFeatured ? handleTiltMove : handleMouseMove}
      onMouseLeave={handleTiltLeave}
      id={id}
      className={cn(
        "group relative rounded-xl border border-neutral-800/40 bg-neutral-900/20 backdrop-blur-sm",
        "overflow-hidden",
        "transition-all duration-500",
        colSpan === 2 && "md:col-span-2",
        colSpan === 3 && "md:col-span-3",
        rowSpan === 2 && "md:row-span-2",
        "flex flex-col",
        // Minimum height for featured items as requested
        isFeatured && "min-h-[400px]",
        className
      )}
    >
      {/* Background Static Glow (Linear Style) - Enhanced */}
      {isFeatured && (
        <>
          {/* Main Background Glow */}
          <div
            className="absolute -top-1/3 -right-1/3 w-full h-full blur-[140px] rounded-full pointer-events-none opacity-25 group-hover:opacity-50 transition-opacity duration-700"
            style={{ background: bgGlowColor }}
          />
          {/* Secondary Bottom Glow for depth */}
          <div
            className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 blur-[100px] rounded-full pointer-events-none opacity-15 group-hover:opacity-30 transition-opacity duration-700"
            style={{ background: bgGlowColor }}
          />
        </>
      )}

      {/* Top Neon Border (Revealed via Mask or just a localized gradient) */}
      <div
        className="absolute inset-x-0 top-0 h-px transition-opacity duration-500 opacity-60 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${topBorderColor}, transparent)`,
        }}
      />

      {/* Dynamic Mouse Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.06),
              transparent 80%
            )
          `,
        }}
      />

      {/* Internal Content */}
      <div className="relative h-full flex flex-col z-10">
        {(title || Icon) && (
          <div
            className={cn(
              "flex items-center gap-4 px-8 py-8 shrink-0", // Increased padding and gap
            )}
          >
            {Icon && <Icon className={cn("size-6 shrink-0 transition-colors", accent)} />}
            {title && (
              <h2 className="text-xl font-bold tracking-tight text-white">{title}</h2>
            )}
          </div>
        )}
        <div className={cn("relative px-8 pb-8 flex-1", !title && !Icon && "pt-8", contentClassName)}>
          {showScanLine && (
            <motion.div
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent z-10 pointer-events-none"
              initial={{ top: "0%", opacity: 0 }}
              animate={{ top: "100%", opacity: [0, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1,
              }}
            />
          )}
          {children}
        </div>
      </div>
    </motion.article>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useInView } from "framer-motion";

/** Parsea labels como "+5 años Exp." y anima el número de 0 al valor. */
  function MetricRow({ label }: { label: string }) {
  const match = label.match(/^\+(\d+)\s+(.+)$/);
  const hasNumber = Boolean(match);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? ` ${match[2]}` : label;

  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const [display, setDisplay] = useState(hasNumber ? 0 : null);
  
  // Ref for intersection observer
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    if (!hasNumber) return;
    if (isInView) {
      spring.set(target);
    }
  }, [hasNumber, target, spring, isInView]);

  useEffect(() => {
    if (!hasNumber) return;
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [hasNumber, spring]);

  return (
    <li ref={ref} className="text-sm font-medium text-neutral-300 tracking-tighter">
      {hasNumber ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          +{display}{suffix}
        </motion.span>
      ) : (
        label
      )}
    </li>
  );
}

interface MetricsWithCountUpProps {
  metrics: { label: string }[];
}

export function MetricsWithCountUp({ metrics }: MetricsWithCountUpProps) {
  return (
    <ul className="space-y-2">
      {metrics.map((m) => (
        <MetricRow key={m.label} label={m.label} />
      ))}
    </ul>
  );
}

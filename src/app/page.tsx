import type { Metadata } from "next";
import { getLegacyProjects } from "@/services/projectService";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoItem } from "@/components/BentoItem";
import { TechChips } from "@/components/TechChip";
import { LegacyProjectsSection } from "@/components/LegacyProjectsSection";
import { MetricsWithCountUp } from "@/components/MetricsWithCountUp";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Navbar } from "@/components/Navbar";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { CodeSnippetVisual } from "@/components/CodeSnippetVisual";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import {
  profile,
  projects,
  socials,
  techStack,
  quickMetrics,
} from "@/lib/data";
import { Linkedin, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "César Mongez | Full Stack & GIS Specialist Portfolio",
  description: "Portafolio profesional de César Mongez. Desarrollador Full Stack con 3 años de experiencia en soluciones GIS, Fintech y desarrollo mobile. Especialista en React, TypeScript, Python y PostgreSQL/PostGIS.",
  keywords: [
    "César Mongez",
    "Full Stack Developer",
    "GIS Specialist",
    "React",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "PostGIS",
    "Next.js",
    "Mobile Development",
    "React Native",
    "Fintech",
    "AWS",
    "Node.js",
    "FastAPI",
    "Desarrollador Chile",
  ],
  authors: [{ name: "César Mongez" }],
  creator: "César Mongez",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://cesarmongez.com",
    title: "César Mongez | Full Stack & GIS Specialist",
    description: "Desarrollador Full Stack especializado en GIS y Fintech con 3 años de experiencia. Soluciones innovadoras para Minería, Acuicultura y Servicios Financieros.",
    siteName: "César Mongez Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "César Mongez - Full Stack Developer & GIS Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "César Mongez | Full Stack & GIS Specialist",
    description: "Desarrollador Full Stack especializado en GIS y Fintech. React, TypeScript, Python, PostgreSQL/PostGIS.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Actualizar con código real
  },
};

const socialIconMap = {
  linkedin: Linkedin,
  github: Github,
} as const;

const techStackCategoryLabels: Record<keyof typeof techStack, string> = {
  languages: "Lenguajes",
  database: "Bases de datos",
  cloudGis: "Cloud / GIS",
  frontend: "Frontend",
};

export default async function Home() {
  const nviroProject = projects.find((p) => p.id === "nviro");
  const agrosuperProject = projects.find((p) => p.id === "agrosuper");
  const legacyProjects = await getLegacyProjects();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pb-32">
      <ParticlesBackground />
      <Navbar />

      <BentoGrid>
        <BentoItem colSpan={3} index={0} className="md:min-h-[400px] relative z-10 p-0 overflow-visible" id="hero">
          <div className="grid md:grid-cols-2 gap-8 h-full items-center p-6 md:p-10">
            <div className="flex flex-col justify-center max-w-xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
                <span className="bg-gradient-to-b from-white via-white to-neutral-500 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>

              <div className="flex flex-col md:flex-row md:items-center gap-2 text-lg text-neutral-400 font-medium leading-relaxed mb-6">
                <span>Soluciones para:</span>
                <TypewriterEffect />
              </div>

              <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg mb-8">
                <span className="text-neutral-100 font-semibold">Analista Programador</span> y <span className="text-neutral-100 font-semibold">Desarrollador Full Stack</span> con <span className="text-neutral-100 font-semibold">3 años de experiencia</span>. Aplico mi <span className="text-neutral-100 font-semibold">formación contable</span> para desarrollar <span className="text-neutral-100 font-semibold">software financiero</span> y lógica de negocio crítica. Desarrollo en Frontend y Backend dominando <span className="text-neutral-100 font-semibold">React</span>, <span className="text-neutral-100 font-semibold">React Native</span>, <span className="text-neutral-100 font-semibold">TypeScript</span>, <span className="text-neutral-100 font-semibold">Python</span>, <span className="text-neutral-100 font-semibold">Node.js</span> y <span className="text-neutral-100 font-semibold">PostgreSQL</span>. Actualmente implemento <span className="text-neutral-100 font-semibold">soluciones GIS</span> y <span className="text-neutral-100 font-semibold">Cloud (AWS)</span> en NVIRO.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href={socials.find(s => s.id === "linkedin")?.href || "#"}
                  target="_blank"
                  className="px-6 py-2.5 rounded-md bg-neutral-100 text-neutral-900 font-semibold text-sm hover:bg-white transition-colors flex items-center gap-2 shadow-lg shadow-white/5"
                >
                  <socialIconMap.linkedin className="w-4 h-4" />
                  LinkedIn
                </Link>

                <Link
                  href={socials.find(s => s.id === "github")?.href || "#"}
                  target="_blank"
                  className="px-6 py-2.5 rounded-md border border-neutral-700 text-neutral-300 font-medium text-sm hover:text-white hover:border-neutral-500 transition-colors flex items-center gap-2"
                >
                  <socialIconMap.github className="w-4 h-4" />
                  GitHub
                </Link>

                {/* Download CV (Accent) */}
                <Link
                  href="/001_CV_Cesar_Mongez_Desarrollador_Full_Stack"
                  target="_blank"
                  download
                  className="px-6 py-2.5 rounded-md bg-amber-600 text-white font-semibold text-sm hover:bg-amber-500 transition-colors flex items-center gap-2 shadow-lg shadow-amber-900/20"
                >
                  <span className="text-lg leading-none">📄</span>
                  CV
                </Link>

                <div className="hidden lg:flex items-center gap-2 px-3 py-1 ml-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400/80 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                  </span>
                  <span className="text-[10px] font-semibold text-amber-500 tracking-wide uppercase">
                    Disponible
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center h-full">
              <CodeSnippetVisual />
            </div>
          </div>
        </BentoItem>

        {/* Fila 2: Marquee + Metrics */}
        <BentoItem colSpan={3} index={1} className="h-full w-full flex items-center bg-neutral-900/20" contentClassName="p-0 flex items-center">
          <TechStackMarquee />
        </BentoItem>


        {/* PROYECTOS SECTION START */}

        {/* Fila 3: NVIRO (Full Width - Premium Feature) */}
        {nviroProject && (
          <BentoItem
            title={nviroProject.name}
            id="projects"
            iconName="folder-kanban"
            colSpan={3}
            index={1} // Adjusted index
            headerAccentClassName="text-blue-400"
            showScanLine
            isFeatured={true}
            className="md:min-h-[450px] border-neutral-700 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-500"
          >
            <div className="grid md:grid-cols-2 gap-8 h-full items-center">
              <div className="flex flex-col justify-between h-full py-2">
                <div>
                  <p className="text-base text-neutral-400 leading-relaxed">
                    {nviroProject.description}
                  </p>
                  {nviroProject.impact && (
                    <div className="mt-6 border-l-2 border-blue-500/30 pl-4">
                      <p className="text-sm text-neutral-400 font-medium leading-relaxed">
                        {nviroProject.impact}
                      </p>
                    </div>
                  )}
                </div>
                <TechChips items={nviroProject.stack} className="mt-8" />
              </div>

              <div className="hidden md:flex items-center justify-center p-4 perspective-1000">
                <div
                  className="relative w-full aspect-video rounded-lg border border-neutral-800/80 bg-neutral-900/80 overflow-hidden shadow-2xl transition-transform duration-500"
                  style={{ transform: "rotateX(12deg) rotateY(-6deg) rotateZ(2deg)" }}
                >
                  <Image
                    src="https://placehold.co/800x600/0f172a/3b82f6?text=NVIRO+GIS+System"
                    alt="NVIRO Interface"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)" }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                </div>
              </div>
            </div>
          </BentoItem>
        )}

        {/* Fila 4: Agrosuper */}
        {agrosuperProject && (
          <BentoItem
            title={agrosuperProject.name}
            iconName="folder-kanban"
            colSpan={3}
            index={2}
            headerAccentClassName="text-amber-400"
            isFeatured={true}
            className="md:min-h-[450px] border-neutral-700 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-500"
          >
            <div className="grid md:grid-cols-2 gap-8 h-full items-center">
              <div className="flex flex-col justify-between h-full py-2">
                <div>
                  <p className="text-base text-neutral-400 leading-relaxed">
                    {agrosuperProject.description}
                  </p>
                  {agrosuperProject.impact && (
                    <div className="mt-6 border-l-2 border-amber-500/30 pl-4">
                      <p className="text-sm text-neutral-400 font-medium leading-relaxed">
                        {agrosuperProject.impact}
                      </p>
                    </div>
                  )}
                </div>
                <TechChips items={agrosuperProject.stack} className="mt-8" />
              </div>

              <div className="hidden md:flex items-center justify-center p-4 perspective-1000">
                <div
                  className="relative w-full aspect-video rounded-lg border border-neutral-800/80 bg-neutral-900/80 overflow-hidden shadow-2xl transition-transform duration-500"
                  style={{ transform: "rotateX(12deg) rotateY(-6deg) rotateZ(2deg)" }}
                >
                  <Image
                    src="https://placehold.co/800x600/1c1917/f59e0b?text=Agrosuper+Finance"
                    alt="Agrosuper Interface"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                </div>
              </div>
            </div>
          </BentoItem>
        )}

        {/* EXPERIENCE & STACK SECTION */}
        <BentoItem colSpan={3} index={3} className="bg-neutral-900/20 border-none" id="experience">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Timeline takes 2 cols */}
            <div className="md:col-span-2">
              <ExperienceTimeline />
            </div>

            {/* Stack takes 1 col (sticky-ish if we wanted, but standard for now) */}
            <div className="md:col-span-1 space-y-6" id="stack"> {/* Adjusted anchor ID */}
              <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/40 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4 text-neutral-200 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Métricas Rápidas
                </div>
                <MetricsWithCountUp metrics={quickMetrics} />
              </div>

              <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/40 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4 text-neutral-200 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Stack Principal
                </div>
                <div className="flex flex-col gap-6">
                  {(Object.keys(techStack) as (keyof typeof techStack)[]).map((category) => (
                    <div key={category} className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{techStackCategoryLabels[category]}</span>
                      <TechChips items={techStack[category]} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BentoItem>

        <div className="md:col-span-3">
          <LegacyProjectsSection
            projects={legacyProjects}
            staggerStartIndex={4} // Adjust index
          />
        </div>

      </BentoGrid>
    </main>
  );
}


"use client";

import Image from "next/image";

// Helper to construct Simple Icons URL
// Color is optional, if omitted uses default brand color
const getIconUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const technologies = [
  // --- Languages ---
  { name: "JavaScript", icon: getIconUrl("javascript") },
  { name: "TypeScript", icon: getIconUrl("typescript") },
  { name: "Python", icon: getIconUrl("python") },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" }, // Good SQL representation
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },

  // --- Frontend ---
  { name: "React", icon: getIconUrl("react") },
  { name: "React Native", icon: getIconUrl("react") },
  { name: "Next.js", icon: getIconUrl("nextdotjs/white") }, // White variant for dark mode visibility from simpleicons directly
  // Note: SimpleIcons supports color overrides. 
  // Next.js default is black. On dark bg, white is needed.
  { name: "Vue.js", icon: getIconUrl("vuedotjs") },
  { name: "Redux", icon: getIconUrl("redux") },
  { name: "Bootstrap", icon: getIconUrl("bootstrap") },
  { name: "SASS", icon: getIconUrl("sass") },
  { name: "Tailwind", icon: getIconUrl("tailwindcss") },
  { name: "Material UI", icon: getIconUrl("mui") },
  { name: "Chart.js", icon: getIconUrl("chartdotjs") },

  // --- Backend / DB ---
  { name: "Node.js", icon: getIconUrl("nodedotjs") },
  { name: "Express", icon: getIconUrl("express/white") }, // White variant
  { name: "FastAPI", icon: getIconUrl("fastapi") },
  { name: "PostgreSQL", icon: getIconUrl("postgresql") },
  // Usando el icono de PostgreSQL para PostGIS también, ya que es la extensión espacial nativa
  { name: "PostGIS", icon: getIconUrl("postgresql") },
  { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "MySQL", icon: getIconUrl("mysql") },
  { name: "Firebase", icon: getIconUrl("firebase") },
  { name: "Spring Boot", icon: getIconUrl("springboot") },

  // --- Cloud / DevOps ---
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }, // Devicon for reliability
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" }, // Devicon
  { name: "Docker", icon: getIconUrl("docker") },
  { name: "Git", icon: getIconUrl("git") },
  { name: "GitHub", icon: getIconUrl("github/white") },
  { name: "Scrum", icon: "https://cdn.simpleicons.org/scrumalliance" },

  // --- GIS ---
  { name: "Mapbox", icon: getIconUrl("mapbox/white") }, // Mapbox is usually black text, need white
  { name: "Leaflet", icon: getIconUrl("leaflet") },

  // --- CMS / Platforms ---
  { name: "WordPress", icon: getIconUrl("wordpress") },
  { name: "WooCommerce", icon: getIconUrl("woocommerce") },
];

export function TechStackMarquee() {
  return (
    <div className="relative flex overflow-x-hidden group py-4 bg-neutral-900/20 border-y border-neutral-800/50 w-full">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* 
            Contenido duplicado para infinite loop perfecto con translateX(-50%).
            La animación mueve todo el bloque hacia la izquierda. Cuando llega al 50%,
            el segundo set está exactamente donde empezó el primero, creando la ilusión.
          */}
        <div className="flex gap-12 items-center pr-12">
          {technologies.map((tech, i) => (
            <TechItem key={`t1-${i}`} tech={tech} />
          ))}
        </div>
        <div className="flex gap-12 items-center pr-12">
          {technologies.map((tech, i) => (
            <TechItem key={`t2-${i}`} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TechItem({ tech }: { tech: { name: string; icon: string } }) {
  // Invert colors for specific logos that might be too dark
  // AWS Wordmark from Devicon is typically dark. Let's invert it.
  const isWhiteNeeded = tech.name === "Next.js" || tech.name === "Express" || tech.name === "GitHub" || tech.name === "AWS" || tech.name === "SQL Server";
  const iconFilter = isWhiteNeeded ? "invert(1)" : "";

  return (
    <div className="flex flex-col items-center justify-center gap-3 min-w-[80px] group/item transition-transform hover:scale-110 duration-300">
      <div className="relative w-12 h-12 transition-all duration-300 drop-shadow-lg p-0.5" style={{ filter: iconFilter }}>
        <Image
          src={tech.icon}
          alt={tech.name}
          width={48}
          height={48}
          className="object-contain"
          unoptimized
        />
      </div>
      <span className="text-xs font-medium text-neutral-300 group-hover/item:text-neutral-100 transition-colors">
        {tech.name}
      </span>
    </div>
  );
}

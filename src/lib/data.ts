/**
 * Data layer — César Mongez | Full Stack & GIS Specialist
 * Fuente: CV y perfil LinkedIn. Variables en INGLÉS, textos visibles en ESPAÑOL.
 */

export interface Profile {
  name: string;
  title: string;
  description?: string;
}

/** Categoría opcional; "legacy" agrupa proyectos de aprendizaje / maquetación inicial. */
export type ProjectCategory = "legacy";

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  impact?: string;
  isFeatured: boolean;
  href?: string;
  /** Enlaces externos (fuente: JSON histórico). */
  demo?: string;
  repository?: string;
  /** Imagen del proyecto */
  img?: string;
  /** Si existe, el proyecto se agrupa bajo Legacy/Learning. */
  category?: ProjectCategory;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlight: string[];
  color?: string;
}

export interface Social {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface TechStackByCategory {
  languages: string[];
  database: string[];
  cloudGis: string[];
  frontend: string[];
}

// --- PROFILE ---

export const profile: Profile = {
  name: "César Mongez",
  title: "Desarrollador Full Stack",
  description:
    "Analista Programador y Desarrollador Full Stack con 3 años de experiencia. Aplico mi formación contable para desarrollar software financiero y lógica de negocio crítica. Desarrollo en Frontend y Backend dominando React, React Native, TypeScript, Python, Node.js y PostgreSQL. Actualmente implemento soluciones GIS y Cloud (AWS) en NVIRO. Poseo experiencia previa liderando equipos, gestionando proyectos y requisitos bajo Scrum y Design Thinking.",
};

export const quickMetrics: { label: string }[] = [
  { label: "+3 años Exp." },
  { label: "C1 Inglés" },
  { label: "Full Stack" },
];

// --- PROJECTS (CV/LinkedIn + JSON histórico; 3 featured; Legacy/Learning agrupado) ---

/** Etiqueta para agrupar proyectos básicos HTML/CSS (IDs 3,4,5,6). */
export const LEGACY_LEARNING_CATEGORY = "Legacy/Learning" as const;

export const projects: Project[] = [
  {
    id: "nviro",
    name: "NVIRO — Sistema de Gestión Geoespacial",
    description:
      "Arquitectura GIS completa integrando PostgreSQL/PostGIS, mapas interactivos (Mapbox/Leaflet) y visualización satelital (GeoTIFF). Desarrollo de aplicaciones móviles offline-first en React Native para captura de datos ambientales en terreno. Backend en Node.js/Express para gestión de formularios normativos y procesamiento de geometrías.",
    stack: [
      "React",
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "PostGIS",
      "Mapbox",
      "Leaflet",
      "GeoTIFF",
      "Titiler",
      "AWS S3",
    ],
    impact:
      "Digitalización completa de procesos de terreno y centralización de activos geoespaciales en una plataforma unificada.",
    isFeatured: true,
  },
  {
    id: "agrosuper",
    name: "Agrosuper — Suite de Inteligencia Financiera & Dashboard Corporativo",
    description:
      "Construcción de un Dashboard integral con React para la visualización dinámica de indicadores. El sistema centraliza datos mediante APIs en Python y SQL Server, transformándolos en reportes de gestión interactivos y auditorías claras en tiempo real.",
    stack: [
      "Python",
      "FastAPI",
      "JWT",
      "Microsoft SQL Server",
      "React",
      "Redux",
      "Bootstrap",
      "Azure",
    ],
    impact:
      "Debido al éxito y precisión del sistema, se solicitó la replicación de un sistema similar para otras filiales del holding. Optimizó drásticamente la toma de decisiones gerenciales mediante la disponibilidad inmediata de métricas de rentabilidad.",
    isFeatured: true,
  },
  {
    id: "aquachile",
    name: "AquaChile — Soluciones a Medida",
    description:
      "Lideré la toma de requisitos y la comunicación entre desarrollo y partes interesadas. " +
      "Aplicación financiera a medida con React, Redux, Bootstrap, Python (FastAPI) y SQL Server. " +
      "Visualización de datos con Chart.js; formularios y validaciones con Formik y Yup. Entorno ágil (Scrum, Design Thinking) y control de versiones con Git.",
    stack: [
      "React",
      "Redux",
      "Bootstrap",
      "Python",
      "FastAPI",
      "SQL Server",
      "Chart.js",
      "Formik",
      "Yup",
      "Git",
    ],
    impact:
      "Mejora sustancial en la eficiencia de la toma de decisiones estratégicas; solución End-to-End entregada en tiempo y forma.",
    isFeatured: true,
  },
  // --- Legacy/Learning: projects are now fetched from Firestore ---
];

// Removed legacyLearningProjects export as it is now dynamic from Firestore

// --- TECH STACK (categorizado) ---

export const techStack: TechStackByCategory = {
  languages: ["Python", "JavaScript", "TypeScript", "Java", "HTML", "CSS", "SQL"],
  database: ["PostgreSQL", "PostGIS", "Microsoft SQL Server", "MySQL"],
  cloudGis: ["AWS", "AWS S3", "Azure", "PostGIS", "Mapbox", "Leaflet", "GeoTIFF", "Titiler"],
  frontend: [
    "React",
    "React Native",
    "Next.js",
    "Redux",
    "Vue.js",
    "Vuex",
    "Bootstrap",
    "Material Design",
    "SASS",
    "Chart.js",
    "Formik",
    "Yup",
  ],
};

// --- EXPERIENCE (historial laboral resumido) ---

export const experience: Experience[] = [
  {
    company: "NVIRO",
    role: "Desarrollador Full Stack",
    period: "Abril 2025 — Presente",
    highlight: [
      "Implementé arquitectura GIS avanzada integrando PostgreSQL/PostGIS, mapas interactivos (Mapbox/Leaflet) y visualización satelital (GeoTIFF) mediante Titiler y AWS S3.",
      "Mantenimiento evolutivo de 2 apps móviles (React Native/TypeScript), implementando nuevos features críticos para la captura de flora y fauna en terreno (Android/iOS).",
      "Desarrollé interfaces complejas en React.js aplicando estándares Material Design y backend en Node.js y Express, gestionando formularios normativos y consistencia de geometrías."
    ],
    color: "#3b82f6", // Blue
  },
  {
    company: "AquaChile (holding Agrosuper)",
    role: "Desarrollador de Software FullStack",
    period: "Abril 2024 — Abril 2025",
    highlight: [
      "Lideré la toma de requisitos y el desarrollo End-to-End de una aplicación financiera crítica con Python (FastAPI) y SQL Server, optimizando la eficiencia en la toma de decisiones estratégicas.",
      "Implementé interfaces analíticas con React.js, Redux y Chart.js para la visualización de datos, gestionando formularios complejos y validaciones estrictas con Formik y Yup."
    ],
    color: "#9ca3af", // Grey
  },
  {
    company: "Agrosuper",
    role: "Desarrollador de Software FullStack",
    period: "Enero 2023 — Abril 2025",
    highlight: [
      "Desarrollé plataformas web para la gestión y proyección de estados financieros utilizando React, Redux, Bootstrap, HTML y CSS, acelerando en más de un 100% la toma de decisiones.",
      "Desarrollé e implementé API's en Python (FastAPI, JWT, Pandas) conectadas a SQL Server para la autenticación de los usuarios, optimizando la seguridad y el acceso a datos."
    ],
    color: "#f97316", // Orange
  },
  {
    company: "Globant",
    role: "Desarrollador Java Backend",
    period: "Octubre 2024 — Enero 2025",
    highlight: [
      "Participé en un programa intensivo que fortaleció mis conocimientos en Java, Spring Boot, JPA, JDBC, MySQL, Git, Scrum y pruebas unitarias con JUnit.",
      "Desarrollé en Java utilizando patrones de diseño, consumiendo la API de ChatGPT y Google OAuth2."
    ],
    color: "#84cc16", // Lime Green
  },
  {
    company: "Arepagos.cl",
    role: "Fundador & Desarrollador",
    period: "Junio 2021 — Octubre 2024",
    highlight: [
      "E-commerce de tarjetas digitales. Desarrollo en WordPress/WooCommerce con integraciones de pago (Flow, MercadoPago)."
    ],
    color: "#22c55e", // Green
  },
  {
    company: "Devsafío (para Agrosuper)",
    role: "Desarrollador Front End Trainee",
    period: "Enero 2023 — Abril 2023",
    highlight: [
      "Diseño y desarrollo Front End (React/Redux/Bootstrap) para aplicativo web clave. Participación en ceremonias Scrum y despliegue en Azure."
    ],
    color: "#f97316", // Orange
  },
];


// --- EDUCATION ---

export interface EducationItem {
  institution: string;
  title: string;
  year: string;
  highlight?: boolean;
}

export const education: EducationItem[] = [
  {
    institution: "Duoc UC",
    title: "Analista Programador, Ingeniería de Software",
    year: "2024 - 2026",
    highlight: true,
  },
  {
    institution: "Universidad Yacambú",
    title: "Contaduría Pública (Incompleto)",
    year: "2014 - 2022",
  },
  {
    institution: "Globant University",
    title: "Desarrollador Backend Java (Beca Code your Future)",
    year: "2023 - 2024",
  },
];

export const certifications: EducationItem[] = [
  {
    institution: "CertiProf",
    title: "Scrum Master Professional Certificate (SMPC™)",
    year: "2026",
  },
  {
    institution: "Capacitación Usach",
    title: "Fundamentos de SGSI - Normas ISO 27001",
    year: "2024",
  },
  {
    institution: "AWS Academy",
    title: "AWS Academy Graduate - Cloud Foundations",
    year: "2023",
  },
  {
    institution: "UPLA (Univ. Playa Ancha)",
    title: "Diplomado en Diseño y Gestión Ágil de Proyectos",
    year: "2023",
  },
  {
    institution: "EF Standard English Test",
    title: "EF SET English Certificate 82/100 (C2 Proficient)",
    year: "2023",
  },
  {
    institution: "Cisco",
    title: "Python Essentials 1",
    year: "2023",
  },
  {
    institution: "SCRUMstudy",
    title: "Scrum Fundamentals Certified (SFC™)",
    year: "2023",
  },
  {
    institution: "Udemy / Otros",
    title: "Design Thinking, Formación Tributaria",
    year: "2023",
  }
];

// --- SOCIALS ---

export const socials: Social[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cmongez",
    icon: "linkedin",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/cmongez",
    icon: "github",
  },
];

'use client';

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { track } from "@vercel/analytics";
import { socials } from "@/lib/data";

const socialIconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
} as const;

export function SocialActions() {
  return (
    <>
      <Link
        href={socials.find(s => s.id === "linkedin")?.href || "#"}
        target="_blank"
        onClick={() => track('Click_LinkedIn')}
        className="px-6 py-2.5 rounded-md bg-[#0A66C2] text-white font-semibold text-sm hover:bg-[#004182] transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/20"
      >
        <socialIconMap.linkedin className="w-4 h-4" />
        LinkedIn
      </Link>

      <Link
        href={socials.find(s => s.id === "github")?.href || "#"}
        target="_blank"
        onClick={() => track('Click_GitHub')}
        className="px-6 py-2.5 rounded-md border border-neutral-700 text-neutral-300 font-medium text-sm hover:text-white hover:border-neutral-500 transition-colors flex items-center gap-2"
      >
        <socialIconMap.github className="w-4 h-4" />
        GitHub
      </Link>

      <Link
        href="/001_CV_Cesar_Mongez_Desarrollador_Full_Stack.pdf"
        target="_blank"
        onClick={() => track('Ver_CV_Online')}
        className="px-6 py-2.5 rounded-md border border-amber-600 text-amber-500 font-semibold text-sm hover:bg-amber-600 hover:text-white transition-colors flex items-center gap-2"
      >
        Ver CV
      </Link>

      <Link
        href="/001_CV_Cesar_Mongez_Desarrollador_Full_Stack.pdf"
        download="001_CV_Cesar_Mongez_Desarrollador_Full_Stack.pdf"
        onClick={() => track('Descargar_CV')}
        className="px-6 py-2.5 rounded-md bg-amber-600 text-white font-semibold text-sm hover:bg-amber-500 transition-colors flex items-center gap-2 shadow-lg shadow-amber-900/20"
      >
        Descargar CV
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
    </>
  );
}

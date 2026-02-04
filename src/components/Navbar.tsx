"use client";

import Link from "next/link";
import { Home, Briefcase, FolderKanban, Layers, GraduationCap, Code2 } from "lucide-react";

export function Navbar() {
  const navItems = [
    { label: "Inicio", href: "#hero", icon: Home },
    { label: "Proyectos", href: "#projects", icon: FolderKanban },
    { label: "Experiencia", href: "#experience", icon: Briefcase },
    { label: "Educación", href: "#education", icon: GraduationCap },
    { label: "Stack", href: "#stack", icon: Code2 },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]">
      <div className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-neutral-700/50 bg-neutral-900/90 backdrop-blur-xl shadow-2xl shadow-black/50 ring-1 ring-white/5">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-300 hover:bg-white/5"
            title={item.label}
          >
            <item.icon className="w-5 h-5 text-neutral-400 group-hover:text-amber-500 transition-colors duration-300 mb-1" />
            <span className="text-[10px] font-medium text-neutral-500 group-hover:text-neutral-200 transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { Home, Briefcase, FolderKanban, GraduationCap, Code2 } from "lucide-react";

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
      <div className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-neutral-600 bg-neutral-900/95 backdrop-blur-xl shadow-2xl shadow-black/80 ring-1 ring-white/10">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-300 hover:bg-white/10"
            title={item.label}
          >
            <item.icon className="w-5 h-5 text-neutral-300 group-hover:text-amber-400 transition-colors duration-300 mb-1" />
            <span className="text-[10px] font-medium text-neutral-400 group-hover:text-neutral-100 transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

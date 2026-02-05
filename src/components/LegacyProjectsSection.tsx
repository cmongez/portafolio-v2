"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";
import { BentoItem } from "@/components/BentoItem";
import { TechChips } from "@/components/TechChip";
import { LEGACY_LEARNING_CATEGORY } from "@/lib/data";
import { Archive, ExternalLink, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface LegacyProjectsSectionProps {
  projects: Project[];
  /** Índice base para animación stagger (siguiente al resto de la grilla). */
  staggerStartIndex: number;
}

export function LegacyProjectsSection({
  projects,
  staggerStartIndex,
}: LegacyProjectsSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (projects.length === 0) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="group flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/70 hover:border-neutral-700 transition-all duration-300 text-neutral-300 hover:text-neutral-200 text-sm font-medium tracking-tight"
        aria-expanded={isOpen}
      >
        <Archive className="size-4 shrink-0 opacity-70 group-hover:opacity-100" />
        {isOpen ? "Ocultar archivo de proyectos" : "Explorar archivo de proyectos"}
      </button>

      {isOpen && (
        <div className="md:col-span-3 space-y-3 transition-opacity duration-300">
          <h3 className="text-xs font-medium text-neutral-300 uppercase tracking-wider">
            {LEGACY_LEARNING_CATEGORY}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {projects.map((p, i) => (
              <BentoItem
                key={p.id}
                title={p.name}
                iconName="folder-kanban"
                colSpan={1}
                index={staggerStartIndex + i}
              >
                {p.img && (
                  <div className="relative w-full aspect-video rounded border border-neutral-800/80 bg-neutral-900 overflow-hidden mb-3 group/img">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-neutral-950/20 group-hover/img:bg-transparent transition-colors duration-300" />
                  </div>
                )}
                <p className="text-neutral-300 text-xs leading-relaxed line-clamp-3 mb-4">
                  {p.description}
                </p>
                <TechChips items={p.stack.slice(0, 4)} className="mb-4" /> {/* Limit visible tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-neutral-800/80">
                  {p.demo && (
                    <Link
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-neutral-300 hover:text-neutral-100 transition-colors"
                    >
                      <ExternalLink className="size-3" />
                      Demo
                    </Link>
                  )}
                  {p.repository && (
                    <Link
                      href={p.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-neutral-300 hover:text-neutral-100 transition-colors"
                    >
                      <Code className="size-3" />
                      Repo
                    </Link>
                  )}
                </div>
              </BentoItem>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

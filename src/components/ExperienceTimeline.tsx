"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience, education, certifications } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  highlight: string[];
  color?: string;
}

export function ExperienceTimeline() {
  return (
    <section className="space-y-12">
      {/* Experience Timeline */}
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <span className="w-8 h-[1px] bg-amber-500"></span>
          Experiencia Laboral
        </h3>
        <div className="relative border-l border-neutral-800 ml-3 space-y-10 pb-4">
          {experience.map((item, index) => (
            <ExperienceItem key={index} item={item as ExperienceEntry} index={index} />
          ))}
        </div>
      </div>

      {/* Education & Certifications Container */}
      <div className="flex flex-col gap-12">
        {/* Education Section */}
        <div className="space-y-6" id="education">
          <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-8 h-[1px] bg-neutral-700"></span>
            Formación Académica
          </h3>
          <ul className="space-y-4">
            {education.map((edu, idx) => (
              <li
                key={idx}
                className={cn(
                  "flex flex-col border rounded-lg p-4 transition-all hover:bg-neutral-800/20",
                  edu.highlight
                    ? "border-amber-500/30 bg-amber-500/5 hover:border-amber-500/50"
                    : "border-neutral-800/50 bg-neutral-900/30 hover:border-neutral-700"
                )}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={cn(
                    "font-semibold text-sm leading-tight max-w-[85%]",
                    edu.highlight ? "text-amber-200" : "text-neutral-200"
                  )}>
                    {edu.title}
                  </span>
                  {edu.highlight && (
                    <span className="text-amber-400 text-lg">🎓</span>
                  )}
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-300">{edu.institution}</span>
                  <span className="text-neutral-400 font-mono bg-neutral-900/50 px-2 py-0.5 rounded border border-neutral-800">{edu.year}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-8 h-[1px] bg-neutral-700"></span>
            Certificaciones
          </h3>
          <ul className="space-y-4">
            {certifications.map((cert, idx) => (
              <li key={idx} className="flex flex-col border border-neutral-800/50 bg-neutral-900/30 rounded-lg p-3 hover:border-neutral-700 transition-colors">
                <span className="text-neutral-300 font-medium text-sm mb-1">{cert.title}</span>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-300">{cert.institution}</span>
                  <span className="text-neutral-300 font-mono">{cert.year}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// Subcomponente para cada item de experiencia con funcionalidad de acordeón
function ExperienceItem({ item, index }: { item: ExperienceEntry; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMoreThanTwo = item.highlight.length > 2;
  const visiblePoints = isExpanded ? item.highlight : item.highlight.slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 group"
    >
      {/* Timeline Dot - Preparado para logo de empresa */}
      <div
        className="absolute -left-[13px] top-1.5 w-6 h-6 rounded-full border-2 border-neutral-900 ring-4 ring-neutral-950 transition-all duration-300 group-hover:scale-110 flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor: item.color || "#f59e0b",
          boxShadow: `0 0 12px ${item.color || "#f59e0b"}99`
        }}
      >
        {/* Placeholder para logo futuro - por ahora muestra un punto */}
        <span className="w-2 h-2 rounded-full bg-white/40" />
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <h4 className="text-lg font-bold text-neutral-200">
          {item.role}
        </h4>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <span
            className="text-base font-medium transition-colors duration-300"
            style={{ color: item.color || "#fbbf24" }}
          >
            {item.company}
          </span>
          <span className="text-xs font-mono text-neutral-300 uppercase tracking-widest whitespace-nowrap">
            {item.period}
          </span>
        </div>
      </div>

      <ul className="space-y-4 mt-3">
        <AnimatePresence initial={false}>
          {visiblePoints.map((point: string, i: number) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-neutral-300 leading-relaxed max-w-2xl flex items-start gap-3"
            >
              <span className="mt-2 w-2 h-[1px] bg-neutral-500 shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {/* Botón Ver más / Ver menos */}
      {hasMoreThanTwo && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 inline-flex items-center gap-1 text-xs text-amber-500 hover:text-amber-400 font-medium transition-colors duration-200 group/btn"
        >
          <span>{isExpanded ? "Ver menos" : `Ver más (${item.highlight.length - 2} más)`}</span>
          <ChevronDown
            className={cn(
              "w-3 h-3 transition-transform duration-300",
              isExpanded && "rotate-180"
            )}
          />
        </button>
      )}
    </motion.div>
  );
}
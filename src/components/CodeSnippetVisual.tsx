"use client";

import { motion } from "framer-motion";

export function CodeSnippetVisual() {
  const codeLines = [
    { text: "SELECT", color: "#f59e0b" }, // Amber
    { text: "  ST_AsGeoJSON(geom) AS geometry,", color: "#f59e0b" },
    { text: "  species_name,", color: "#9ca3af" },
    { text: "  observation_date", color: "#9ca3af" },
    { text: "FROM", color: "#f59e0b" },
    { text: "  biodiversity_sightings", color: "#93c5fd" }, // Blueish
    { text: "WHERE", color: "#f59e0b" },
    { text: "  ST_Intersects(", color: "#3b82f6" }, // Blue
    { text: "    geom,", color: "#f59e0b" },
    { text: "    ST_MakeEnvelope(-73.0, -40.0, -70.0, -35.0, 4326)", color: "#10b981" },
    { text: "  )", color: "#3b82f6" },
    { text: "  AND status = 'verified';", color: "#9ca3af" }
  ];

  return (
    <div className="relative w-full max-w-md mx-auto perspective-1000">
      <motion.div
        initial={{ rotateX: 0, rotateY: 0 }}
        animate={{ 
           rotateX: [0, 5, 0], 
           rotateY: [0, 5, 0],
           y: [0, -10, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative bg-[#0d1117] rounded-xl border border-neutral-800 shadow-2xl p-4 overflow-hidden"
        style={{
           transformStyle: "preserve-3d",
           boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        }}
      >
        {/* Window controls */}
        <div className="flex gap-1.5 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>

        {/* Code Content */}
        <div className="font-mono text-xs sm:text-sm leading-relaxed">
           {codeLines.map((line, idx) => (
             <div key={idx} style={{ color: line.color, paddingLeft: idx > 0 && idx < 4 ? "1rem" : idx > 6 && idx < 11 ? "1rem" : "0" }}>
                <span className="text-neutral-700 select-none mr-4 text-[10px]">{idx + 1}</span>
                {line.text}
             </div>
           ))}
        </div>
        
        {/* Reflection/Shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      </motion.div>
      
      {/* Background decoration */}
      <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
    </div>
  );
}

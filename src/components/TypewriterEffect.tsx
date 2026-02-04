"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Full Stack Developer", "Mobile App Developer", "GIS Specialist", "Fintech Developer"];

export function TypewriterEffect() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const colors = {
    "Full Stack Developer": "text-white",
    "Mobile App Developer": "text-emerald-400", 
    "GIS Specialist": "text-blue-500",
    "Fintech Developer": "text-amber-500",
  }[words[index]] || "text-amber-500";

  return (
    <span className="inline-block min-w-[120px] text-left">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`inline-block font-bold ${colors}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

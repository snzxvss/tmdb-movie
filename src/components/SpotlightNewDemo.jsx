"use client";
import React from "react";
import { motion } from "framer-motion"; // Importa Framer Motion
import { Spotlight } from "./Spotlight";

export function SpotlightNewDemo() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#1b1b1b] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="w-full relative z-10">
        {/* Animación del h1 para rating, de abajo hacia arriba con desvanecido */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="w-full text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          Reseñas y calificaciones <br /> por la crítica cinelofílica
        </motion.h1>
        {/* Segundo mensaje adicional */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.0 }}
          className="w-full mt-4 text-2xl md:text-4xl font-semibold text-center text-white"
        >
          Descubre películas y series de acuerdo a la crítica
        </motion.h1>
      </div>
    </div>
  );
}
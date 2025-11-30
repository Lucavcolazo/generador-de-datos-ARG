'use client';

import { useEffect, useRef, useState } from 'react';
import { renderizarFrenteDNI, renderizarDorsoDNI, descargarCanvas, PersonaData } from '@/lib/dniTemplate';
import { Download } from 'lucide-react';
import { motion } from 'motion/react';

interface DNIGeneratorProps {
  persona: PersonaData;
}

export default function DNIGenerator({ persona }: DNIGeneratorProps) {
  const frenteRef = useRef<HTMLCanvasElement>(null);
  const dorsoRef = useRef<HTMLCanvasElement>(null);
  const [frenteCanvas, setFrenteCanvas] = useState<HTMLCanvasElement | null>(null);
  const [dorsoCanvas, setDorsoCanvas] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Generar frente
    const frente = renderizarFrenteDNI(persona);
    setFrenteCanvas(frente);
    if (frenteRef.current) {
      const ctx = frenteRef.current.getContext('2d');
      if (ctx) {
        frenteRef.current.width = frente.width;
        frenteRef.current.height = frente.height;
        ctx.drawImage(frente, 0, 0);
      }
    }

    // Generar dorso
    const dorso = renderizarDorsoDNI(persona);
    setDorsoCanvas(dorso);
    if (dorsoRef.current) {
      const ctx = dorsoRef.current.getContext('2d');
      if (ctx) {
        dorsoRef.current.width = dorso.width;
        dorsoRef.current.height = dorso.height;
        ctx.drawImage(dorso, 0, 0);
      }
    }
  }, [persona]);

  const handleDownloadFrente = () => {
    if (frenteCanvas) {
      descargarCanvas(frenteCanvas, `DNI_Frente_${persona.dni.replace(/\./g, '_')}.png`);
    }
  };

  const handleDownloadDorso = () => {
    if (dorsoCanvas) {
      descargarCanvas(dorsoCanvas, `DNI_Dorso_${persona.dni.replace(/\./g, '_')}.png`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-8"
    >
      <h3 className="text-2xl font-black mb-6 text-white text-center border-b border-white/20 pb-4">
        DNI Generado
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frente */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-bold text-white/90 mb-4">Frente</h4>
          <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
            <canvas
              ref={frenteRef}
              className="max-w-full h-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <button
            onClick={handleDownloadFrente}
            className="flex items-center gap-2 px-6 py-3 backdrop-blur-md bg-white/20 text-white font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30 rounded-lg"
          >
            <Download className="w-5 h-5" />
            Descargar Frente
          </button>
        </div>

        {/* Dorso */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-bold text-white/90 mb-4">Dorso</h4>
          <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
            <canvas
              ref={dorsoRef}
              className="max-w-full h-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <button
            onClick={handleDownloadDorso}
            className="flex items-center gap-2 px-6 py-3 backdrop-blur-md bg-white/20 text-white font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30 rounded-lg"
          >
            <Download className="w-5 h-5" />
            Descargar Dorso
          </button>
        </div>
      </div>
    </motion.div>
  );
}


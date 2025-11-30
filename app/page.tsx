'use client';

import { useState, useEffect } from 'react';
import { generarDatos, TipoGeneracion, obtenerCantidadDNIsUnicos, limpiarDNIsGenerados } from '@/lib/dataGenerator';
import DataDisplay from '@/components/DataDisplay';
import LetterGlitch from '@/components/LetterGlitch';
import DecryptedText from '@/components/DecryptedText';

export default function Home() {
  const [tipoGeneracion, setTipoGeneracion] = useState<TipoGeneracion>('propietario-direccion');
  const [datosGenerados, setDatosGenerados] = useState<any>(null);
  const [cantidadDNIs, setCantidadDNIs] = useState<number>(0);

  const handleGenerar = () => {
    const nuevosDatos = generarDatos(tipoGeneracion);
    setDatosGenerados(nuevosDatos);
    setCantidadDNIs(obtenerCantidadDNIsUnicos());
  };

  const handleLimpiarDNIs = () => {
    limpiarDNIsGenerados();
    setCantidadDNIs(0);
  };

  useEffect(() => {
    setCantidadDNIs(obtenerCantidadDNIsUnicos());
  }, []);

  return (
    <main className="min-h-screen relative p-6 md:p-8">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight text-white">
            <DecryptedText
              text="Generador de Datos"
              animateOn="view"
              revealDirection="center"
              speed={80}
              maxIterations={30}
              className="text-white"
              encryptedClassName="text-white/40"
            />
          </h1>
          <p className="text-xl text-white/80 font-medium">
            Datos de prueba argentinos para tus formularios
          </p>
        </div>
        
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-8 mb-8">
          <div className="mb-6">
            <label htmlFor="tipo-generacion" className="block text-xl font-bold mb-4 text-white">
              Tipo de generación:
            </label>
            <select
              id="tipo-generacion"
              value={tipoGeneracion}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTipoGeneracion(e.target.value as TipoGeneracion)}
              className="w-full p-4 backdrop-blur-md bg-white/20 border-2 border-white/30 text-white font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all hover:bg-white/30 rounded-lg [&>option]:bg-gray-900 [&>option]:text-white"
            >
              <optgroup label="Direcciones">
                <option value="solo-direccion">📍 Solo Dirección</option>
              </optgroup>
              <optgroup label="Propietarios">
                <option value="propietario">👔 Propietario</option>
                <option value="propietario-direccion">👔 Propietario + Dirección</option>
              </optgroup>
              <optgroup label="Propiedades">
                <option value="propiedad">🏘️ Propiedad</option>
                <option value="propiedad-completa">🏘️ Propiedad + Propietario</option>
              </optgroup>
              <optgroup label="Inquilinos">
                <option value="inquilino">🏠 Inquilino</option>
                <option value="inquilino-direccion">🏠 Inquilino + Dirección</option>
                <option value="inquilino-garante">🏠 Inquilino + Garante</option>
                <option value="inquilino-garante-direcciones">🏠 Inquilino + Garante + Direcciones de ambos</option>
              </optgroup>
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-4">
            <button
              onClick={handleGenerar}
              className="px-12 py-5 backdrop-blur-md bg-white/20 text-white font-black text-xl hover:bg-white/30 transition-all duration-200 border-2 border-white/40 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 uppercase tracking-wide"
            >
              Generar Datos
            </button>
            {cantidadDNIs > 0 && (
              <button
                onClick={handleLimpiarDNIs}
                className="px-6 py-3 backdrop-blur-md bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-all duration-200 border border-white/20 rounded-lg"
              >
                Limpiar DNI ({cantidadDNIs})
              </button>
            )}
          </div>

          {cantidadDNIs > 0 && (
            <div className="text-center p-3 backdrop-blur-md bg-green-500/20 border border-green-400/30 rounded-lg">
              <p className="text-sm font-semibold text-green-200">
                ✓ Sistema de DNI únicos activo: {cantidadDNIs} DNI generados sin duplicados
              </p>
            </div>
          )}
        </div>

        {datosGenerados && <DataDisplay data={datosGenerados} />}
      </div>
    </main>
  );
}


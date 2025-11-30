import DecryptedText from './DecryptedText';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface DataDisplayProps {
  data: any;
}

export default function DataDisplay({ data }: DataDisplayProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  const formatValue = (value: any): string => {
    if (value === null || value === undefined) return '';
    if (typeof value === 'object') {
      return JSON.stringify(value, null, 2);
    }
    return String(value);
  };

  const handleCopy = async (text: string, fieldId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldId);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const renderField = (label: string, value: any, indent: number = 0, isFirstLevel: boolean = false, index: number = 0) => {
    if (value === null || value === undefined) return null;
    
    const indentStyle = indent > 0 ? { marginLeft: `${indent * 1.5}rem` } : {};
    
    if (typeof value === 'object' && !Array.isArray(value)) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={indentStyle}
          className="cursor-target mb-4 backdrop-blur-md bg-white/5 rounded-xl p-4 border border-white/10 shadow-sm"
        >
          <div className="font-black mb-3 text-xl text-white uppercase tracking-wide border-b border-white/20 pb-2">
            {isFirstLevel ? (
              <DecryptedText
                text={label}
                animateOn="view"
                revealDirection="center"
                speed={100}
                maxIterations={25}
                className="text-white"
                encryptedClassName="text-white/30"
              />
            ) : (
              label
            )}
          </div>
          <div className="ml-2 space-y-3">
            {Object.entries(value).map(([key, val], idx) => 
              renderField(key.charAt(0).toUpperCase() + key.slice(1), val, indent + 1, false, idx)
            )}
          </div>
        </motion.div>
      );
    }
    
    const fieldValue = formatValue(value);
    const fieldId = `${label}-${index}-${indent}`;
    const isCopied = copiedField === fieldId;

    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 0.4, 
          delay: index * 0.05,
          ease: [0.16, 1, 0.3, 1]
        }}
        style={indentStyle}
        className="group mb-3 py-2 px-3 backdrop-blur-sm bg-white/5 rounded-lg border-l-2 border-white/20 flex items-center justify-between gap-2"
      >
        <div className="flex-1 min-w-0">
          <span className="font-bold text-white/90 mr-2">{label}:</span>
          <span className="font-medium text-white/70 break-words">{fieldValue}</span>
        </div>
        <button
          onClick={() => handleCopy(fieldValue, fieldId)}
          className="cursor-target flex-shrink-0 p-2 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
          title="Copiar"
        >
          {isCopied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-white/70" />
          )}
        </button>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="cursor-target mt-8 backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-8 md:p-10"
    >
      <div className="flex items-center justify-between mb-6 border-b border-white/20 pb-4">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-black text-center text-white flex-1"
        >
          <DecryptedText
            text="Datos Generados"
            animateOn="view"
            revealDirection="center"
            speed={80}
            maxIterations={30}
            className="text-white"
            encryptedClassName="text-white/30"
          />
        </motion.h2>
        <button
          onClick={() => handleCopy(JSON.stringify(data, null, 2), 'all-data')}
          className="cursor-target flex-shrink-0 ml-4 p-3 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-200 flex items-center gap-2"
          title="Copiar todos los datos"
        >
          {copiedField === 'all-data' ? (
            <>
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-sm text-green-400 font-semibold">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="w-5 h-5 text-white/70" />
              <span className="text-sm text-white/70 font-semibold">Copiar JSON</span>
            </>
          )}
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-4 backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10"
      >
        {Object.entries(data).map(([key, value], index) => 
          renderField(key.charAt(0).toUpperCase() + key.slice(1), value, 0, true, index)
        )}
      </motion.div>
    </motion.div>
  );
}


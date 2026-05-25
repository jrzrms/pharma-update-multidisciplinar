import React, { useState } from 'react';
import { Search, BookOpen, Heart, Activity, AlertTriangle, ShieldCheck } from 'lucide-react';
import { mockFichas } from '../data/mockData';

export default function FichasFarmaco() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFichaId, setActiveFichaId] = useState(mockFichas[0]?.id || null);

  const filteredFichas = mockFichas.filter(ficha => 
    ficha.drug.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ficha.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ficha.indications.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeFicha = mockFichas.find(f => f.id === activeFichaId);

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-3">
        <div>
          <h2 className="text-base font-bold text-slate-900 font-sans">Fichas Farmacoterapéuticas</h2>
          <p className="text-xs text-slate-500 mt-0.5">Documentos de consulta rápida para biológicos, antimicrobianos complejos e inmunoterapia.</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar fármaco..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-700 font-semibold w-full sm:w-[220px]"
          />
        </div>
      </div>

      {/* Main Layout: Master-Detail */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Left Side: Drug list */}
        <div className="md:col-span-1 border-r border-slate-100 pr-1 space-y-2 max-h-[450px] overflow-y-auto">
          {filteredFichas.length > 0 ? (
            filteredFichas.map(ficha => (
              <button
                key={ficha.id}
                onClick={() => setActiveFichaId(ficha.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                  ficha.id === activeFichaId
                    ? 'bg-purple-50 text-brand-900 border-brand-300 font-bold shadow-sm'
                    : 'bg-white text-slate-700 border-slate-150 hover:bg-slate-50'
                }`}
              >
                <p className="text-xs font-bold text-slate-900 leading-snug">{ficha.drug}</p>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5 truncate">{ficha.category}</p>
              </button>
            ))
          ) : (
            <p className="text-xs text-slate-400 text-center py-6">No se encontraron fármacos</p>
          )}
        </div>

        {/* Right Side: Active drug details */}
        <div className="md:col-span-2">
          {activeFicha ? (
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[9px] uppercase font-bold bg-brand-600 text-white px-2 py-0.5 rounded shadow-sm">
                  {activeFicha.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{activeFicha.drug}</h3>
              </div>

              {/* Ficha details sections */}
              <div className="grid gap-3.5">
                {/* Indications */}
                <div className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-200/50">
                  <div className="p-1.5 bg-white border border-slate-200 text-slate-400 rounded-lg shrink-0">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Indicaciones Principales</h4>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium mt-0.5">{activeFicha.indications}</p>
                  </div>
                </div>

                {/* Posology */}
                <div className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-200/50">
                  <div className="p-1.5 bg-white border border-slate-200 text-brand-600 rounded-lg shrink-0">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Posología y Elaboración</h4>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium mt-0.5">{activeFicha.posology}</p>
                  </div>
                </div>

                {/* Monitoring */}
                <div className="flex gap-3 items-start p-3 bg-rose-50/20 rounded-xl border border-rose-100/60">
                  <div className="p-1.5 bg-white border border-rose-100 text-rose-600 rounded-lg shrink-0">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] uppercase font-bold text-rose-800 tracking-wider">Monitorización de Seguridad</h4>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium mt-0.5">{activeFicha.monitoring}</p>
                  </div>
                </div>

                {/* Adjustments in frail patient */}
                <div className="flex gap-3 items-start p-3 bg-blue-50/20 rounded-xl border border-blue-100/60">
                  <div className="p-1.5 bg-white border border-blue-100 text-blue-600 rounded-lg shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] uppercase font-bold text-blue-800 tracking-wider">Ajustes en Paciente Frágil / Geriátrico</h4>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium mt-0.5">{activeFicha.frailPatient}</p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                <span className="text-[10px] text-slate-400">Verificado por la CFT el 20/05/2026</span>
                <button
                  onClick={() => alert(`Simulación: Exportando ficha farmacoterapéutica en PDF para ${activeFicha.drug}`)}
                  className="text-[10px] font-bold bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-100 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Descargar Ficha en PDF
                </button>
              </div>

            </div>
          ) : (
            <p className="text-xs text-slate-400 text-center py-12">Selecciona un fármaco para ver su ficha farmacoterapéutica</p>
          )}
        </div>

      </div>

    </div>
  );
}

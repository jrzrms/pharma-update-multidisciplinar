import React, { useState } from 'react';
import { Layers, ShieldCheck, Sparkles, HelpCircle, Info } from 'lucide-react';
import { mockEvidenceMap } from '../data/mockData';

export default function EvidenceMap() {
  const { specialties, levels, matrix } = mockEvidenceMap;
  const [selectedCell, setSelectedCell] = useState({
    specIndex: 0,
    lvlIndex: 0
  });

  const getCellData = (specIndex, lvlIndex) => {
    return matrix.find(item => item[0] === specIndex && item[1] === lvlIndex) || [specIndex, lvlIndex, 0, "No hay estudios monitorizados en esta combinación."];
  };

  const getHeatmapColor = (count) => {
    if (count >= 10) return 'bg-purple-800 text-white hover:bg-purple-900';
    if (count >= 7) return 'bg-purple-600 text-white hover:bg-purple-700';
    if (count >= 4) return 'bg-purple-300 text-purple-950 hover:bg-purple-400';
    if (count >= 1) return 'bg-purple-100 text-brand-900 hover:bg-purple-200';
    return 'bg-slate-50 text-slate-300 hover:bg-slate-100';
  };

  const activeCellData = getCellData(selectedCell.specIndex, selectedCell.lvlIndex);

  const getLevelIcon = (index) => {
    switch (index) {
      case 0: return <ShieldCheck className="h-4 w-4 text-emerald-600" />;
      case 1: return <Sparkles className="h-4 w-4 text-brand-600" />;
      default: return <HelpCircle className="h-4 w-4 text-amber-600" />;
    }
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
      
      {/* Title */}
      <div>
        <h2 className="text-base font-bold text-slate-900">Mapa de Evidencia Farmacoterapéutica</h2>
        <p className="text-xs text-slate-500 mt-0.5">Cruza especialidades clínicas con los niveles de solidez de la evidencia científica monitorizada.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Matrix Grid (Col 1 & 2) */}
        <div className="lg:col-span-2 space-y-4 overflow-x-auto pb-2">
          <div className="min-w-[500px]">
            {/* Header X-Axis */}
            <div className="grid grid-cols-4 border-b border-slate-100 pb-2 mb-2">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider pl-1">Especialidad</div>
              {levels.map((lvl, index) => (
                <div key={lvl} className="text-center flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  {getLevelIcon(index)}
                  <span>{lvl}</span>
                </div>
              ))}
            </div>

            {/* Matrix Rows */}
            <div className="space-y-1.5">
              {specialties.map((spec, specIdx) => (
                <div key={spec} className="grid grid-cols-4 items-center">
                  {/* Y-Axis Label */}
                  <div className="text-xs font-bold text-slate-700 truncate pr-2 pl-1">{spec}</div>
                  
                  {/* Grid cells */}
                  {levels.map((lvl, lvlIdx) => {
                    const cell = getCellData(specIdx, lvlIdx);
                    const isSelected = selectedCell.specIndex === specIdx && selectedCell.lvlIndex === lvlIdx;
                    return (
                      <div key={lvl} className="px-1">
                        <button
                          onClick={() => setSelectedCell({ specIndex: specIdx, lvlIndex: lvlIdx })}
                          className={`w-full py-3.5 px-2 rounded-xl text-xs font-bold text-center border transition-all ${getHeatmapColor(cell[2])} ${
                            isSelected 
                              ? 'ring-4 ring-purple-400 ring-offset-1 border-purple-500 font-extrabold shadow-sm' 
                              : 'border-transparent'
                          }`}
                        >
                          {cell[2]} {cell[2] === 1 ? 'estudio' : 'estudios'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap Legend */}
          <div className="flex items-center gap-4 pt-3.5 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            <span>Leyenda del mapa:</span>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1"><span className="h-3 w-6 rounded bg-slate-50 border border-slate-200 inline-block"></span> 0</span>
              <span className="flex items-center gap-1"><span className="h-3 w-6 rounded bg-purple-100 inline-block"></span> 1-3</span>
              <span className="flex items-center gap-1"><span className="h-3 w-6 rounded bg-purple-300 inline-block"></span> 4-6</span>
              <span className="flex items-center gap-1"><span className="h-3 w-6 rounded bg-purple-600 inline-block"></span> 7-9</span>
              <span className="flex items-center gap-1"><span className="h-3 w-6 rounded bg-purple-800 inline-block"></span> 10+</span>
            </div>
          </div>
        </div>

        {/* Cell Details Panel (Col 3) */}
        <div className="lg:col-span-1 bg-slate-50 p-5 rounded-2xl border border-slate-200/60 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-brand-600 text-white shadow-sm inline-block mb-1.5">
                Detalle del Nivel
              </span>
              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                {specialties[selectedCell.specIndex]}
              </h3>
              <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                <span>Evidencia:</span>
                <span className="font-bold text-slate-700 flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-200">
                  {getLevelIcon(selectedCell.lvlIndex)}
                  {levels[selectedCell.lvlIndex]}
                </span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/60">
              <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1 flex items-center gap-1">
                <Info className="h-3.5 w-3.5 text-slate-400" />
                Análisis Cualitativo
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeCellData[3]}
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200/60 pt-4 mt-6">
            <button
              onClick={() => {
                alert(`Simulación: Filtrando Dashboard por Especialidad: "${specialties[selectedCell.specIndex]}"`);
              }}
              className="w-full text-center py-2 rounded-xl bg-white hover:bg-slate-100 text-brand-700 border border-slate-200 text-xs font-bold transition-all"
            >
              Ver publicaciones relacionadas
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

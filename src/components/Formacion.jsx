import React, { useState } from 'react';
import { Award, Clock, BookOpen, CheckCircle, XCircle, ChevronRight, HelpCircle } from 'lucide-react';
import { mockRutasFormativas } from '../data/mockData';

export default function Formacion() {
  const [selectedRutaId, setSelectedRutaId] = useState(mockRutasFormativas[0]?.id || null);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { caseId: optionIndex }
  const [showExplanation, setShowExplanation] = useState({}); // { caseId: true/false }

  const activeRuta = mockRutasFormativas.find(r => r.id === selectedRutaId);

  const handleSelectOption = (caseId, optionIdx) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [caseId]: optionIdx
    }));
    setShowExplanation(prev => ({
      ...prev,
      [caseId]: true
    }));
  };

  const handleResetCase = (caseId) => {
    setSelectedAnswers(prev => {
      const copy = { ...prev };
      delete copy[caseId];
      return copy;
    });
    setShowExplanation(prev => {
      const copy = { ...prev };
      delete copy[caseId];
      return copy;
    });
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
      
      {/* Title */}
      <div>
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Award className="h-5 w-5 text-brand-600" />
          Mi Plan de Actualización y Formación Continuada
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">Rutas formativas acreditadas por especialidad clínica para traslación de la evidencia.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Left column: Routes overview list */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Rutas Activas</h3>
          <div className="space-y-2">
            {mockRutasFormativas.map(ruta => {
              const isActive = ruta.id === selectedRutaId;
              return (
                <button
                  key={ruta.id}
                  onClick={() => setSelectedRutaId(ruta.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-purple-50 text-brand-900 border-brand-300 shadow-sm font-bold'
                      : 'bg-white text-slate-700 border-slate-150 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[9px] uppercase font-extrabold px-2 py-0.5 rounded bg-brand-600 text-white shadow-sm">
                      {ruta.specialty}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {ruta.time}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">{ruta.title}</h4>
                    <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{ruta.modulesCount} módulos formativos</p>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full mt-1.5 space-y-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-400 font-medium">Progreso</span>
                      <span className="text-brand-700 font-bold">{ruta.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-150 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-600 transition-all duration-500 rounded-full" 
                        style={{ width: `${ruta.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column: Interactive test module */}
        <div className="lg:col-span-2 bg-slate-50/50 p-5 rounded-2xl border border-slate-200/60">
          {activeRuta ? (
            <div className="space-y-5">
              <div className="border-b border-slate-200/60 pb-3">
                <span className="text-[10px] font-bold bg-purple-100 text-brand-850 px-2.5 py-0.5 rounded-full border border-purple-200 uppercase">
                  Módulo de Autoevaluación
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1.5">
                  Ruta: {activeRuta.title}
                </h3>
              </div>

              {/* Case Render */}
              {activeRuta.cases.map(item => {
                const answerSelected = selectedAnswers[item.id] !== undefined;
                const selectedIdx = selectedAnswers[item.id];
                const showExpl = showExplanation[item.id];

                return (
                  <div key={item.id} className="space-y-4">
                    
                    {/* Clinical case description */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm space-y-2">
                      <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <BookOpen className="h-4 w-4 text-brand-600" />
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Question */}
                    <div className="space-y-2.5">
                      <h5 className="text-xs font-bold text-slate-800 flex items-start gap-1.5">
                        <HelpCircle className="h-4 w-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{item.question}</span>
                      </h5>

                      {/* Options */}
                      <div className="grid gap-2">
                        {item.options.map((opt, idx) => {
                          let buttonStyle = 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50';
                          let icon = null;

                          if (answerSelected) {
                            if (idx === item.correctIndex) {
                              buttonStyle = 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold';
                              icon = <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />;
                            } else if (idx === selectedIdx) {
                              buttonStyle = 'bg-rose-50 text-rose-800 border-rose-300 font-bold';
                              icon = <XCircle className="h-4 w-4 text-rose-600 shrink-0" />;
                            } else {
                              buttonStyle = 'bg-white text-slate-400 border-slate-100 opacity-60 cursor-not-allowed';
                            }
                          }

                          return (
                            <button
                              key={idx}
                              disabled={answerSelected}
                              onClick={() => handleSelectOption(item.id, idx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between gap-3 ${buttonStyle}`}
                            >
                              <span>{opt}</span>
                              {icon}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Detailed explanation */}
                    {showExpl && (
                      <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100/80 space-y-2 animate-fade-in">
                        <h5 className="text-[10px] uppercase font-bold text-brand-800 tracking-wider">Explicación Razonada</h5>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {item.explanation}
                        </p>
                        <div className="pt-2 border-t border-purple-100/50 flex justify-end">
                          <button
                            onClick={() => handleResetCase(item.id)}
                            className="text-[10px] font-bold text-brand-700 hover:underline"
                          >
                            Reintentar Caso Clínico
                          </button>
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-xs text-slate-400 text-center py-12">Selecciona una ruta formativa para cargar el módulo</p>
          )}
        </div>

      </div>

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  X, ShieldAlert, Award, FileText, CheckCircle2, 
  HelpCircle, Copy, Check, MessageSquare, BookOpen, 
  Sliders, Info, AlertTriangle, ChevronRight 
} from 'lucide-react';

export default function ArticleDetail({ article, onClose, initialTab = 'practica' }) {
  const [activeSubTab, setActiveSubTab] = useState(initialTab);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveSubTab(initialTab);
  }, [initialTab, article]);

  if (!article) return null;

  const handleCopySession = () => {
    const sessionText = `
SESIÓN CLÍNICA: ${article.title}
Fuente: ${article.source} | Fecha: ${article.date}

=== 3 MENSAJES CLAVE ===
${article.clinicalSession.keyMessages.map((m, i) => `${i + 1}. ${m}`).join('\n')}

=== DIAPOSITIVA RESUMEN ===
${article.clinicalSession.summarySlide}

=== PREGUNTA PARA EL DEBATE ===
${article.clinicalSession.debateQuestion}

=== CASO CLÍNICO BREVE ===
${article.clinicalSession.clinicalCase}

=== APLICABILIDAD LOCAL ===
${article.clinicalSession.localApplicability}
    `.trim();

    navigator.clipboard.writeText(sessionText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getGuidelineBadgeColor = (classification) => {
    switch (classification) {
      case 'confirma': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'amplía': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'cuestiona': return 'bg-amber-50 text-amber-700 border-amber-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getGuidelineLabel = (classification) => {
    switch (classification) {
      case 'confirma': return 'Confirma la guía clínica';
      case 'amplía': return 'Amplía la guía clínica';
      case 'cuestiona': return 'Cuestiona o modifica la guía';
      default: return 'No modifica la guía';
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-brand-900 to-purple-950 text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors"
            title="Cerrar detalle"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-brand-500 text-white">
              {article.specialty}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/20 text-white">
              {article.pubType}
            </span>
            <span className="text-[10px] font-medium text-purple-200">
              {article.source} • {article.date}
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold pr-8 leading-snug">
            {article.title}
          </h2>

          <div className="flex items-center gap-2 mt-4 text-xs">
            <span className="text-white/70">Puntuación de relevancia:</span>
            <span className="font-bold bg-white/15 px-2.5 py-0.5 rounded-full border border-white/10">
              {article.relevance} / 100
            </span>
          </div>
        </div>

        {/* Modal Tabs Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto whitespace-nowrap scrollbar-none">
          <button
            onClick={() => setActiveSubTab('practica')}
            className={`flex-1 py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              activeSubTab === 'practica' 
                ? 'border-brand-600 text-brand-700 bg-white' 
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Award className="h-4 w-4" />
            <span>Cambio de Práctica</span>
          </button>
          
          <button
            onClick={() => setActiveSubTab('critica')}
            className={`flex-1 py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              activeSubTab === 'critica' 
                ? 'border-brand-600 text-brand-700 bg-white' 
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>Lectura Crítica (GRADE)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('gestion')}
            className={`flex-1 py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              activeSubTab === 'gestion' 
                ? 'border-brand-600 text-brand-700 bg-white' 
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Sliders className="h-4 w-4" />
            <span>Impacto y Gestión</span>
          </button>

          <button
            onClick={() => setActiveSubTab('sesion')}
            className={`flex-1 py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              activeSubTab === 'sesion' 
                ? 'border-brand-600 text-brand-700 bg-white' 
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Sesión Clínica</span>
          </button>
        </div>

        {/* Modal Content - Scrollable area */}
        <div className="p-6 overflow-y-auto flex-1 bg-white">
          
          {/* SubTab 1: Cambio de Practica */}
          {activeSubTab === 'practica' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                  <span className="h-2 w-2 rounded-full bg-brand-600"></span>
                  Lo que cambia mi práctica
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-brand-50/50 p-4 rounded-xl border border-brand-100">
                    <h4 className="text-xs font-bold text-brand-800 mb-1">¿Qué aporta de nuevo?</h4>
                    <p className="text-xs text-slate-700 leading-relaxed">{article.practiceChange.whatsNew}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-700 mb-1">¿A qué perfil de paciente aplica?</h4>
                    <p className="text-xs text-slate-700 leading-relaxed">{article.practiceChange.patientProfile}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-700 mb-1">¿Qué fármacos afecta?</h4>
                    <p className="text-xs text-slate-700 leading-relaxed">{article.practiceChange.drugsAffected}</p>
                  </div>
                  <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-100">
                    <h4 className="text-xs font-bold text-rose-800 flex items-center gap-1 mb-1">
                      <ShieldAlert className="h-3.5 w-3.5" />
                      Precauciones especiales
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">{article.practiceChange.precautions}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                  <span className="h-2 w-2 rounded-full bg-brand-600"></span>
                  Comparador con Guías Clínicas
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                  <div className={`text-xs font-bold px-3 py-1.5 rounded-lg border uppercase tracking-wider ${getGuidelineBadgeColor(article.guidelineComparison.classification)}`}>
                    {getGuidelineLabel(article.guidelineComparison.classification)}
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed flex-1 pt-0.5">
                    {article.guidelineComparison.details}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SubTab 2: Lectura Critica */}
          {activeSubTab === 'critica' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-brand-600"></span>
                    Lectura Crítica GRADE Simplificada
                  </h3>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-slate-400">Calidad:</span>
                    <span className="bg-purple-100 text-purple-700 border border-purple-200 font-bold px-2 py-0.5 rounded-md uppercase">
                      {article.criticalReading.evidenceQuality}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                    <h4 className="text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-brand-600" />
                      Pregunta PICO (Paciente, Intervención, Comparador, Outcome)
                    </h4>
                    <p className="text-xs text-slate-600 whitespace-pre-line leading-relaxed pl-5">
                      {article.criticalReading.pico}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-100">
                      <h4 className="text-xs font-bold text-slate-700 mb-1">Validez Interna</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{article.criticalReading.internalValidity}</p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-100">
                      <h4 className="text-xs font-bold text-slate-700 mb-1">Validez Externa</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{article.criticalReading.externalValidity}</p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-100">
                      <h4 className="text-xs font-bold text-slate-700 mb-1">Sesgos Detectados</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{article.criticalReading.biases}</p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-100">
                      <h4 className="text-xs font-bold text-slate-700 mb-1">Tamaño Muestral / Potencia</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{article.criticalReading.sampleSize}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SubTab 3: Impacto y Gestion */}
          {activeSubTab === 'gestion' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                  <span className="h-2 w-2 rounded-full bg-brand-600"></span>
                  Impacto Farmacoterapéutico y Gestión Hospitalaria
                </h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 bg-purple-50/30 rounded-xl border border-purple-100">
                    <div className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                      <Sliders className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-slate-900 mb-1">Selección, Protocolos locales y Comisiones</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {article.pharmacotherapeuticImpact.selection}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 bg-blue-50/30 rounded-xl border border-blue-100">
                    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                      <Info className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-slate-900 mb-1">Intervenciones Farmacéuticas y Conciliación</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {article.pharmacotherapeuticImpact.reconciliation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SubTab 4: Modo Sesion Clinica */}
          {activeSubTab === 'sesion' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-brand-600"></span>
                    Modo Sesión Clínica / Docencia
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">Estructura preparada para presentaciones rápidas y sesiones de servicio.</p>
                </div>
                <button
                  onClick={handleCopySession}
                  className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span>¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Exportar Sesión</span>
                    </>
                  )}
                </button>
              </div>

              {/* 3 key messages */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <h4 className="text-xs font-bold text-brand-800 uppercase tracking-wide mb-2 flex items-center gap-1">
                  <Check className="h-3.5 w-3.5 text-brand-600" />
                  3 Mensajes Clave (Key Messages)
                </h4>
                <ul className="space-y-2">
                  {article.clinicalSession.keyMessages.map((msg, index) => (
                    <li key={index} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="text-brand-600 font-bold">{index + 1}.</span>
                      <span>{msg}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diapo Resumen */}
              <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-[11px] leading-relaxed border border-slate-800 shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-wider border-b border-slate-800 pb-1.5 mb-2 font-sans font-semibold">
                  <span>Esquema de Diapositiva Resumida</span>
                  <span className="text-brand-400">Diapo #1</span>
                </div>
                <pre className="whitespace-pre-wrap">{article.clinicalSession.summarySlide}</pre>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Caso Clinico */}
                <div className="p-4 rounded-xl border border-slate-100 bg-brand-50/20">
                  <h4 className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5 text-brand-600" />
                    Caso Clínico Ilustrativo
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {article.clinicalSession.clinicalCase}
                  </p>
                </div>

                {/* Pregunta Debate & Aplicabilidad local */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-slate-100 bg-amber-50/20">
                    <h4 className="text-xs font-bold text-amber-800 mb-1 flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" />
                      Pregunta de Debate en el Servicio
                    </h4>
                    <p className="text-xs text-slate-700 font-medium">
                      {article.clinicalSession.debateQuestion}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                    <h4 className="text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                      <Info className="h-3.5 w-3.5 text-slate-400" />
                      Plan de Adaptabilidad Local
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {article.clinicalSession.localApplicability}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-200 px-6 py-4 bg-slate-50 flex items-center justify-between">
          <span className="text-[10px] text-slate-400">ID: {article.id}</span>
          <button
            onClick={onClose}
            className="py-1.5 px-4 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

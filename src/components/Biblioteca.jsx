import React, { useState } from 'react';
import { 
  Bookmark, Mail, Sparkles, MessageSquare, AlertTriangle, 
  HelpCircle, ChevronRight, CheckSquare, Save, Settings 
} from 'lucide-react';
import { mockWeeklySummary } from '../data/mockData';

export default function Biblioteca({ 
  articles, 
  savedArticleIds, 
  onOpenArticle, 
  onToggleSaveArticle 
}) {
  // Alerts settings state
  const [alertEmail, setAlertEmail] = useState('clinical.pharmacist@hospital.es');
  const [alertThreshold, setAlertThreshold] = useState(85);
  const [alertFrequencies, setAlertFrequencies] = useState('Semanal'); // Semanal, Quincenal, Diario
  const [alertTopics, setAlertTopics] = useState(['Oncología/Hematología', 'Infecciones']);
  const [isAlertSaved, setIsAlertSaved] = useState(false);

  // States for saved articles: folder filter, and status filter
  const [selectedFolder, setSelectedFolder] = useState('Todos');
  const [selectedStatus, setSelectedStatus] = useState('Todos');
  
  // Custom status dictionary for saved articles (local state)
  const [articleStatuses, setArticleStatuses] = useState({
    'art-1': 'cambia', // 'pendiente', 'leido', 'cambia'
    'art-2': 'pendiente',
    'art-3': 'leido'
  });

  const handleStatusChange = (id, newStatus) => {
    setArticleStatuses(prev => ({
      ...prev,
      [id]: newStatus
    }));
  };

  const savedArticles = articles.filter(art => savedArticleIds.includes(art.id));

  // Folders are built dynamically based on saved articles' specialties
  const folders = ['Todos', ...new Set(savedArticles.map(art => art.specialty))];

  const handleSaveAlertSettings = (e) => {
    e.preventDefault();
    setIsAlertSaved(true);
    setTimeout(() => setIsAlertSaved(false), 3000);
  };

  const handleTopicToggle = (topic) => {
    setAlertTopics(prev => 
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  // Filter saved articles by folder and status
  const filteredSaved = savedArticles.filter(art => {
    const matchesFolder = selectedFolder === 'Todos' || art.specialty === selectedFolder;
    
    const artStatus = articleStatuses[art.id] || 'pendiente';
    const matchesStatus = selectedStatus === 'Todos' || 
      (selectedStatus === 'pendiente' && artStatus === 'pendiente') ||
      (selectedStatus === 'leido' && artStatus === 'leido') ||
      (selectedStatus === 'cambia' && artStatus === 'cambia');

    return matchesFolder && matchesStatus;
  });

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'leido': return 'bg-slate-100 text-slate-700 border-slate-200';
      case 'cambia': return 'bg-purple-100 text-purple-700 border-purple-200 font-semibold';
      default: return 'bg-amber-50 text-amber-700 border-amber-200';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'leido': return 'Leído';
      case 'cambia': return 'Cambia Práctica';
      default: return 'Pendiente';
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      
      {/* Col 1 & 2: Saved Articles & Weekly Summary */}
      <div className="lg:col-span-2 space-y-6">
        
        {/* Biblioteca Grid */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-3 gap-2">
            <div className="flex items-center gap-2">
              <Bookmark className="h-5 w-5 text-brand-600 fill-brand-100" />
              <h2 className="text-base font-bold text-slate-900">Biblioteca Personal</h2>
            </div>
            
            {/* Quick folder & status filters */}
            <div className="flex flex-wrap items-center gap-1.5">
              <select
                value={selectedFolder}
                onChange={(e) => setSelectedFolder(e.target.value)}
                className="text-[10px] bg-slate-50 border border-slate-200 rounded-lg py-1 px-2 font-semibold text-slate-600"
              >
                <option value="Todos">Todas las Carpetas</option>
                {folders.filter(f => f !== 'Todos').map(f => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="text-[10px] bg-slate-50 border border-slate-200 rounded-lg py-1 px-2 font-semibold text-slate-600"
              >
                <option value="Todos">Todos los Estados</option>
                <option value="pendiente">Pendientes</option>
                <option value="leido">Leídos</option>
                <option value="cambia">Cambia Práctica</option>
              </select>
            </div>
          </div>

          {filteredSaved.length > 0 ? (
            <div className="space-y-3">
              {filteredSaved.map(art => {
                const currentStatus = articleStatuses[art.id] || 'pendiente';
                return (
                  <div key={art.id} className="p-4 rounded-xl border border-slate-100 bg-white hover:border-brand-200 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-100">
                          {art.specialty}
                        </span>
                        <span className={`text-[9px] uppercase font-medium border px-2 py-0.5 rounded-full ${getStatusBadgeClass(currentStatus)}`}>
                          {getStatusLabel(currentStatus)}
                        </span>
                      </div>
                      <h3 
                        onClick={() => onOpenArticle(art, 'practica')}
                        className="text-xs sm:text-sm font-bold text-slate-900 leading-snug hover:text-brand-700 cursor-pointer truncate"
                      >
                        {art.title}
                      </h3>
                      <p className="text-[10px] text-slate-400 mt-0.5">{art.source} • Relevancia: {art.relevance}/100</p>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                      {/* Set status */}
                      <select
                        value={currentStatus}
                        onChange={(e) => handleStatusChange(art.id, e.target.value)}
                        className="text-[10px] bg-slate-100 border-none rounded-lg py-1 px-2 font-bold text-slate-600 cursor-pointer focus:ring-1 focus:ring-brand-500"
                      >
                        <option value="pendiente">Pendiente</option>
                        <option value="leido">Leído</option>
                        <option value="cambia">Cambia Práctica</option>
                      </select>

                      <button
                        onClick={() => onToggleSaveArticle(art.id)}
                        className="text-[10px] font-semibold text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-100 px-2 py-1 rounded-lg transition-colors"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-8 text-center bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
              <Bookmark className="h-8 w-8 text-slate-300 mx-auto mb-2" />
              <p className="text-xs font-bold text-slate-600">No hay artículos guardados en esta categoría</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Ve al Dashboard principal y pulsa "Guardar" en los estudios de tu interés.</p>
            </div>
          )}
        </div>

        {/* Resumen Semanal Autogenerado */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand-600 fill-brand-100" />
              <h2 className="text-base font-bold text-slate-900">Resumen Semanal Autogenerado</h2>
            </div>
            <span className="text-[10px] font-bold bg-brand-50 text-brand-700 px-2.5 py-0.5 rounded-full border border-brand-100">
              {mockWeeklySummary.dateRange}
            </span>
          </div>

          <div className="space-y-4">
            
            {/* 5 Imprescindibles */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5 uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600"></span>
                Los 5 Imprescindibles de la Semana
              </h4>
              <ul className="grid gap-1.5">
                {mockWeeklySummary.essentials.map((item, index) => (
                  <li key={index} className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-start gap-2.5">
                    <span className="font-bold text-brand-600 shrink-0 bg-brand-50 rounded-full h-5 w-5 flex items-center justify-center text-[10px] border border-brand-100">{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              {/* 3 Cambios de practica */}
              <div className="bg-purple-50/20 p-4 rounded-xl border border-purple-100/60 space-y-2">
                <h4 className="text-xs font-bold text-brand-900 uppercase tracking-wide flex items-center gap-1">
                  <CheckSquare className="h-4 w-4 text-brand-600" />
                  3 Cambios de Práctica
                </h4>
                <ul className="space-y-2 pl-1">
                  {mockWeeklySummary.practiceChanges.map((change, index) => (
                    <li key={index} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="font-bold text-brand-600">•</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                {/* 1 Controversia */}
                <div className="bg-amber-50/25 p-4 rounded-xl border border-amber-100 space-y-1.5">
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wide flex items-center gap-1">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    1 Controversia Científica
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mockWeeklySummary.controversy}
                  </p>
                </div>

                {/* 1 Propuesta sesion */}
                <div className="bg-blue-50/25 p-4 rounded-xl border border-blue-100 space-y-1.5">
                  <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wide flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5" />
                    1 Propuesta de Sesión Clínica
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mockWeeklySummary.sessionProposal}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Col 3: Alerts Configuration */}
      <div className="space-y-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 h-fit">
          <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
            <Mail className="h-5 w-5 text-brand-600" />
            <h2 className="text-base font-bold text-slate-900">Alertas Científicas</h2>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            Configura el envío automático por correo electrónico de resúmenes críticos adaptados a tus áreas de interés.
          </p>

          <form onSubmit={handleSaveAlertSettings} className="space-y-4 pt-1">
            {/* Email input */}
            <div className="space-y-1">
              <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Email del Profesional</label>
              <input
                type="email"
                required
                value={alertEmail}
                onChange={(e) => setAlertEmail(e.target.value)}
                className="w-full py-2 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-700 font-semibold"
              />
            </div>

            {/* Threshold slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider text-slate-400">
                <span>Umbral de Relevancia</span>
                <span className="text-brand-600 font-bold">&gt;= {alertThreshold}</span>
              </div>
              <input
                type="range"
                min="50"
                max="95"
                step="5"
                value={alertThreshold}
                onChange={(e) => setAlertThreshold(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
            </div>

            {/* Frequency selection */}
            <div className="space-y-1">
              <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Frecuencia de Envío</label>
              <div className="grid grid-cols-3 gap-2">
                {['Diario', 'Semanal', 'Quincenal'].map(freq => (
                  <button
                    key={freq}
                    type="button"
                    onClick={() => setAlertFrequencies(freq)}
                    className={`py-1.5 rounded-lg border text-center text-xs font-semibold transition-all ${
                      alertFrequencies === freq
                        ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic checklist */}
            <div className="space-y-2">
              <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Especialidades a Monitorizar</label>
              <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                {['Oncología/Hematología', 'Infecciones', 'Urgencias', 'Cardiología', 'Reumatología', 'Farmacia Hospitalaria', 'Farmacotecnia', 'Medicina Interna', 'Respiratorio', 'Seguridad', 'Coste-Efectividad', 'Pediatría', 'Paciente Crítico', 'Psiquiatría', 'Geriatría'].map(topic => {
                  const checked = alertTopics.includes(topic);
                  return (
                    <div 
                      key={topic}
                      onClick={() => handleTopicToggle(topic)}
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-slate-100/80 cursor-pointer border border-transparent hover:border-slate-100 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {}} // toggled on container click
                        className="rounded text-brand-600 focus:ring-brand-500 h-3.5 w-3.5 cursor-pointer"
                      />
                      <span className="text-xs text-slate-600 font-semibold">{topic}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-100 hover:shadow-lg transition-all"
            >
              <Save className="h-4 w-4" />
              <span>Guardar Configuración</span>
            </button>

            {isAlertSaved && (
              <div className="p-3 text-center text-xs text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-lg animate-fade-in font-semibold">
                ¡Alertas guardadas con éxito!
              </div>
            )}
          </form>
        </div>
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { 
  Search, SlidersHorizontal, RefreshCw, X, 
  ChevronDown, Calendar, Shield, 
  HelpCircle, ArrowUpDown, AlertCircle 
} from 'lucide-react';
import ArticleCard from './ArticleCard';

export default function Dashboard({ 
  articles, 
  onOpenArticle, 
  savedArticles, 
  onToggleSaveArticle,
  onPrepareSession 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedTransversals, setSelectedTransversals] = useState([]);
  const [selectedPubTypes, setSelectedPubTypes] = useState([]);
  const [selectedSources, setSelectedSources] = useState([]);
  const [minRelevance, setMinRelevance] = useState(0);
  const [sortBy, setSortBy] = useState('relevance'); // 'relevance', 'date', 'impact'
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(false);

  // Sync Simulator State
  const [syncState, setSyncState] = useState({
    lastSync: '25/05/2026 12:00',
    status: 'Inactivo',
    isSyncing: false,
    foundCount: 0,
    showMessage: false
  });

  const handleSync = () => {
    setSyncState(prev => ({ ...prev, isSyncing: true, status: 'Buscando novedades...' }));
    
    // Simulate API fetch delay
    setTimeout(() => {
      const now = new Date();
      const formattedDate = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth()+1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      
      setSyncState({
        lastSync: formattedDate,
        status: 'Completado',
        isSyncing: false,
        foundCount: Math.floor(Math.random() * 4) + 1, // Simulates finding 1 to 4 new items
        showMessage: true
      });
    }, 1800);
  };

  const specialties = [
    "Oncología/Hematología",
    "Urgencias",
    "Cardiología",
    "Reumatología",
    "Infecciones",
    "Farmacia Hospitalaria",
    "Farmacotecnia",
    "Medicina Interna",
    "Respiratorio",
    "Seguridad",
    "Coste-Efectividad",
    "Pediatría",
    "Paciente Crítico",
    "Psiquiatría",
    "Geriatría"
  ];

  const transversals = [
    "Paciente anciano/frágil",
    "Polimedicación",
    "Seguridad del paciente",
    "Sepsis y PROA (Optimización de Antimicrobianos)"
  ];

  const pubTypes = [
    "Ensayo clínico",
    "Guía clínica",
    "Alerta de seguridad",
    "Revisión",
    "Documento de consenso"
  ];

  const availableSources = [
    { label: "Farmacia Hospitalaria", match: "Farmacia Hospitalaria" },
    { label: "European Journal of Hospital Pharmacy", match: "European Journal of Hospital Pharmacy" },
    { label: "NEJM", match: "New England Journal of Medicine" },
    { label: "The Lancet", match: "The Lancet" },
    { label: "EIMC", match: "Enfermedades Infecciosas y Microbiología Clínica" },
    { label: "Emergencias", match: "Emergencias" },
    { label: "Revista Clínica Española", match: "Revista Clínica Española" },
    { label: "AEMPS", match: "Agencia Española de Medicamentos y Productos Sanitarios" },
    { label: "Otras revistas", match: "Otras" }
  ];

  const toggleSpecialty = (spec) => {
    setSelectedSpecialties(prev => 
      prev.includes(spec) ? prev.filter(s => s !== spec) : [...prev, spec]
    );
  };

  const toggleTransversal = (trans) => {
    setSelectedTransversals(prev => 
      prev.includes(trans) ? prev.filter(t => t !== trans) : [...prev, trans]
    );
  };

  const togglePubType = (type) => {
    setSelectedPubTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleSource = (srcLabel) => {
    setSelectedSources(prev => 
      prev.includes(srcLabel) ? prev.filter(s => s !== srcLabel) : [...prev, srcLabel]
    );
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedSpecialties([]);
    setSelectedTransversals([]);
    setSelectedPubTypes([]);
    setSelectedSources([]);
    setMinRelevance(0);
    setSortBy('relevance');
  };

  // Filter & Sort Logic
  const filteredArticles = articles.filter(article => {
    // Search Term match (title, source, summary)
    const matchesSearch = 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase());

    // Specialties match
    const matchesSpecialty = selectedSpecialties.length === 0 || selectedSpecialties.includes(article.specialty);

    // Transversals match
    const matchesTransversal = selectedTransversals.length === 0 || selectedTransversals.includes(article.transversal);

    // Pub Types match
    const matchesPubType = selectedPubTypes.length === 0 || selectedPubTypes.includes(article.pubType);

    // Sources match
    const matchesSource = selectedSources.length === 0 || selectedSources.some(srcLabel => {
      if (srcLabel === "Otras revistas") {
        const mainMatches = [
          "Farmacia Hospitalaria",
          "European Journal of Hospital Pharmacy",
          "New England Journal of Medicine",
          "The Lancet",
          "Enfermedades Infecciosas y Microbiología Clínica",
          "Emergencias",
          "Revista Clínica Española",
          "Agencia Española de Medicamentos y Productos Sanitarios"
        ];
        return !mainMatches.some(m => article.source.includes(m));
      }
      const matchObj = availableSources.find(s => s.label === srcLabel);
      return matchObj && article.source.includes(matchObj.match);
    });

    // Relevance match
    const matchesRelevance = article.relevance >= minRelevance;

    return matchesSearch && matchesSpecialty && matchesTransversal && matchesPubType && matchesSource && matchesRelevance;
  }).sort((a, b) => {
    if (sortBy === 'relevance') {
      return b.relevance - a.relevance;
    }
    if (sortBy === 'impact') {
      return b.impact - a.impact;
    }
    if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  return (
    <div className="space-y-6">
      
      {/* Top Banner: Sync & Fast Action */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-900">Monitor de Evidencia Hospitalaria</h2>
          <p className="text-xs text-slate-500 mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>Fuentes activas: PubMed, AEMPS, EMA, FDA, ClinicalTrials.gov, Guías de Sociedades, Revista Farmacia Hospitalaria, European Journal of Hospital Pharmacy.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-brand-600 font-medium">Última comprobación: {syncState.lastSync}</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto">
          {syncState.showMessage && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 border border-purple-100 text-brand-700 text-xs font-semibold animate-fade-in">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>Sincronizado: +{syncState.foundCount} alertas/artículos encontrados.</span>
            </div>
          )}
          
          <button
            onClick={handleSync}
            disabled={syncState.isSyncing}
            className={`flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-white text-xs font-bold shadow-md shadow-brand-100 transition-all ${
              syncState.isSyncing 
                ? 'bg-brand-400 cursor-not-allowed' 
                : 'bg-brand-600 hover:bg-brand-700 hover:shadow-lg'
            }`}
          >
            <RefreshCw className={`h-4 w-4 ${syncState.isSyncing ? 'animate-spin' : ''}`} />
            <span>{syncState.isSyncing ? 'Buscando...' : 'Actualizar novedades'}</span>
          </button>
        </div>
      </div>

      {/* Main Filter & Feed Section */}
      <div className="grid lg:grid-cols-4 gap-6">
        
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-5 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm h-fit">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <SlidersHorizontal className="h-4 w-4 text-brand-600" />
              Filtros y Búsqueda
            </h3>
            {(selectedSpecialties.length > 0 || selectedTransversals.length > 0 || selectedPubTypes.length > 0 || selectedSources.length > 0 || minRelevance > 0 || searchTerm !== '') && (
              <button 
                onClick={resetFilters}
                className="text-[10px] text-rose-600 hover:underline font-bold transition-all"
              >
                Limpiar todo
              </button>
            )}
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por texto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 w-full text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-slate-700 font-medium"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Sort selection */}
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Ordenar por</label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl py-2 pl-3.5 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500 font-semibold text-slate-700 cursor-pointer"
              >
                <option value="relevance">Puntuación Relevancia</option>
                <option value="date">Fecha de Publicación</option>
                <option value="impact">Impacto Clínico</option>
              </select>
              <ArrowUpDown className="absolute right-3.5 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Slider for relevance */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider text-slate-400">
              <span>Relevancia Mínima</span>
              <span className="text-brand-600 font-bold">{minRelevance} / 100</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={minRelevance}
              onChange={(e) => setMinRelevance(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-600"
            />
          </div>

          {/* Source/Journal Filters */}
          <div className="space-y-2 border-t border-slate-100 pt-3.5">
            <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Revistas y Fuentes</label>
            <div className="flex flex-wrap gap-1.5">
              {availableSources.map(src => {
                const active = selectedSources.includes(src.label);
                return (
                  <button
                    key={src.label}
                    onClick={() => toggleSource(src.label)}
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-all ${
                      active 
                        ? 'bg-brand-600 text-white border-brand-600 shadow-sm shadow-brand-100' 
                        : 'bg-slate-50 text-slate-600 border-slate-200/70 hover:bg-slate-100'
                    }`}
                  >
                    {src.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Specialty Filters */}
          <div className="space-y-2 border-t border-slate-100 pt-3.5">
            <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Especialidad</label>
            <div className="flex flex-wrap gap-1.5">
              {specialties.map(spec => {
                const active = selectedSpecialties.includes(spec);
                return (
                  <button
                    key={spec}
                    onClick={() => toggleSpecialty(spec)}
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-all ${
                      active 
                        ? 'bg-brand-600 text-white border-brand-600 shadow-sm shadow-brand-100' 
                        : 'bg-slate-50 text-slate-600 border-slate-200/70 hover:bg-slate-100'
                    }`}
                  >
                    {spec}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Transversal Filters */}
          <div className="space-y-2 border-t border-slate-100 pt-3.5">
            <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Temas Transversales</label>
            <div className="flex flex-col gap-1.5">
              {transversals.map(trans => {
                const active = selectedTransversals.includes(trans);
                return (
                  <button
                    key={trans}
                    onClick={() => toggleTransversal(trans)}
                    className={`text-[10px] font-semibold text-left px-2.5 py-1.5 rounded-lg border transition-all flex items-center justify-between ${
                      active 
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200 font-bold' 
                        : 'bg-slate-50 text-slate-600 border-slate-200/70 hover:bg-slate-100'
                    }`}
                  >
                    <span>{trans}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Publication Type Filters */}
          <div className="space-y-2 border-t border-slate-100 pt-3.5">
            <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Tipos de Publicación</label>
            <div className="flex flex-wrap gap-1.5">
              {pubTypes.map(type => {
                const active = selectedPubTypes.includes(type);
                return (
                  <button
                    key={type}
                    onClick={() => togglePubType(type)}
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-lg border transition-all ${
                      active 
                        ? 'bg-purple-900 text-purple-100 border-purple-900' 
                        : 'bg-slate-50 text-slate-500 border-slate-200/70 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Articles Feed */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex justify-between items-center text-xs font-medium text-slate-500 px-1">
            <span>Resultados encontrados: <strong className="text-slate-800">{filteredArticles.length}</strong></span>
            {filteredArticles.length === 0 && <span className="text-slate-400">Prueba a restablecer filtros</span>}
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onOpenDetail={() => onOpenArticle(article, 'practica')}
                  isSaved={savedArticles.includes(article.id)}
                  onToggleSave={() => onToggleSaveArticle(article.id)}
                  onPrepareSession={() => onOpenArticle(article, 'sesion')}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center shadow-sm">
              <AlertCircle className="h-10 w-10 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-700">No se encontraron artículos con los filtros aplicados</p>
              <p className="text-xs text-slate-400 mt-1">Prueba a escribir otro término de búsqueda o reducir los filtros de especialidades.</p>
              <button
                onClick={resetFilters}
                className="mt-4 px-4 py-2 rounded-xl bg-brand-50 border border-brand-100 text-brand-700 hover:bg-brand-100 text-xs font-bold transition-all"
              >
                Restablecer todos los filtros
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

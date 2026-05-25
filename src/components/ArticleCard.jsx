import React from 'react';
import { Calendar, BookOpen, ExternalLink, Bookmark, Sparkles, AlertTriangle, FileSpreadsheet, Shield } from 'lucide-react';

export default function ArticleCard({ 
  article, 
  onOpenDetail, 
  isSaved, 
  onToggleSave, 
  onPrepareSession 
}) {
  const getRelevanceColor = (score) => {
    if (score >= 90) return 'text-purple-700 bg-purple-100 border-purple-200';
    if (score >= 80) return 'text-brand-600 bg-brand-50 border-brand-100';
    return 'text-slate-600 bg-slate-100 border-slate-200';
  };

  const getPubTypeIcon = (type) => {
    switch (type) {
      case 'Ensayo clínico': return <Sparkles className="h-3.5 w-3.5" />;
      case 'Guía clínica': return <BookOpen className="h-3.5 w-3.5" />;
      case 'Alerta de seguridad': return <AlertTriangle className="h-3.5 w-3.5" />;
      default: return <FileSpreadsheet className="h-3.5 w-3.5" />;
    }
  };

  const getPubTypeColor = (type) => {
    switch (type) {
      case 'Ensayo clínico': return 'bg-purple-50 text-purple-700 border-purple-100';
      case 'Guía clínica': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'Alerta de seguridad': return 'bg-rose-50 text-rose-700 border-rose-100 animate-pulse';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 hover:border-brand-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full overflow-hidden group">
      {/* Header section with tags & relevance */}
      <div className="p-5 pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
          <div className="flex flex-wrap items-center gap-1.5">
            {/* Specialty tag */}
            <span className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-md bg-brand-600 text-white shadow-sm">
              {article.specialty}
            </span>
            {/* Publication Type tag */}
            <span className={`text-[10px] font-semibold flex items-center gap-1 px-2.5 py-0.5 rounded-md border ${getPubTypeColor(article.pubType)}`}>
              {getPubTypeIcon(article.pubType)}
              {article.pubType}
            </span>
          </div>

          {/* Relevance score badge */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-slate-400 font-medium">Relevancia:</span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${getRelevanceColor(article.relevance)}`}>
              {article.relevance}/100
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 
          onClick={onOpenDetail} 
          className="text-base font-bold text-slate-900 leading-snug group-hover:text-brand-700 transition-colors cursor-pointer line-clamp-3 mb-2"
        >
          {article.title}
        </h3>

        {/* Source & Date info */}
        <div className="flex items-center gap-3 text-xs text-slate-400 font-normal mb-3 border-b border-slate-100 pb-3">
          <span className="truncate max-w-[150px] font-medium text-slate-500">{article.source}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {article.date}
          </span>
        </div>

        {/* Transversal theme badge */}
        {article.transversal && (
          <div className="flex items-center gap-1.5 mb-3">
            <span className="text-[10px] text-slate-400 font-medium">Transversal:</span>
            <span className="text-[10px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-0.5 rounded-md flex items-center gap-1">
              <Shield className="h-2.5 w-2.5" />
              {article.transversal}
            </span>
          </div>
        )}

        {/* Summary text */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-4">
          {article.summary}
        </p>
      </div>

      {/* Action Footer */}
      <div className="mt-auto bg-slate-50/70 border-t border-slate-100/80 p-4 grid grid-cols-3 gap-2">
        {/* Open source */}
        <button
          onClick={() => {
            alert(`Simulación: Abriendo enlace original a PubMed/MEDLINE para el estudio: \n\n"${article.title}"`);
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-1 py-2 px-1 rounded-lg text-slate-600 hover:text-brand-700 hover:bg-white border border-transparent hover:border-slate-200 transition-all duration-200 text-[10px] sm:text-xs font-semibold"
          title="Abrir fuente original en PubMed"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Fuente</span>
        </button>

        {/* Save/Unsave */}
        <button
          onClick={onToggleSave}
          className={`flex flex-col sm:flex-row items-center justify-center gap-1 py-2 px-1 rounded-lg border transition-all duration-200 text-[10px] sm:text-xs font-semibold ${
            isSaved 
              ? 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100/50' 
              : 'text-slate-600 border-transparent hover:text-brand-700 hover:bg-white hover:border-slate-200'
          }`}
          title={isSaved ? "Quitar de biblioteca" : "Guardar en biblioteca"}
        >
          <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-purple-600' : ''}`} />
          <span className="hidden sm:inline">{isSaved ? 'Guardado' : 'Guardar'}</span>
        </button>

        {/* Prepare clinical session */}
        <button
          onClick={onPrepareSession}
          className="flex flex-col sm:flex-row items-center justify-center gap-1 py-2 px-1 rounded-lg text-brand-700 hover:text-brand-800 bg-brand-50 hover:bg-brand-100/60 border border-brand-100 hover:border-brand-200 transition-all duration-200 text-[10px] sm:text-xs font-semibold"
          title="Preparar sesión clínica"
        >
          <BookOpen className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Sesión</span>
        </button>
      </div>
    </div>
  );
}

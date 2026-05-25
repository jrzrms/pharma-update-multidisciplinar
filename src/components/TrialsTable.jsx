import React, { useState } from 'react';
import { Search, Filter, Calendar, Award, CheckCircle2, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { mockTrials } from '../data/mockData';

export default function TrialsTable() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTrialId, setExpandedTrialId] = useState(null);

  const specialties = ['Todas', ...new Set(mockTrials.map(t => t.specialty))];

  const handleToggleExpand = (id) => {
    setExpandedTrialId(prev => prev === id ? null : id);
  };

  const filteredTrials = mockTrials.filter(trial => {
    const matchesSpecialty = selectedSpecialty === 'Todas' || trial.specialty === selectedSpecialty;
    const matchesSearch = 
      trial.intervention.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trial.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trial.phase.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
      
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-3">
        <div>
          <h2 className="text-base font-bold text-slate-900">Ensayos Clínicos en Marcha</h2>
          <p className="text-xs text-slate-500 mt-0.5">Seguimiento de estudios clínicos activos monitorizados a nivel global.</p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {/* Specialty filter */}
          <div className="relative">
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-xl py-2 pl-3.5 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500 font-semibold text-slate-700 cursor-pointer"
            >
              {specialties.map(spec => (
                <option key={spec} value={spec}>{spec === 'Todas' ? 'Todas las Especialidades' : spec}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Search filter */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar ensayo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-700 font-semibold w-full sm:w-[180px]"
            />
          </div>
        </div>
      </div>

      {/* Interactive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-slate-50/50">
              <th className="py-3 px-4">Fase</th>
              <th className="py-3 px-4">Intervención</th>
              <th className="py-3 px-4">Condición Clínica</th>
              <th className="py-3 px-4">Endpoint Estimado</th>
              <th className="py-3 px-4">Estado</th>
              <th className="py-3 px-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {filteredTrials.length > 0 ? (
              filteredTrials.map(trial => {
                const isExpanded = expandedTrialId === trial.id;
                return (
                  <React.Fragment key={trial.id}>
                    <tr 
                      className={`hover:bg-slate-50/50 cursor-pointer transition-colors ${
                        isExpanded ? 'bg-purple-50/10' : ''
                      }`}
                      onClick={() => handleToggleExpand(trial.id)}
                    >
                      <td className="py-3 px-4">
                        <span className="font-bold text-slate-900 bg-slate-100 border border-slate-200/60 px-2 py-0.5 rounded-md text-[10px]">
                          {trial.phase}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-bold text-slate-900">{trial.intervention}</td>
                      <td className="py-3 px-4 text-slate-600 font-medium truncate max-w-[200px]">{trial.condition}</td>
                      <td className="py-3 px-4 text-slate-500 font-medium">{trial.estimatedDate}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                          trial.status.includes('reclutando') 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                            : 'bg-amber-50 text-amber-700 border-amber-100'
                        }`}>
                          {trial.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button className="text-[10px] font-bold text-brand-600 hover:text-brand-700">
                          {isExpanded ? 'Ocultar' : 'Ver más'}
                        </button>
                      </td>
                    </tr>

                    {/* Expandable details row */}
                    {isExpanded && (
                      <tr>
                        <td colSpan="6" className="bg-slate-50/30 p-4 border-b border-slate-100">
                          <div className="grid md:grid-cols-3 gap-4 text-xs">
                            <div className="bg-white p-3 rounded-xl border border-slate-150">
                              <h4 className="font-bold text-slate-500 text-[10px] uppercase tracking-wide mb-1">Especialidad</h4>
                              <p className="font-semibold text-slate-800">{trial.specialty}</p>
                            </div>
                            <div className="bg-white p-3 rounded-xl border border-slate-150">
                              <h4 className="font-bold text-slate-500 text-[10px] uppercase tracking-wide mb-1">Endpoint Primario</h4>
                              <p className="font-semibold text-slate-800">{trial.endpoint}</p>
                            </div>
                            <div className="bg-white p-3 rounded-xl border border-slate-150">
                              <h4 className="font-bold text-slate-500 text-[10px] uppercase tracking-wide mb-1">Prioridad Institucional</h4>
                              <p className="font-semibold text-brand-700 flex items-center gap-1">
                                <Award className="h-3.5 w-3.5" />
                                {trial.relevance}
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-3 p-3 bg-white rounded-xl border border-slate-150 flex items-center justify-between">
                            <span className="text-[10px] text-slate-400 font-semibold">Identificador ClinicalTrials.gov: NCT{Math.floor(10000000 + Math.random() * 90000000)}</span>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                alert(`Simulación: Suscribiéndose a alertas para el ensayo de ${trial.intervention}`);
                              }}
                              className="text-[10px] font-bold bg-brand-50 text-brand-700 hover:bg-brand-100 px-3 py-1 rounded-lg border border-brand-100 transition-colors"
                            >
                              Suscribirse a cambios de fase
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="py-8 text-center text-slate-400">
                  No se encontraron ensayos clínicos que coincidan con la búsqueda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

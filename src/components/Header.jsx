import React from 'react';
import { Activity, Bell, FileText, Award, Layers } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, progressPercent = 58 }) {
  const metrics = [
    {
      id: 'metric-studies',
      title: 'Estudios Monitorizados',
      value: '2.481',
      icon: Activity,
      desc: '+12 esta semana',
      color: 'text-purple-600 bg-purple-50 border-purple-100',
    },
    {
      id: 'metric-alerts',
      title: 'Alertas de Seguridad',
      value: '3',
      icon: Bell,
      desc: '1 urgente de la AEMPS',
      color: 'text-amber-600 bg-amber-50 border-amber-100',
      action: () => setActiveTab('biblioteca'),
    },
    {
      id: 'metric-guides',
      title: 'Guías Clínicas',
      value: '14',
      icon: FileText,
      desc: '2 actualizadas en mayo',
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      id: 'metric-progress',
      title: 'Progreso Formativo',
      value: `${progressPercent}%`,
      icon: Award,
      desc: '2 de 3 rutas activas',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-800 flex items-center justify-center text-white shadow-md shadow-brand-200">
              <Layers className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                PharmaUpdate <span className="text-brand-600 font-medium text-sm sm:text-base bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">Multidisciplinar</span>
              </h1>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                Plataforma de actualización científica, formación y traslación de la evidencia
              </p>
            </div>
          </div>

          {/* User Profile / Status */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs text-slate-600 font-medium bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              Perfil: Farmacéutico Clínico / Especialista
            </span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-5 pt-1">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.id}
                onClick={metric.action}
                className={`flex items-center gap-3.5 p-4 rounded-xl border bg-white hover:shadow-md transition-all duration-200 ${
                  metric.action ? 'cursor-pointer hover:border-brand-300' : 'border-slate-100'
                }`}
              >
                <div className={`p-2.5 rounded-xl border ${metric.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-medium truncate">{metric.title}</p>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-lg sm:text-xl font-bold text-slate-900 leading-none">{metric.value}</span>
                    <span className="text-[10px] text-slate-400 font-normal truncate">{metric.desc}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}

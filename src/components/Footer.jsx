import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-slate-200 mb-2">PharmaUpdate Multidisciplinar</p>
        <p className="max-w-3xl mx-auto text-xs text-slate-400 leading-relaxed px-4 py-3 bg-slate-900/60 rounded-xl border border-slate-800/80 mb-6">
          <span className="font-bold text-slate-300">AVISO LEGAL:</span> Esta aplicación tiene finalidad formativa e informativa para profesionales sanitarios y gestión logística de proyectos. No sustituye el juicio clínico, las guías locales ni la valoración individual del paciente.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-2 border-t border-slate-900 pt-6">
          <p>© {new Date().getFullYear()} PharmaUpdate Multidisciplinar. Todos los derechos reservados.</p>
          <p>Preparado para la Comisión de Farmacia y Terapéutica Intrahospitalaria</p>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { 
  CheckSquare, Shield, HelpCircle, Send, MessageSquare, 
  ChevronRight, AlertTriangle, Lightbulb, Users, Clipboard 
} from 'lucide-react';

export default function ImplementacionLocal() {
  const [activeTab, setActiveTab] = useState('checklists'); // checklists, indicators, chatbot

  // Checklist State
  const [checklists, setChecklists] = useState({
    tdxd: [
      { id: 1, text: 'Confirmar visado e informe IHC de HER2-Ultralow en Anatomía Patológica.', checked: true },
      { id: 2, text: 'Realizar TAC de tórax basal y pruebas de difusión pulmonar (DLCO) previas.', checked: true },
      { id: 3, text: 'Diseñar plantilla de prescripción electrónica con alertas de dosis y ciclos.', checked: false },
      { id: 4, text: 'Entregar folleto informativo al paciente sobre síntomas de neumonitis (disnea, tos).', checked: false },
      { id: 5, text: 'Programar llamada de control telefónico de seguridad a los 10 días de cada ciclo.', checked: false }
    ],
    proa: [
      { id: 1, text: 'Coordinar con Microbiología la disponibilidad del kit de PCR rápida en menos de 24h.', checked: true },
      { id: 2, text: 'Aprobar por la Comisión de Farmacia el circuito de validación de Cefiderocol/Ceftolozano.', checked: true },
      { id: 3, text: 'Establecer orden de prescripción conjunta en Y para Ceftacidima/Avibactam + Aztreonam.', checked: false },
      { id: 4, text: 'Formar al personal de enfermería en la preparación de perfusión extendida (3-4 horas).', checked: false }
    ],
    conciliacion: [
      { id: 1, text: 'Integrar la escala de detección de fragilidad CRISTAL en el triaje de Urgencias.', checked: true },
      { id: 2, text: 'Configurar la bandeja de interconsulta en el programa del farmacéutico clínico.', checked: true },
      { id: 3, text: 'Diseñar el módulo del informe de alta donde figure la conciliación activa.', checked: false },
      { id: 4, text: 'Establecer circuito de envío de alertas a los médicos de atención primaria.', checked: false }
    ]
  });

  const handleToggleCheck = (category, id) => {
    setChecklists(prev => ({
      ...prev,
      [category]: prev[category].map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    }));
  };

  // Chatbot State
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '¡Hola! Soy el Asistente Logístico de Implantación de Proyectos. Mi función es ayudarte en la coordinación, diseño de checklists, circuitos logísticos e indicadores de seguridad para desplegar los protocolos en tu hospital.\n\n⚠️ *Nota: Mis respuestas se centran exclusivamente en la gestión logística, coordinación de equipos y metodologías de implantación. Para decisiones clínicas o dosificaciones de pacientes, consulta el detalle clínico del estudio o a la Comisión de Farmacia y Terapéutica.*'
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userText = userInput;
    setChatMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userText }]);
    setUserInput('');
    setIsTyping(true);

    // Simulate bot thinking and response logic
    setTimeout(() => {
      let botResponse = '';
      const textLower = userText.toLowerCase();

      // Check if clinical query
      const clinicalKeywords = ['dosis', 'dosificación', 'miligramos', ' mg ', 'tratamiento de', 'diagnóstico', 'tratar', 'curar', 'clínico', 'eficacia', 'efecto secundario', 'toxicidad', 'pico', 'grade'];
      const isClinical = clinicalKeywords.some(kw => textLower.includes(kw));

      if (isClinical && !textLower.includes('logística') && !textLower.includes('indicador') && !textLower.includes('checklist')) {
        botResponse = 'Como asistente de implantación y logística de proyectos, mi alcance está limitado a la coordinación organizativa, barreras de despliegue e indicadores de gestión. Para dudas de dosificación clínica, eficacia del fármaco o valoración individual del paciente, le sugiero remitirse a las pestañas de "Lectura Crítica" y "Cambio de Práctica" en la ficha del artículo, o consultar directamente los protocolos de la Comisión de Farmacia y Terapéutica (CFT) de su hospital.';
      } else if (textLower.includes('indicador') || textLower.includes('métrica')) {
        botResponse = 'Para medir la implantación de un protocolo, te recomiendo establecer tres tipos de indicadores:\n\n1. **Indicador de Proceso**: Porcentaje de pacientes elegibles que reciben el cribado previo (Ej. % de TAC basales en T-DXd). Objetivo: >95%.\n2. **Indicador de Calidad**: Tiempo medio transcurrido desde la sospecha clínica hasta la intervención (Ej. validación del antibiótico PROA en <24h).\n3. **Indicador de Resultado Logístico**: Reducción de mermas de viales en el laboratorio de mezclas tras la centralización (Objetivo: Ahorro del 10-15%).';
      } else if (textLower.includes('checklist') || textLower.includes('lista')) {
        botResponse = 'Los checklists de implantación son esenciales para asegurar la homogeneidad. Deben contemplar:\n- **Fase Previa**: Verificación de informes diagnósticos y habilitación en receta electrónica.\n- **Fase de Inicio**: Consentimiento informado y entrega de material educativo al paciente.\n- **Fase de Seguimiento**: Monitorización activa de toxicidades (llamada telefónica coordinada farmacia-enfermería) y registro de niveles PK/PD en pacientes críticos.';
      } else if (textLower.includes('barrera') || textLower.includes('dificultad') || textLower.includes('resistencia')) {
        botResponse = 'La principal barrera detectada en la implantación de protocolos intrahospitalarios es la fragmentación de la comunicación. Las estrategias recomendadas son:\n- **Reuniones Multidisciplinares**: Integrar a médicos, farmacéuticos y enfermeros en el diseño del flujo.\n- **Automatización**: Crear alertas emergentes en el software de prescripción médica que guíen al profesional sin resultar invasivas.\n- **Formación rápida (Microlearning)**: Sesiones clínicas exprés de 15 minutos en los pases de guardia del servicio.';
      } else if (textLower.includes('temperatura') || textLower.includes('cadena de frío') || textLower.includes('estabilidad')) {
        botResponse = 'Para la logística de fármacos termoestables o mezclas preparadas (como los monoclonales en jeringas):\n- Habilitar cajas de transporte isotérmicas validadas con acumuladores de frío.\n- Colocar un registrador de temperatura continuo (Data Logger) en cada envío interno.\n- Establecer un circuito de devolución rápida en caso de cancelación del tratamiento en el Hospital de Día para re-etiquetar y re-almacenar en la nevera de farmacia.';
      } else {
        botResponse = 'Entendido. Para el despliegue del proyecto, te sugiero comenzar definiendo las responsabilidades del equipo multidisciplinar (médicos prescriptores, farmacéuticos validadores y enfermería de administración). ¿Te gustaría que te sugiera una propuesta de cronograma logístico o indicadores de seguridad para controlar el cumplimiento?';
      }

      setChatMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const barriers = [
    {
      title: 'Incompatibilidad de sistemas de información',
      description: 'El software de farmacia (Oncofarm/Farmatools) y el historial de urgencias no comparten alertas automáticas.',
      mitigation: 'Desarrollar una escala de riesgo en el triage de Urgencias que envíe un correo automatizado o mensajería interna al busca de farmacia.'
    },
    {
      title: 'Sobrecarga de validación en Hospital de Día',
      description: 'El personal de farmacia oncológica dedica demasiado tiempo a reevaluar la dosificación de viales abiertos diariamente.',
      mitigation: 'Aplicar los datos de estabilidad a 28 días del bevacizumab/trastuzumab para centralizar preparaciones en lotes fijos dos veces por semana.'
    },
    {
      title: 'Resistencia a cambiar pautas antibióticas empíricas',
      description: 'Preferencia médica por continuar combinaciones de antibióticos clásicos en bacteriemia por Pseudomonas.',
      mitigation: 'Sesiones de formación rápidas conjuntas y validación preceptiva por el equipo PROA en las primeras 24-48 horas.'
    }
  ];

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
      
      {/* Header */}
      <div>
        <h2 className="text-base font-bold text-slate-900">Implementación Local y Logística de Proyectos</h2>
        <p className="text-xs text-slate-500 mt-0.5">Herramientas de gestión y coordinación operativa para facilitar la traslación de la evidencia científica a los protocolos de tu hospital.</p>
      </div>

      {/* Subnavigation Tabs */}
      <div className="flex border-b border-slate-200 bg-slate-50 p-1 rounded-xl">
        <button
          onClick={() => setActiveTab('checklists')}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'checklists' 
              ? 'bg-white text-brand-700 shadow-sm border border-slate-200' 
              : 'text-slate-500 hover:text-slate-700 border border-transparent'
          }`}
        >
          <Clipboard className="h-4 w-4" />
          <span>Checklists de Implantación</span>
        </button>

        <button
          onClick={() => setActiveTab('indicators')}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'indicators' 
              ? 'bg-white text-brand-700 shadow-sm border border-slate-200' 
              : 'text-slate-500 hover:text-slate-700 border border-transparent'
          }`}
        >
          <Shield className="h-4 w-4" />
          <span>Indicadores y Barreras</span>
        </button>

        <button
          onClick={() => setActiveTab('chatbot')}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'chatbot' 
              ? 'bg-white text-brand-700 shadow-sm border border-slate-200' 
              : 'text-slate-500 hover:text-slate-700 border border-transparent'
          }`}
        >
          <MessageSquare className="h-4 w-4" />
          <span>Asistente Logístico AI</span>
        </button>
      </div>

      {/* Content Panels */}
      <div className="min-h-[350px]">
        
        {/* TAB 1: Checklists */}
        {activeTab === 'checklists' && (
          <div className="space-y-6">
            
            {/* T-DXd Checklist */}
            <div className="p-4 rounded-xl border border-slate-100/80 bg-slate-50/50">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-600"></span>
                Circuito de Seguridad T-DXd (DESTINY-Breast06)
              </h3>
              <div className="space-y-2">
                {checklists.tdxd.map(item => (
                  <div 
                    key={item.id} 
                    onClick={() => handleToggleCheck('tdxd', item.id)}
                    className="flex items-start gap-2.5 p-2 rounded-lg bg-white border border-slate-100 hover:border-brand-200 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => {}} // handled in container
                      className="rounded text-brand-600 focus:ring-brand-500 h-4 w-4 cursor-pointer mt-0.5"
                    />
                    <span className={`text-xs ${item.checked ? 'text-slate-400 line-through' : 'text-slate-700 font-medium'}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PROA Pseudomonas */}
            <div className="p-4 rounded-xl border border-slate-100/80 bg-slate-50/50">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-600"></span>
                Optimización de Antibióticos PROA (Pseudomonas DTR)
              </h3>
              <div className="space-y-2">
                {checklists.proa.map(item => (
                  <div 
                    key={item.id} 
                    onClick={() => handleToggleCheck('proa', item.id)}
                    className="flex items-start gap-2.5 p-2 rounded-lg bg-white border border-slate-100 hover:border-brand-200 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => {}}
                      className="rounded text-brand-600 focus:ring-brand-500 h-4 w-4 cursor-pointer mt-0.5"
                    />
                    <span className={`text-xs ${item.checked ? 'text-slate-400 line-through' : 'text-slate-700 font-medium'}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conciliacion Urgencias */}
            <div className="p-4 rounded-xl border border-slate-100/80 bg-slate-50/50">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-600"></span>
                Conciliación Asistencial al Alta (CONCILIA-URG)
              </h3>
              <div className="space-y-2">
                {checklists.conciliacion.map(item => (
                  <div 
                    key={item.id} 
                    onClick={() => handleToggleCheck('conciliacion', item.id)}
                    className="flex items-start gap-2.5 p-2 rounded-lg bg-white border border-slate-100 hover:border-brand-200 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => {}}
                      className="rounded text-brand-600 focus:ring-brand-500 h-4 w-4 cursor-pointer mt-0.5"
                    />
                    <span className={`text-xs ${item.checked ? 'text-slate-400 line-through' : 'text-slate-700 font-medium'}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: Indicators and Barriers */}
        {activeTab === 'indicators' && (
          <div className="space-y-6">
            
            {/* Safety Indicators */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-brand-600" />
                Indicadores Clave de Seguridad y Cumplimiento
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                  <span className="text-[9px] uppercase font-bold text-slate-400">Tasa de Neumonitis Grave</span>
                  <p className="text-xl font-bold text-slate-900 mt-1">&lt; 3%</p>
                  <p className="text-[10px] text-slate-500 mt-1">Objetivo institucional en pacientes tratados con T-DXd.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                  <span className="text-[9px] uppercase font-bold text-slate-400">Validación PROA en 24h</span>
                  <p className="text-xl font-bold text-slate-900 mt-1">&gt; 92%</p>
                  <p className="text-[10px] text-slate-500 mt-1">Porcentaje de recetas de antimicrobianos dirigidos supervisadas.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                  <span className="text-[9px] uppercase font-bold text-slate-400">Reingresos a 30 días (Fragiles)</span>
                  <p className="text-xl font-bold text-slate-900 mt-1">- 22%</p>
                  <p className="text-[10px] text-slate-500 mt-1">Reducción tras la implantación de la conciliación en Urgencias.</p>
                </div>
              </div>
            </div>

            {/* Implementation Barriers */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                Barreras Frecuentes y Estrategias de Mitigación
              </h3>
              <div className="space-y-3">
                {barriers.map((bar, index) => (
                  <div key={index} className="p-4 rounded-xl border border-slate-100 bg-slate-50/30 grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                        {bar.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{bar.description}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-100 flex items-start gap-2">
                      <Lightbulb className="h-4 w-4 text-brand-600 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-[10px] uppercase font-bold text-brand-700">Mitigación Logística</h5>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{bar.mitigation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: Logistics Chatbot */}
        {activeTab === 'chatbot' && (
          <div className="border border-slate-200 rounded-xl overflow-hidden flex flex-col h-[400px]">
            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50">
              {chatMessages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed border ${
                    msg.sender === 'user'
                      ? 'bg-brand-600 text-white border-brand-600 shadow-sm rounded-tr-none'
                      : 'bg-white text-slate-700 border-slate-150 rounded-tl-none'
                  }`}>
                    {/* Preserve line breaks and markers */}
                    <div className="whitespace-pre-wrap font-medium">
                      {msg.text.split('\n').map((line, idx) => {
                        if (line.startsWith('⚠️')) {
                          return <div key={idx} className="text-rose-600 bg-rose-50 p-2 rounded-lg border border-rose-100 font-semibold mb-2 mt-1">{line}</div>;
                        }
                        if (line.startsWith('- **') || line.startsWith('1. **')) {
                          return <div key={idx} className="pl-2.5 mt-1">{line}</div>;
                        }
                        return <div key={idx}>{line}</div>;
                      })}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-slate-400 border border-slate-150 p-3 rounded-2xl rounded-tl-none text-xs flex items-center gap-1.5 font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce delay-150"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce delay-300"></span>
                    <span>Asistente está escribiendo...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="border-t border-slate-200 p-3 bg-white flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Pregúntame sobre checklists, indicadores o barreras de gestión..."
                className="flex-1 py-2 px-3 text-xs bg-slate-50 border border-slate-250 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-700 font-semibold"
              />
              <button
                type="submit"
                disabled={!userInput.trim() || isTyping}
                className="p-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-colors disabled:bg-slate-200 disabled:text-slate-400 shadow-sm"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}

      </div>

    </div>
  );
}

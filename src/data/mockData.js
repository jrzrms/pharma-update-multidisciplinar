// Datos simulados para PharmaUpdate Multidisciplinar
export const mockArticles = [
  {
    id: "art-1",
    title: "Ensayo DESTINY-Breast06: Trastuzumab Deruxtecan en Cáncer de Mama Metastásico con Expresión Baja de HER2 (HER2-Low) y Ultra-Baja (HER2-Ultralow) tras Terapia Endocrina",
    source: "New England Journal of Medicine (NEJM)",
    date: "2026-05-10",
    specialty: "Oncología/Hematología",
    transversal: "Seguridad del paciente",
    pubType: "Ensayo clínico",
    relevance: 96,
    impact: 95,
    summary: "Estudio clínico de fase III que demuestra una supervivencia libre de progresión (SLP) significativamente superior con Trastuzumab Deruxtecan (T-DXd) frente a quimioterapia estándar en pacientes con cáncer de mama metastásico HR+ con expresión HER2-Low e incluso HER2-Ultralow, tras progresión a terapia endocrina. Redefine el algoritmo clásico al eliminar la barrera del HER2 negativo absoluto.",
    practiceChange: {
      whatsNew: "Amplía el beneficio de T-DXd a pacientes con expresión ultra-baja de HER2 (inmunohistoquímica >0 pero <1+), abriendo una nueva ventana terapéutica antes de la quimioterapia convencional.",
      patientProfile: "Pacientes con cáncer de mama metastásico con receptores hormonales positivos (HR+) y niveles muy bajos o vestigiales de HER2 (HER2-Low y HER2-Ultralow) que han progresado a al menos una línea de terapia endocrina combinada.",
      drugsAffected: "Trastuzumab Deruxtecan (Enhertu®), agentes de quimioterapia estándar (capecitabina, paclitaxel, nab-paclitaxel).",
      precautions: "Riesgo crítico de Enfermedad Pulmonar Intersticial (EPI) / neumonitis (tasa del 11.3% en el estudio). Exige interrupción inmediata del tratamiento ante disnea, tos o infiltrados radiológicos nuevos y administración de corticoides."
    },
    guidelineComparison: {
      classification: "amplía",
      details: "Amplía y adelanta las recomendaciones vigentes de las guías de la European Society for Medical Oncology (ESMO) y de la Sociedad Española de Oncología Médica (SEOM) de 2025, sugiriendo el uso de T-DXd en estadios más tempranos y en poblaciones anteriormente catalogadas de forma rígida como HER2-negativas."
    },
    criticalReading: {
      pico: "P: Pacientes con cáncer de mama metastásico HR+ con expresión HER2-Low (IHQ 1+ o 2+/FISH-) o HER2-Ultralow (IHQ >0 pero <1+).\nI: Trastuzumab Deruxtecan (5.4 mg/kg cada 3 semanas).\nC: Quimioterapia a elección del investigador (capecitabina, paclitaxel o nab-paclitaxel).\nO: Supervivencia libre de progresión (SLP) por BICR en la cohorte HER2-Low y global.",
      internalValidity: "Alta. Diseño aleatorizado 1:1, multicéntrico. Aunque es un estudio abierto (sin enmascaramiento, debido a los perfiles de toxicidad marcadamente diferentes), la progresión tumoral y los eventos de eficacia fueron evaluados por un comité ciego e independiente (BICR), reduciendo el sesgo de detección.",
      externalValidity: "Excelente. Los criterios de inclusión reflejan de manera precisa el perfil de las pacientes atendidas en los hospitales españoles en la práctica oncológica habitual.",
      biases: "Moderado riesgo de sesgo de desgaste debido a abandonos por efectos adversos (14.3% en brazo T-DXd). Sesgo de información mitigado mediante evaluación centralizada y enmascarada del endpoint primario.",
      sampleSize: "866 pacientes aleatorizadas (713 en cohorte HER2-Low, 153 en cohorte HER2-Ultralow). Power estadístico >90%.",
      evidenceQuality: "Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Revisión prioritaria de los protocolos farmacoterapéuticos locales para el cáncer de mama avanzado en la Comisión de Farmacia y Terapéutica (CFT). Elevado impacto presupuestario asociado al coste unitario del fármaco frente al estándar de quimioterapia clásica.",
      reconciliation: "Validación por farmacéutico de oncología de la determinación IHC de HER2 en el informe anatomopatológico. Programación de un circuito de cribado de función pulmonar basal (DLCO y TAC basal)."
    },
    clinicalSession: {
      keyMessages: [
        "T-DXd duplica la mediana de SLP en la población HER2-Low en comparación con la quimioterapia tradicional (13.2 meses frente a 8.1 meses; HR 0.62).",
        "Se confirma beneficio equivalente en el nuevo grupo clínico 'HER2-Ultralow' (SLP mediana de 13.2 meses con T-DXd vs 8.3 meses con quimioterapia).",
        "La seguridad es el factor limitante clave: un 11.3% de las pacientes desarrolló neumonitis (la mayoría grado 1-2, pero causó 3 fallecimientos)."
      ],
      summarySlide: "DESTINY-Breast06: T-DXd en cáncer de mama metastásico HR+/HER2-Low y Ultralow.\n- SLP Mediana: 13.2 meses T-DXd vs 8.1 meses Quimioterapia (HR 0.62; p<0.0001).\n- Eficacia consistente en HER2-Ultralow (HR 0.78).\n- Toxicidad limitante: Neumonitis / EPI en 11.3% (requiere monitorización clínica activa).\n- Posicionamiento: Alternativa preferente pre-quimioterapia convencional.",
      debateQuestion: "¿Cómo coordinaremos el laboratorio de Anatomía Patológica y el Servicio de Farmacia para garantizar la identificación exacta del paciente HER2-Ultralow y agilizar el visado de dispensación?",
      clinicalCase: "Mujer de 54 años diagnosticada de cáncer de mama metastásico ductal infiltrante HR+. Recibió tratamiento previo con Ribociclib + Letrozol (progresión a los 18 meses) y posteriormente Fulvestrant (progresión a los 6 meses). La biopsia de la lesión metastásica hepática muestra un resultado de HER2 IHQ 0 con tinción débil de membrana en aproximadamente el 5% de las células (clasificado como HER2-Ultralow). Se evalúa la idoneidad de T-DXd en la sesión multidisciplinar.",
      localApplicability: "Establecimiento de una plantilla de prescripción específica en el software del Hospital de Día y protocolo de seguimiento telefónico de seguridad para el paciente coordinado por enfermería y farmacia."
    }
  },
  {
    id: "art-2",
    title: "Directrices de la SEIMC-SEFH 2026 para la Optimización del Manejo de Bacteriemias por Pseudomonas aeruginosa Multirresistente en el Ámbito Hospitalario",
    source: "Enfermedades Infecciosas y Microbiología Clínica (EIMC)",
    date: "2026-05-18",
    specialty: "Infecciones",
    transversal: "Sepsis y PROA (Optimización de Antimicrobianos)",
    pubType: "Guía clínica",
    relevance: 92,
    impact: 90,
    summary: "Guía de consenso nacional elaborada conjuntamente por la SEIMC y la SEFH que establece recomendaciones actualizadas y basadas en la evidencia para el tratamiento de bacteriemias graves causadas por P. aeruginosa con resistencia difícil de tratar (DTR). Prioriza el posicionamiento de los nuevos betalactámicos con inhibidores de betalactamasas (Ceftolozano/Tazobactam, Ceftacidima/Avibactam, Cefiderocol) basándose en el perfil fenotípico y genotípico de resistencia.",
    practiceChange: {
      whatsNew: "Sustituye el enfoque empírico clásico por un algoritmo dirigido guiado por diagnóstico molecular rápido (<24 horas), desaconsejando las combinaciones basadas en colistina/aminoglucósidos en favor de monoterapia con nuevos betalactámicos cuando sean activos.",
      patientProfile: "Pacientes hospitalizados con bacteriemia confirmada o neumonía nosocomial grave por Pseudomonas aeruginosa con perfil de resistencia difícil de tratar (DTR).",
      drugsAffected: "Ceftolozano/Tazobactam (Zerbaxa®), Ceftacidima/Avibactam (Zavicefta®), Cefiderocol (Fetcroja®), Colistina, Aztreonam.",
      precautions: "Ajuste posológico riguroso según la función renal y optimización farmacocinética (perfusión extendida o continua). Monitorización estrecha ante el riesgo de aparición de resistencias secundarias durante el tratamiento."
    },
    guidelineComparison: {
      classification: "confirma",
      details: "Consolida las directrices internacionales previas de la IDSA y la ESCMID de 2025, adaptándolas a la epidemiología local y aportando criterios específicos sobre el papel del farmacéutico hospitalario en el equipo PROA y en el control PK/PD."
    },
    criticalReading: {
      pico: "P: Pacientes adultos con bacteriemia por P. aeruginosa DTR.\nI: Nuevos antibióticos dirigidos (Ceftolozano/Tazobactam, Ceftacidima/Avibactam o Cefiderocol) ajustados por PK/PD.\nC: Terapia clásica basada en aminoglucósidos, colistina o combinaciones empíricas.\nO: Mortalidad a 30 días, estancia hospitalaria y fracaso microbiológico.",
      internalValidity: "Alta. Basada en una revisión sistemática de la literatura médica y un consenso formal Delphi en el que participó un panel multidisciplinar de 32 expertos nacionales.",
      externalValidity: "Excelente. Directamente aplicable al sistema sanitario español con recomendaciones específicas para el entorno de unidades de críticos y salas generales.",
      biases: "Bajo riesgo de sesgo. Las recomendaciones se basan en evidencia científica clasificada con el sistema GRADE y el consenso se sometió a revisión por pares externa.",
      sampleSize: "Revisión y metanálisis de 14 estudios observacionales clave y 4 ensayos clínicos aleatorizados.",
      evidenceQuality: "Moderada (principalmente debido a la falta de ensayos comparativos directos entre los nuevos antimicrobianos)"
    },
    pharmacotherapeuticImpact: {
      selection: "Actualización inmediata del protocolo PROA y de la guía farmacoterapéutica del hospital. Inclusión del test rápido molecular en la cartera de Microbiología.",
      reconciliation: "Implantación de un sistema de alerta electrónica interactivo que salte al prescribir estos antimicrobianos de alto impacto, obligando a reevaluar la prescripción en 48 horas bajo la tutela del equipo PROA."
    },
    clinicalSession: {
      keyMessages: [
        "Ceftolozano/Tazobactam se establece como la terapia de elección para P. aeruginosa DTR si no produce carbapenemasas de clase B (MBL).",
        "En cepas productoras de MBL (VIM, IMP, NDM), Cefiderocol o la combinación de Ceftacidima/Avibactam + Aztreonam son las únicas opciones seguras.",
        "Se recomienda la perfusión extendida (en 3-4 horas) y la monitorización de niveles plasmáticos (TDM) en pacientes críticos para garantizar el éxito y evitar la selección de mutantes resistentes."
      ],
      summarySlide: "Guía SEIMC-SEFH P. aeruginosa DTR 2026.\n- Algoritmo de elección:\n  * Sin MBL: Ceftolozano/Tazobactam 2g/1g cada 8h en perfusión extendida.\n  * Con MBL (VIM/IMP): Cefiderocol 2g cada 8h o Ceftacidima/Avibactam + Aztreonam.\n- Estrategia PK/PD: TDM obligatorio en UCI.\n- Desescalado microbiológico precoz guiado por PCR rápida.",
      debateQuestion: "¿Cómo podemos organizar el laboratorio y el Servicio de Farmacia para garantizar que la monitorización de niveles (TDM) esté disponible diariamente, incluyendo fines de semana?",
      clinicalCase: "Paciente de 62 años en UCI, ingresado por neumonía asociada a ventilación mecánica. El hemocultivo revela crecimiento de P. aeruginosa. La PCR rápida indica que la cepa es productora de carbapenemasa tipo VIM (MBL). El paciente presenta sepsis grave con inestabilidad hemodinámica y un aclaramiento de creatinina calculado en 45 mL/min.",
      localApplicability: "Creación de una orden de tratamiento conjunta para Ceftacidima/Avibactam más Aztreonam en el programa de prescripción, simplificando la dosificación simultánea en Y."
    }
  },
  {
    id: "art-3",
    title: "Impacto del Programa CONCILIA-URG: Ensayo Clínico Aleatorizado sobre Conciliación de la Medicación al Alta del Servicio de Urgencias en Pacientes Ancianos Polimedicados",
    source: "Emergencias (Revista de la Sociedad Española de Medicina de Urgencias y Emergencias)",
    date: "2026-04-30",
    specialty: "Urgencias",
    transversal: "Paciente anciano/frágil",
    pubType: "Ensayo clínico",
    relevance: 89,
    impact: 88,
    summary: "Ensayo clínico aleatorizado y controlado multicéntrico que evalúa el impacto clínico de la integración de un farmacéutico hospitalario en el área de observación de Urgencias. El objetivo principal fue realizar conciliación de la medicación y revisión de la adecuación terapéutica (mediante criterios STOPP/START) al alta del paciente de urgencias a su domicilio. Los resultados demuestran una marcada reducción en reingresos y visitas a urgencias asociadas a reacciones adversas.",
    practiceChange: {
      whatsNew: "Demuestra de forma prospectiva que la conciliación de la medicación realizada en la transición al alta de Urgencias disminuye de forma significativa los reingresos evitables y los eventos adversos por medicamentos (EAM) en el primer mes pos-alta.",
      patientProfile: "Pacientes mayores de 75 años, polimedicados (prescripción activa de 8 o más fármacos crónicos), que son dados de alta a domicilio directamente desde la sala de observación de Urgencias.",
      drugsAffected: "Benzodiacepinas de vida media larga, antiinflamatorios no esteroideos (AINEs), anticoagulantes orales directos y antivitamina K, diuréticos de asa, fármacos con carga anticolinérgica.",
      precautions: "Identificar y revertir la cascada terapéutica (prescribir un fármaco para tratar el efecto secundario de otro) y reducir la polimedicación innecesaria al alta."
    },
    guidelineComparison: {
      classification: "amplía",
      details: "Aporta un alto nivel de evidencia que respalda y amplía el documento de consenso de la SEFH y la SEMES sobre la seguridad del paciente crónico en urgencias, justificando la presencia física del farmacéutico en el servicio de urgencias."
    },
    criticalReading: {
      pico: "P: Pacientes mayores de 75 años con polimedicación extrema dados de alta a domicilio desde observación de Urgencias.\nI: Conciliación farmacéutica al alta y revisión sistemática con criterios STOPP/START.\nC: Cuidado clínico estándar sin revisión farmacéutica sistematizada.\nO: Reingreso hospitalario a los 30 días inducido por EAM, visitas de retorno a Urgencias y discrepancias no conciliadas.",
      internalValidity: "Alta. Diseño controlado y aleatorizado, aleatorización por bloques centralizada. Aunque no fue cegado para el clínico que realizaba la conciliación, el evaluador de los eventos a los 30 días estaba cegado a la asignación de grupo (evaluador independiente).",
      externalValidity: "Excelente. Realizado en condiciones de práctica real en 6 servicios de urgencias de hospitales terciarios y secundarios del sistema nacional de salud.",
      biases: "Sesgo de selección minimizado por la asignación aleatoria aleatoria. Sesgo de detección minimizado por la adjudicación ciega e independiente de los eventos de reingreso.",
      sampleSize: "520 pacientes incluidos (260 por brazo) con un seguimiento del 98% a los 30 días.",
      evidenceQuality: "Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Establece un argumento de peso para justificar la contratación o redistribución de farmacéuticos de hospital con dedicación exclusiva al Servicio de Urgencias.",
      reconciliation: "Creación de un circuito de derivación en el informe de alta médica. Los cambios realizados por el farmacéutico de urgencias se integran directamente en el sistema de receta electrónica comunitaria y notifican al médico de atención primaria mediante el historial clínico compartido."
    },
    clinicalSession: {
      keyMessages: [
        "El 42% de los pacientes ancianos presenta al menos una discrepancia no intencionada en su medicación al recibir el alta de la sala de observación.",
        "La conciliación farmacéutica reduce en un 34% la tasa de reingresos a los 30 días por efectos adversos a medicamentos (EAM) (reducción absoluta del 6.2%).",
        "Los fármacos implicados con mayor frecuencia en errores graves de conciliación son los diuréticos, los anticoagulantes orales y los antiagregantes plaquetarios."
      ],
      summarySlide: "Programa CONCILIA-URG: Farmacéutico en Urgencias.\n- Población: >75 años, ≥8 fármacos, alta desde observación de Urgencias.\n- Intervención: Conciliación + adecuación STOPP/START vs Cuidado estándar.\n- Resultados a 30 días:\n  * Reingresos relacionados con EAM: Reducción del 34% (p=0.015).\n  * Discrepancias resueltas: 84% de aceptación de propuestas médicas.\n- Conclusión: Intervención coste-efectiva de alto impacto en seguridad.",
      debateQuestion: "¿Cómo podemos automatizar en nuestro hospital la detección del paciente anciano frágil de alto riesgo al ingresar en urgencias para centrar nuestros recursos?",
      clinicalCase: "Paciente varón de 79 años con antecedente de insuficiencia cardíaca, fibrilación auricular e insuficiencia renal crónica. Acude a urgencias por una descompensación leve de su insuficiencia cardíaca. Se le administra diurético IV en observación, mejorando clínicamente. Al alta, se prescribe Espironolactona 25mg al día, pero no se suspende el suplemento de potasio que ya tomaba previamente. Además, se le añade dexketoprofeno por un dolor de rodilla secundario a una caída leve.",
      localApplicability: "Despliegue de la escala de riesgo CRISTAL integrada en el módulo informático de urgencias para disparar una interconsulta automática al farmacéutico."
    }
  },
  {
    id: "art-4",
    title: "Estabilidad Físico-Química y Optimización Microbiológica de Preparaciones Parenterales Diluidas de Anticuerpos Monoclonales Oncológicos en Jeringas Prefiltradas para su Uso Centralizado",
    source: "European Journal of Hospital Pharmacy",
    date: "2026-05-05",
    specialty: "Farmacotecnia",
    transversal: "Seguridad del paciente",
    pubType: "Revisión",
    relevance: 84,
    impact: 80,
    summary: "Estudio experimental de estabilidad física y química a largo plazo que evalúa la viabilidad del almacenamiento en refrigeración de preparaciones listas para su uso (RTU) de tres anticuerpos monoclonales de alta rotación (Rituximab, Bevacizumab y Trastuzumab biosimilares) tras su dilución y envasado en jeringas de polipropileno y bolsas de poliolefina. Aporta evidencia crucial sobre perfiles de impurezas y viabilidad microbiana en salas limpias ISO Clase 5.",
    practiceChange: {
      whatsNew: "Valida la estabilidad física y química de estas preparaciones diluidas hasta 28 días almacenadas a 2-8°C protegidas de la luz, lo que permite cambiar el modelo de preparación diaria bajo demanda a campañas de elaboración programada semanal en el Servicio de Farmacia.",
      patientProfile: "Pacientes con indicación de Rituximab, Bevacizumab o Trastuzumab atendidos en el Hospital de Día Oncológico o Hematológico.",
      drugsAffected: "Rituximab, Bevacizumab, Trastuzumab (incluyendo biosimilares autorizados).",
      precautions: "Garantizar la cadena de frío continua (2-8°C) con sensores de temperatura validados durante el transporte y almacenamiento. Evitar la agitación vigorosa para prevenir la agregación de proteínas."
    },
    guidelineComparison: {
      classification: "no modifica",
      details: "No contradice las guías clínicas de tratamiento de patologías específicas, pero complementa sustancialmente las directrices técnicas del Servicio de Farmacia y las guías de buenas prácticas de preparación de medicamentos (SEFH / Ministerio de Sanidad)."
    },
    criticalReading: {
      pico: "P: Mezclas parenterales diluidas de bevacizumab, rituximab y trastuzumab.\nI: Envasado en jeringas de polipropileno y almacenamiento refrigerado (2-8°C) hasta 28 días.\nC: Preparación extemporánea clásica de viales abiertos.\nO: Pureza cromatográfica (HPLC-SEC), turbidez, subpartículas no visibles, pH y esterilidad microbiológica.",
      internalValidity: "Alta. Estudio experimental de laboratorio con metodologías validadas y acordes a la ICH (cromatografía de exclusión por tamaño HPLC-SEC y electroforesis capilar). Mediciones repetidas en múltiples puntos temporales.",
      externalValidity: "Alta. La aplicabilidad depende de que el servicio de farmacia cuente con cabinas de flujo laminar vertical en sala blanca y un programa validado de control de esterilidad.",
      biases: "No aplica sesgo clínico por ser un estudio puramente técnico y analítico de laboratorio.",
      sampleSize: "Se analizaron 6 lotes independientes para cada fármaco y cada tipo de contenedor, con triplicados por análisis.",
      evidenceQuality: "Alta en el ámbito de la estabilidad físico-química farmacéutica"
    },
    pharmacotherapeuticImpact: {
      selection: "Facilita la toma de decisiones para la compra de biosimilares según sus datos específicos de estabilidad ampliada. Permite reducir las mermas de viales de un solo uso por fraccionamiento de dosis.",
      reconciliation: "Elaboración de un Procedimiento Normalizado de Trabajo (PNT) para la centralización y fraccionamiento de viales. Modificación del circuito de citostáticos para preparar lotes estandarizados."
    },
    clinicalSession: {
      keyMessages: [
        "Bevacizumab, Rituximab y Trastuzumab mantienen una concentración >95% y ausencia de agregación proteica significativa durante 28 días en jeringas refrigeradas.",
        "La centralización de la preparación e individualización de dosis en el Servicio de Farmacia reduce el despilfarro de fármacos sobrantes en un 12.4% de media.",
        "Es imprescindible un protocolo microbiológico de validación (media-fill) semestral para todo el personal técnico de preparación."
      ],
      summarySlide: "Estabilidad de Monoclonales en Jeringas Prefiltradas.\n- Fármacos: Rituximab, Bevacizumab, Trastuzumab (Biosimilares).\n- Envase: Jeringas de polipropileno y bolsas de poliolefina.\n- Estabilidad demostrada: 28 días a 2-8°C + 24 horas a temperatura ambiente.\n- Beneficio: Ahorro económico (reducción de mermas) y optimización de tiempos en Hospital de Día.",
      debateQuestion: "¿Cómo podemos rediseñar la logística de distribución de citostáticos del hospital para asegurar que no se produzcan roturas en la cadena de frío durante el traslado al Hospital de Día?",
      clinicalCase: "El Servicio de Farmacia elabora diariamente dosis de Bevacizumab para su uso en Oftalmología (inyecciones intravítreas) y Oncología. Se recibe una solicitud para preparar 15 dosis de 100 mg de Bevacizumab de forma programada para cubrir las necesidades de los próximos 10 días de Hospital de Día, evaluando la logística en base a este estudio de estabilidad.",
      localApplicability: "Adaptación del software de gestión del Servicio de Farmacia (ej. Farmatools/Oncofarm) para permitir la asignación de estabilidad de 28 días a estos preparados elaborados en lotes."
    }
  },
  {
    id: "art-5",
    title: "Alerta de Seguridad AEMPS: Restricción del Uso de Inhibidores de la Janus Quinasa (JAK) en Pacientes con Factores de Riesgo Cardiovascular, Tromboembólico o Neoplásico",
    source: "Agencia Española de Medicamentos y Productos Sanitarios (AEMPS)",
    date: "2026-05-22",
    specialty: "Reumatología",
    transversal: "Seguridad del paciente",
    pubType: "Alerta de seguridad",
    relevance: 95,
    impact: 92,
    summary: "Alerta oficial de seguridad de la AEMPS que restringe el uso de inhibidores de JAK (Tofacitinib, Baricitinib, Upadacitinib, Filgotinib, Abrocitinib) en pacientes de 65 años o más, fumadores o ex-fumadores de larga duración, o que presenten otros factores de riesgo cardiovascular o neoplásico, a menos que no existan alternativas terapéuticas adecuadas. Basada en la revisión europea de datos clínicos acumulados.",
    practiceChange: {
      whatsNew: "Obliga a revisar el tratamiento activo de todos los pacientes en reumatología, dermatología y gastroenterología que estén recibiendo un inhibidor de JAK y presenten factores de riesgo, priorizando el cambio a biológicos clásicos (anti-TNF o anti-IL).",
      patientProfile: "Pacientes con artritis reumatoide, artritis psoriásica, dermatitis atópica o colitis ulcerosa mayores de 65 años o con factores de riesgo tromboembólico o cardiovascular.",
      drugsAffected: "Tofacitinib (Xeljanz®), Baricitinib (Olumiant®), Upadacitinib (Rinvoq®), Filgotinib (Jyseleca®), Abrocitinib (Cibinqo®).",
      precautions: "Suspender de inmediato ante cualquier sospecha de evento tromboembólico venoso (ETV) o infarto de miocardio. Evaluación rigurosa de antecedentes neoplásicos."
    },
    guidelineComparison: {
      classification: "cuestiona",
      details: "Cuestiona y modifica directamente el posicionamiento de los inhibidores de JAK en las guías nacionales e internacionales de reumatología (ACR y EULAR), que los situaban en igualdad de condiciones con los fármacos biológicos tradicionales en la segunda línea de tratamiento."
    },
    criticalReading: {
      pico: "P: Pacientes tratados con inhibidores de JAK para patologías autoinmunes.\nI: Uso crónico de inhibidores de JAK.\nC: Pacientes tratados con biológicos clásicos (ej. anti-TNF).\nO: Eventos cardiovasculares mayores (MACE), tromboembolismo venoso, infecciones graves y segundas neoplasias primarias.",
      internalValidity: "Alta. Basada en el ensayo clínico de seguridad post-autorización ORAL Surveillance y estudios observacionales a gran escala a nivel europeo.",
      externalValidity: "Muy alta. Alerta regulatoria de obligado cumplimiento para todos los prescriptores en el territorio nacional.",
      biases: "Sesgo de confusión por indicación en estudios observacionales corregido mediante análisis multivariante y propensión de emparejamiento. Ensayo ORAL Surveillance prospectivo y aleatorizado sin sesgo relevante.",
      sampleSize: "Ensayo clínico ORAL Surveillance con 4.362 pacientes seguidos durante una media de 4 años.",
      evidenceQuality: "Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Bloqueo de la prescripción de primera intención en pacientes con factores de riesgo en el sistema informático de farmacia. Revisión de protocolos de selección de biológicos.",
      reconciliation: "Campaña proactiva de revisión de pacientes externos. Identificación mediante base de datos de dispensación de farmacia (pacientes activos con JAKi + >65 años) para su derivación a Reumatología para reevaluación."
    },
    clinicalSession: {
      keyMessages: [
        "Los inhibidores de JAK deben reservarse en pacientes de riesgo (mayores de 65 años, fumadores, riesgo CV o neoplásico) solo si no hay alternativa terapéutica.",
        "Se observa un incremento del riesgo relativo de infarto de miocardio, ictus y cáncer (particularmente cáncer de pulmón y linfoma) en comparación con anti-TNF.",
        "El farmacéutico de hospital desempeñará un papel central en la identificación de pacientes candidatos a switch terapéutico desde el área de Pacientes Externos."
      ],
      summarySlide: "Alerta AEMPS: Inhibidores de JAK.\n- Restricción de uso: Evitar en >65 años, fumadores activos/pasados, riesgo CV elevado o riesgo neoplásico.\n- Fármacos: Tofacitinib, Baricitinib, Upadacitinib, Filgotinib, Abrocitinib.\n- Evidencia: Aumento de MACE, ETV y neoplasias vs anti-TNF.\n- Acción: Revisar tratamientos activos y denegar nuevas autorizaciones en pacientes con factores de riesgo.",
      debateQuestion: "¿Cómo podemos agilizar la comunicación con el Servicio de Reumatología para realizar el cambio terapéutico ordenado de los más de 80 pacientes en riesgo detectados en nuestra base de datos de dispensación?",
      clinicalCase: "Paciente de 67 años diagnosticada de artritis reumatoide grave de 10 años de evolución. En tratamiento con Baricitinib 4mg/día desde hace 14 meses con excelente respuesta clínica (remisión DAS28). Es fumadora de 15 cigarrillos al día y tiene hipertensión arterial controlada. El reumatólogo plantea en la consulta de seguimiento si mantener el fármaco ante su efectividad o cambiar de terapia.",
      localApplicability: "Desarrollo de una consulta de conciliación telefónica farmacéutica-reumatológica dedicada para programar el cambio de fármaco y facilitar la entrega de las nuevas terapias biológicas subcutáneas."
    }
  },
  {
    id: "art-6",
    title: "Guía 2026 de la ESC sobre Síndrome Coronario Agudo: Manejo de la Doble Antiagregación Plaquetaria (DAPT) en Pacientes con Alto Riesgo Hemorrágico",
    source: "European Heart Journal (EHJ)",
    date: "2026-05-15",
    specialty: "Cardiología",
    transversal: "Seguridad del paciente",
    pubType: "Guía clínica",
    relevance: 90,
    impact: 91,
    summary: "La Sociedad Europea de Cardiología (ESC) actualiza sus guías de práctica clínica sobre el Síndrome Coronario Agudo, introduciendo una recomendación de clase I para acortar la duración de la doble antiagregación plaquetaria (DAPT) a solo 1-3 meses en pacientes con alto riesgo hemorrágico (HBR) sometidos a angioplastia coronaria, seguido de monoterapia con un inhibidor P2Y12 (preferentemente Clopidogrel o Ticagrelor).",
    practiceChange: {
      whatsNew: "Reduce la duración de la DAPT obligatoria en pacientes HBR desde los 6-12 meses clásicos a tan solo 1-3 meses, disminuyendo significativamente las hemorragias graves sin aumentar la tasa de eventos isquémicos o trombosis del stent.",
      patientProfile: "Pacientes con síndrome coronario agudo sometidos a intervencionismo coronario percutáneo (ICP) que cumplen criterios de alto riesgo hemorrágico (ej. edad avanzada, insuficiencia renal grave, anticoagulación oral concomitante).",
      drugsAffected: "Clopidogrel (Plavix®), Ticagrelor (Brilique®), Prasugrel (Efient®), Ácido Acetilsalicílico (Aspirina).",
      precautions: "Vigilar estrechamente la adherencia a la monoterapia posterior con el inhibidor P2Y12. Evaluar el riesgo isquémico residual del paciente antes de realizar el acortamiento terapéutico."
    },
    guidelineComparison: {
      classification: "amplía",
      details: "Amplía las guías del 2023 de la propia ESC, aportando mayor flexibilidad terapéutica en el uso de Ticagrelor en monoterapia y consolidando el uso de escalas de riesgo hemorrágico validadas (como el score ARC-HBR)."
    },
    criticalReading: {
      pico: "P: Pacientes con Síndrome Coronario Agudo sometidos a ICP y clasificados con alto riesgo hemorrágico (HBR).\nI: DAPT corta (1-3 meses) seguida de monoterapia con inhibidor P2Y12.\nC: DAPT convencional (12 meses) seguida de AAS en monoterapia.\nO: Hemorragias mayores (BARC clase 3 o 5) y eventos cardiovasculares adversos mayores (MACE) a los 12 meses.",
      internalValidity: "Alta. Basada en una revisión sistemática formal y metanálisis de ensayos clínicos aleatorizados controlados de gran envergadura (como MASTER-DAPT y STOPDAPT-2).",
      externalValidity: "Excelente. Guía de referencia europea adaptada por la Sociedad Española de Cardiología (SEC) y aplicable directamente en las unidades de cuidados intensivos cardiológicos.",
      biases: "Mínimo riesgo de sesgo en los ensayos clínicos en los que se sustenta, los cuales utilizaron endpoints duros estandarizados y adjudicación ciega de eventos.",
      sampleSize: "Metanálisis acumulativo de más de 15.000 pacientes con alto riesgo de sangrado.",
      evidenceQuality: "Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Modificación de la vía clínica de Síndrome Coronario Agudo del hospital. Retirada de alertas de suspensión tardía de DAPT para esta tipología de pacientes en el programa de prescripción.",
      reconciliation: "Conciliación activa al alta en la planta de Cardiología para clarificar la fecha exacta de fin de la doble terapia y evitar que el paciente continúe con dos antiagregantes por inercia terapéutica en atención primaria."
    },
    clinicalSession: {
      keyMessages: [
        "El acortamiento de DAPT a 1-3 meses en pacientes con alto riesgo de sangrado disminuye las hemorragias graves hasta en un 30%.",
        "Tras suspender la aspirina, la monoterapia preferible en este perfil de paciente es Clopidogrel o Ticagrelor.",
        "Es fundamental que conste la fecha exacta de suspensión del segundo antiagregante en el informe de alta farmacológica del paciente."
      ],
      summarySlide: "Guía ESC 2026: DAPT en SCA con Alto Riesgo Hemorrágico.\n- Estrategia: DAPT de 1 a 3 meses máximo en pacientes HBR (ARC-HBR ≥1 criterio mayor o ≥2 menores).\n- Monoterapia posterior: Inhibidor P2Y12 en monoterapia.\n- Resultados: Reducción del sangrado sin aumento de MACE o trombosis del stent.\n- Papel del farmacéutico: Conciliación activa al alta y registro de duración en receta.",
      debateQuestion: "¿Cómo podemos incorporar en la receta electrónica hospitalaria una alerta automatizada para suspender el segundo antiagregante en la fecha prescrita?",
      clinicalCase: "Paciente de 81 años con enfermedad renal crónica estadio 4 (Aclaramiento de creatinina 25 mL/min) y antecedentes de sangrado digestivo por angiodisplasias. Ingresa por un infarto agudo de miocardio sin elevación del ST y es sometido a angioplastia con colocación de un stent liberador de fármaco en la coronaria derecha. Se plantea pauta antiagregante al alta.",
      localApplicability: "Coordinación con el servicio de Cardiología para la implantación de una tarjeta de información al alta donde figure de forma muy visual la pauta corta de doble antiagregación."
    }
  },
  {
    id: "art-7",
    title: "Tratamiento Multidisciplinar del Lupus Eritematoso Sistémico con Anifrolumab: Evidencia de Vida Real en Hospitales de Tercer Nivel",
    source: "Revista Clínica Española",
    date: "2026-05-02",
    specialty: "Medicina Interna",
    transversal: "Polimedicación",
    pubType: "Revisión",
    relevance: 87,
    impact: 84,
    summary: "Estudio observacional retrospectivo multicéntrico que evalúa la efectividad y seguridad de Anifrolumab en pacientes con lupus eritematoso sistémico activo de moderado a grave. Demuestra una reducción significativa del índice SLEDAI-2K y del consumo acumulado de glucocorticoides a las 24 y 52 semanas.",
    practiceChange: {
      whatsNew: "Valida en práctica real el perfil de seguridad y el efecto de ahorro de corticoides del anti-receptor de interferón tipo I, Anifrolumab.",
      patientProfile: "Pacientes adultos con lupus eritematoso sistémico (LES) activo de moderado a grave, con autoanticuerpos positivos, a pesar del tratamiento estándar.",
      drugsAffected: "Anifrolumab (Saphnelo®), Prednisona, Hidroxicloroquina, Micofenolato.",
      precautions: "Incremento del riesgo de herpes zóster e infecciones respiratorias altas. Requiere cribado infeccioso completo previo al inicio."
    },
    guidelineComparison: {
      classification: "confirma",
      details: "Confirma las recomendaciones de las guías de la SER y de la EULAR 2024 respecto al posicionamiento de Anifrolumab como inmunomodulador ahorrador de corticoides en pacientes lúpicos."
    },
    criticalReading: {
      pico: "P: Pacientes con lupus eritematoso sistémico activo de moderado a grave.\nI: Anifrolumab 300 mg IV cada 4 semanas añadido a terapia estándar.\nC: Pacientes del registro con terapia estándar sola.\nO: Tasa de respuesta SRI-4 a la semana 52 y dosis diaria media de prednisona.",
      internalValidity: "Moderada. Al ser un estudio observacional retrospectivo, existe riesgo de confusión por indicación y sesgo de selección, mitigados en parte por emparejamiento por puntuación de propensión.",
      externalValidity: "Excelente. Refleja las características de la población tratada habitualmente en las unidades de enfermedades autoinmunes de medicina interna en España.",
      biases: "Sesgo de información derivado del registro retrospectivo de datos de historias clínicas.",
      sampleSize: "145 pacientes incluidos de 12 centros hospitalarios.",
      evidenceQuality: "Moderada (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Establece criterios de priorización de uso clínico en base al grado de actividad cutánea y articular refractaria, ayudando a racionalizar la prescripción en la CFT.",
      reconciliation: "Circuito de dispensación coordinada en el área de pacientes externos. Conciliar la dosis de corticoides concomitantes de forma mensual con el objetivo de lograr dosis <7.5mg/día."
    },
    clinicalSession: {
      keyMessages: [
        "Anifrolumab reduce de forma significativa los brotes lúpicos y ayuda a reducir la dosis media acumulada de prednisona.",
        "Se constata una alta adherencia y un perfil de seguridad favorable en vida real, comparable con los ensayos clínicos de fase III.",
        "La tasa de infecciones por herpes zóster fue del 6.8%, lo que sugiere considerar la vacunación profiláctica previa."
      ],
      summarySlide: "Anifrolumab en Lupus (Vida Real España).\n- Población: LES activo refractario, moderado-grave.\n- Resultados: Reducción del SLEDAI-2K en >4 puntos en el 62% de pacientes a 1 año.\n- Ahorro de Corticoides: Descenso de dosis de prednisona de 12.5mg a 5mg diarios.\n- Seguridad: Bien tolerado, tasa moderada de reactivación de Herpes Zóster.",
      debateQuestion: "¿Deberíamos instaurar un protocolo sistemático de vacunación contra el Herpes Zóster en todo paciente candidato a iniciar Anifrolumab en nuestro hospital?",
      clinicalCase: "Paciente mujer de 34 años con artritis lúpica y afectación cutánea grave resistente a hidroxicloroquina y metotrexato. Precisa pautas repetidas de prednisona a dosis de 20mg/día. Se propone iniciar Anifrolumab en régimen ambulatorio en el Hospital de Día.",
      localApplicability: "Creación de un protocolo simplificado de derivación entre Medicina Interna y el Servicio de Farmacia para control de dispensación y seguimiento de la tolerancia."
    }
  },
  {
    id: "art-8",
    title: "Triple Terapia Inhalada Fija en EPOC (Fluticasona/Umeclidinio/Vilanterol) vs Doble Terapia: Impacto en Exacerbaciones y Función Pulmonar",
    source: "Archivos de Bronconeumología",
    date: "2026-05-08",
    specialty: "Respiratorio",
    transversal: "Polimedicación",
    pubType: "Ensayo clínico",
    relevance: 89,
    impact: 87,
    summary: "Ensayo prospectivo multicéntrico que evalúa el beneficio de la triple terapia fija en una sola inhalación diaria (Trelegy®) frente a doble terapia LAMA/LABA en pacientes con EPOC grave e historial de exacerbaciones frecuentes. Reporta una tasa significativamente menor de ingresos hospitalarios.",
    practiceChange: {
      whatsNew: "Demuestra que la combinación en un solo dispositivo mejora la adherencia y reduce un 24% las exacerbaciones moderadas-graves frente al tratamiento dual.",
      patientProfile: "Pacientes adultos con EPOC estable grave con limitación al flujo aéreo que presentan al menos una exacerbación grave o dos moderadas en el último año.",
      drugsAffected: "Fluticasona/Umeclidinio/Vilanterol, Umeclidinio/Vilanterol, Indacaterol/Glicopirronio.",
      precautions: "Vigilar incidencia de neumonía, especialmente en pacientes ancianos con bajo índice de masa corporal y tabaquismo activo."
    },
    guidelineComparison: {
      classification: "amplía",
      details: "Amplía las guías GOLD de 2025 al aportar datos de efectividad comparativa directa y respaldar el paso precoz a triple terapia en pacientes con perfil exacerbador."
    },
    criticalReading: {
      pico: "P: Pacientes diagnosticados de EPOC grave con historial de exacerbaciones.\nI: Inhalación diaria única de Fluticasona Furoato/Umeclidinio/Vilanterol (92/55/22 mcg).\nC: Inhalación diaria de Umeclidinio/Vilanterol o Fluticasona/Vilanterol.\nO: Tasa anual de exacerbaciones moderadas o graves durante 52 semanas de seguimiento.",
      internalValidity: "Alta. Estudio clínico aleatorizado, doble ciego, controlado con comparador activo. Pérdidas en el seguimiento bajas (<8%) y uniformes.",
      externalValidity: "Excelente. Criterios de inclusión amplios y representativos de la población respiratoria habitual de nuestras consultas.",
      biases: "Bajo riesgo de sesgos. Diseño ciego idéntico para todos los brazos terapéuticos.",
      sampleSize: "1.250 pacientes reclutados en 25 hospitales nacionales.",
      evidenceQuality: "Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Posicionamiento de la triple terapia fija en sustitución de las combinaciones libres de múltiples inhaladores para racionalizar el gasto y mejorar el uso correcto.",
      reconciliation: "Revisión técnica de la técnica de inhalación antes de la dispensación inicial y retirada de dispositivos duplicados en la receta electrónica."
    },
    clinicalSession: {
      keyMessages: [
        "La triple terapia inhalada fija reduce la tasa de exacerbaciones anuales un 24% frente a la doble terapia dual.",
        "Se asocia a un menor número de ingresos hospitalarios relacionados con patología respiratoria aguda.",
        "Se incrementa levemente el riesgo de neumonía no fatal (5% vs 3% en brazo dual), requiriendo vigilancia regular."
      ],
      summarySlide: "EPOC: Triple Terapia Fija (FF/UMEC/VI).\n- Eficacia: Reducción significativa de exacerbaciones moderadas-graves (p<0.001).\n- Función Pulmonar: Mejora sostenida del FEV1 en 97 mL.\n- Adherencia: Incremento del 35% al unificar el dispositivo de inhalación.\n- Efecto Adverso: Neumonía (5%, requiere control clínico).",
      debateQuestion: "¿Cómo podemos coordinar con enfermería de Neumología un taller ágil de adiestramiento en el uso de este inhalador de dosis única?",
      clinicalCase: "Paciente varón de 73 años diagnosticado de EPOC con FEV1 del 42%. Ha ingresado dos veces este invierno por descompensación infecciosa pulmonar. Acude refiriendo fatiga con el uso de tres inhaladores diferentes.",
      localApplicability: "Diseño de un folleto pictográfico plastificado para colgar en las consultas de Neumología y Atención Primaria detallando el uso del inhalador."
    }
  },
  {
    id: "art-9",
    title: "Estrategias de Reducción de Errores de Medicación mediante la Incorporación de Códigos QR bidimensionales (DataMatrix) en Envasado Unidosis",
    source: "Farmacia Hospitalaria",
    date: "2026-05-20",
    specialty: "Seguridad",
    transversal: "Seguridad del paciente",
    pubType: "Documento de consenso",
    relevance: 93,
    impact: 92,
    summary: "Directrices de consenso nacional redactadas por el Grupo de Seguridad de la SEFH para estandarizar el re-envasado de medicamentos orales sólidos e inyectables en salas blancas de farmacia. Propone la codificación DataMatrix sistemática para habilitar el control mediante lectura de código de barras a pie de cama.",
    practiceChange: {
      whatsNew: "Establece un estándar nacional de codificación bidimensional para el Servicio de Farmacia, integrando el número de lote y la fecha de caducidad en el código leído por enfermería.",
      patientProfile: "Todos los pacientes hospitalizados con prescripción activa en unidades de agudos y cuidados críticos.",
      drugsAffected: "Todos los medicamentos acondicionados en dosis unitarias en el Servicio de Farmacia.",
      precautions: "Asegurar el contraste de impresión y calibración regular de los lectores láser en planta para evitar lecturas fallidas que retrasen la administración."
    },
    guidelineComparison: {
      classification: "confirma",
      details: "Consolida las guías de seguridad del paciente del Ministerio de Sanidad y la OMS (Medicamentos sin Daños) aportando una solución tecnológica validada."
    },
    criticalReading: {
      pico: "P: Pacientes hospitalizados en plantas de medicina interna y cirugía.\nI: Implementación de envasado unidosis con DataMatrix y registro a pie de cama por enfermería.\nC: Sistema de envasado clásico con código de barras lineal convencional.\nO: Tasa de errores de administración de medicamentos por 1.000 pacientes-día.",
      internalValidity: "Alta. Consenso formal estructurado por método Delphi, respaldado por datos epidemiológicos previos de 5 hospitales de referencia en seguridad del paciente.",
      externalValidity: "Excelente. Aplicable a la práctica diaria de cualquier hospital español con sistema de distribución en dosis unitarias.",
      biases: "Bajo riesgo de sesgos de recomendación gracias al panel ciego multiprofesional (médicos, farmacéuticos y enfermeros de seguridad).",
      sampleSize: "Consenso basado en el análisis de seguridad de >150.000 administraciones registradas.",
      evidenceQuality: "Alta en el ámbito de gestión de calidad y seguridad"
    },
    pharmacotherapeuticImpact: {
      selection: "Habilitar la compra preferente de envases listos para el circuito de código de barras. Inversión en envasadoras automáticas con impresión DataMatrix de alta definición.",
      reconciliation: "Garantizar la correspondencia exacta entre la base de datos de prescripción electrónica y el código DataMatrix generado en farmacia."
    },
    clinicalSession: {
      keyMessages: [
        "El código DataMatrix permite verificar los '5 correctos' en la administración de fármacos a pie de cama.",
        "Se reduce la tasa de errores de administración hasta en un 76%, disminuyendo eventos adversos graves.",
        "Es un paso esencial para la trazabilidad total del medicamento desde el almacén hasta el paciente."
      ],
      summarySlide: "Consenso SEFH sobre DataMatrix en Unidosis.\n- Objetivo: Reducir errores de administración hospitalaria.\n- Solución: Codificación bidimensional que incluye lote y caducidad.\n- Impacto: Reducción del 76% en errores de dosis, paciente o vía errónea.\n- Requisito: Habilitar software de lectura interactiva en terminales móviles de enfermería.",
      debateQuestion: "¿Cuáles son las principales barreras logísticas que nuestro equipo de enfermería anticipa para realizar la lectura del código antes de cada dosis en el hospital?",
      clinicalCase: "Error notificado en el que un paciente recibió doble dosis de un fármaco inmunosupresor debido a una confusión en el cajetín de dosis unitarias. El análisis causa-raíz determina que el envasado lineal convencional no alertó sobre la duplicidad en el sistema informático.",
      localApplicability: "Planificar un piloto de implantación en la planta de Medicina Interna antes de desplegar la lectura DataMatrix en todo el hospital."
    }
  },
  {
    id: "art-10",
    title: "Evaluación Económica de la Terapia CAR-T (Axicabtagén Ciloleucel) en Linfoma Difuso de Células B Grandes en España",
    source: "Farmacoeconomía y Eficacia Clínica",
    date: "2026-05-12",
    specialty: "Coste-Efectividad",
    transversal: "Seguridad del paciente",
    pubType: "Revisión",
    relevance: 91,
    impact: 90,
    summary: "Análisis coste-utilidad que estima la razón de coste-efectividad incremental (RCEI) de la terapia CAR-T frente a la quimioterapia clásica o el trasplante en España. Concluye que, aunque la terapia presenta una alta eficacia, el impacto presupuestario exige la adopción de esquemas de pago por resultados (Valtermed).",
    practiceChange: {
      whatsNew: "Aporta el marco analítico local para evaluar la coste-efectividad real del CAR-T en base a datos de supervivencia global en la red hospitalaria pública española.",
      patientProfile: "Pacientes con linfoma difuso de células B grandes (LDCBG) refractario o en recaída después de dos o más líneas de tratamiento sistémico.",
      drugsAffected: "Axicabtagén Ciloleucel (Yescarta®), Tisagenlecleucel (Kymriah®), esquemas de quimioterapia de rescate (salvamento).",
      precautions: "Coste de adquisición sumamente elevado. Requiere seguimiento estricto en el registro Valtermed del Ministerio de Sanidad para documentar efectividad."
    },
    guidelineComparison: {
      classification: "confirma",
      details: "Confirma los criterios de financiación condicionada establecidos por el Ministerio de Sanidad de España en el Plan Nacional de Terapias Avanzadas."
    },
    criticalReading: {
      pico: "P: Pacientes adultos con LDCBG refractario tras dos líneas sistémicas.\nI: Infusión única de Axicabtagén Ciloleucel.\nC: Quimioterapia estándar de rescate (ej. R-GEMOX, R-DHAP) e inmunoterapia.\nO: Años de vida ajustados por calidad (AVAC), supervivencia global y coste incremental.",
      internalValidity: "Alta. Modelo de Markov con microsimulación bien estructurado utilizando datos del ensayo clínico ZUMA-1 y datos observacionales del registro nacional.",
      externalValidity: "Muy alta. Los costes de hospitalización, UCI y manejo de eventos adversos (síndrome de liberación de citoquinas) corresponden a tarifas públicas españolas.",
      biases: "Incertidumbre asociada a la extrapolación de la supervivencia a largo plazo (más allá de los 5 años), corregida mediante análisis de sensibilidad probabilístico.",
      sampleSize: "Modelización basada en una cohorte teórica de 1.000 pacientes simulados y validada con datos de vida real de 280 pacientes registrados en España.",
      evidenceQuality: "Alta en modelización económica"
    },
    pharmacotherapeuticImpact: {
      selection: "Establece el procedimiento de derivación para hospitales no acreditados y el circuito de facturación específico por pago basado en resultados clínicos.",
      reconciliation: "Seguimiento y recogida activa de datos de efectividad (respuesta completa por PET-TAC a los 3 y 6 meses) para remitir la información de pago al Ministerio."
    },
    clinicalSession: {
      keyMessages: [
        "El RCEI de Axicabtagén Ciloleucel se sitúa en torno a los 42.000 € por AVAC ganado, por debajo del umbral informal de coste-efectividad de España.",
        "El coste-efectividad está fuertemente condicionado a que los pacientes alcancen una remisión completa sostenida en el primer año.",
        "El farmacéutico de hospital es clave en la gestión del pago por resultados, asegurando el reembolso ligado al éxito del tratamiento."
      ],
      summarySlide: "Coste-Efectividad del CAR-T en España.\n- Modelo: Análisis coste-utilidad con horizonte temporal a toda la vida.\n- Resultados: RCEI de 42.100 €/AVAC frente a terapia estándar.\n- Impacto presupuestario: Elevado (exige acuerdos de pago por resultados en Valtermed).\n- Variable Crítica: Supervivencia libre de progresión a los 12 meses.",
      debateQuestion: "¿Cómo podemos automatizar la recolección de los datos de efectividad clínica y toxicidad en nuestro hospital para agilizar el cobro y pago de las cuotas del CAR-T?",
      clinicalCase: "Se evalúa en la CFT la aprobación de derivación para un paciente con linfoma refractario apto para terapia CAR-T, analizando el impacto presupuestario de la estancia asociada en la UCI y la posterior terapia de mantenimiento.",
      localApplicability: "Desarrollo de un cuadro de mando financiero en el Servicio de Farmacia para monitorizar los costes directos e indirectos de los tratamientos CAR-T activos."
    }
  },
  {
    id: "art-11",
    title: "Dosificación Estandarizada e Incompatibilidades de Mezclas Parenterales en Neonatología: Guía de Consenso Multicéntrico",
    source: "Anales de Pediatría",
    date: "2026-04-18",
    specialty: "Pediatría",
    transversal: "Seguridad del paciente",
    pubType: "Guía clínica",
    relevance: 88,
    impact: 85,
    summary: "Guía clínica elaborada por la Sociedad Española de Neonatología y la SEFH que unifica las tablas de compatibilidad fisicoquímica de co-administraciones en Y para fármacos críticos endovenosos (como analgésicos, inótropos y antimicrobianos) en catéteres de vía única para recién nacidos de muy bajo peso.",
    practiceChange: {
      whatsNew: "Aporta tablas normalizadas de compatibilidad para evitar precipitaciones químicas al administrar múltiples fármacos por una sola luz venosa en prematuros.",
      patientProfile: "Recién nacidos prematuros y de bajo peso ingresados en Unidades de Cuidados Intensivos Neonatales (UCIN).",
      drugsAffected: "Fentanilo, Midazolam, Dopamina, Dobutamina, Ampicilina, Gentamicina, Nutrición Parenteral.",
      precautions: "Evitar la mezcla directa de ampicilina con aminoglucósidos en la misma jeringa por inactivación química mutua inmediata."
    },
    guidelineComparison: {
      classification: "amplía",
      details: "Amplía las guías de práctica farmacéutica pediátrica al aportar datos concretos de estabilidad física y pH de mezclas complejas típicas en las UCIN de España."
    },
    criticalReading: {
      pico: "P: Neonatos prematuros en la UCIN que requieren múltiples infusiones endovenosas simultáneas.\nI: Estandarización de diluciones y administración en Y basadas en tablas de compatibilidad física comprobadas.\nC: Práctica de preparación variable y co-administración sin datos estructurados de compatibilidad.\nO: Obstrucción de catéteres, precipitaciones visibles y eventos adversos cardiorrespiratorios.",
      internalValidity: "Alta. Documento basado en ensayos de laboratorio de estabilidad físico-química bajo normas de farmacopea y revisión de literatura internacional indexada.",
      externalValidity: "Excelente. Perfectamente aplicable en cualquier unidad de neonatología del sistema de salud nacional.",
      biases: "Bajo riesgo. Consenso científico basado en pruebas objetivas de laboratorio (turbidimetría y análisis cromatográfico de mezclas).",
      sampleSize: "Consenso y revisión técnica de 45 combinaciones comunes de fármacos e infusiones.",
      evidenceQuality: "Alta en su ámbito técnico-químico"
    },
    pharmacotherapeuticImpact: {
      selection: "Modificación de las plantillas de prescripción electrónica pediátrica para bloquear la selección de vías incompatibles.",
      reconciliation: "Elaboración de carteles informativos plastificados de alta visibilidad para colgar en las salas de preparación de la UCIN sobre compatibilidades en Y."
    },
    clinicalSession: {
      keyMessages: [
        "El uso de tablas estandarizadas de compatibilidad previene la obstrucción de catéteres neonatales por precipitación.",
        "La nutrición parenteral lipídica presenta un alto riesgo de inestabilidad física cuando se asocia a fármacos con pH extremos.",
        "La preparación centralizada de diluciones pediátricas en el Servicio de Farmacia reduce los errores de cálculo de dosis."
      ],
      summarySlide: "Consenso Neonatal de Mezclas Parenterales.\n- Problema: Acceso venoso limitado en recién nacidos de muy bajo peso.\n- Solución: Tablas de compatibilidad física validadas para co-administración en Y.\n- Reglas Críticas:\n  * Prohibido co-administrar Ceftriaxona con soluciones que contengan Calcio.\n  * Separar fisicamente inótropos de fármacos alcalinos.",
      debateQuestion: "¿Cómo podemos agilizar la integración de estas reglas de incompatibilidad física directamente en nuestro software de prescripción médica intrahospitalaria?",
      clinicalCase: "Neonato prematuro de 26 semanas de gestación con sepsis bacteriana. Precisa infusión de Dopamina, Fentanilo y una dosis IV de Gentamicina, disponiendo únicamente de una vía venosa periférica útil de luz única.",
      localApplicability: "Implantación de jeringas pre-cargadas estandarizadas preparadas de forma estéril en el Servicio de Farmacia para reducir la manipulación en la UCIN."
    }
  },
  {
    id: "art-12",
    title: "Efectividad del Ajuste de Betalactámicos por Modelización Bayesiana y Dosificación Continua en Pacientes Críticos con Shock Séptico",
    source: "Medicina Intensiva",
    date: "2026-05-15",
    specialty: "Paciente Crítico",
    transversal: "Sepsis y PROA (Optimización de Antimicrobianos)",
    pubType: "Ensayo clínico",
    relevance: 94,
    impact: 91,
    summary: "Ensayo clínico aleatorizado y controlado que evalúa la administración en perfusión continua de Piperacilina/Tazobactam y Meropenem guiada por niveles plasmáticos en las primeras 48 horas de shock séptico en UCI. Demuestra una mejora del 18% en la tasa de resolución del shock.",
    practiceChange: {
      whatsNew: "Aporta evidencia robusta sobre la superioridad de la dosificación continua guiada por algoritmos bayesianos interactivos frente a la pauta intermitente tradicional.",
      patientProfile: "Pacientes adultos ingresados en la UCI diagnosticados de shock séptico de foco pulmonar, urinario o abdominal en las primeras 12 horas de evolución.",
      drugsAffected: "Meropenem, Piperacilina/Tazobactam, Ceftacidima.",
      precautions: "Requiere la determinación analítica rápida de niveles plasmáticos valle y pico del antibiótico en el laboratorio para alimentar el software bayesiano."
    },
    guidelineComparison: {
      classification: "amplía",
      details: "Amplía las guías de la Surviving Sepsis Campaign al dar recomendaciones específicas de optimización PK/PD mediante el uso de herramientas de modelado de software en el paciente crítico."
    },
    criticalReading: {
      pico: "P: Pacientes adultos en la UCI con shock séptico que requieren betalactámicos IV.\nI: Perfusión continua ajustada por niveles séricos diarios y software bayesiano (PK/PD target: 100% fT > 4xMIC).\nC: Dosificación intermitente estándar (perfusión en 30 minutos) ajustada por función renal básica.\nO: Resolución del shock séptico a las 72 horas y mortalidad por todas las causas a los 28 días.",
      internalValidity: "Alta. Estudio aleatorizado 1:1, controlado, abierto (ciego para el microbiólogo que determinaba los niveles). Pérdidas mínimas y análisis por intención de tratar.",
      externalValidity: "Muy alta. Los pacientes críticos reflejan de forma realista la complejidad de las UCI españolas, con disfunción multiorgánica y aclaramiento renal aumentado.",
      biases: "Sesgo de detección evitado mediante la utilización de criterios objetivos estandarizados para la definición de shock y su resolución.",
      sampleSize: "320 pacientes incluidos (160 por brazo) con adecuado poder estadístico.",
      evidenceQuality: "Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Habilitación e implantación del software de modelización bayesiana (ej. InsightRX o similar) integrado en la historia clínica del paciente crítico.",
      reconciliation: "Circuito rápido de extracción y entrega de muestras de sangre al laboratorio a las 8:00 AM para disponer de resultados y propuestas de ajuste de dosis antes de las 12:00 PM."
    },
    clinicalSession: {
      keyMessages: [
        "El ajuste bayesiano continuo reduce el tiempo mediano hasta la resolución del shock séptico en 14 horas.",
        "Se evita la infra-dosificación terapéutica inicial causada por el aclaramiento renal aumentado típico de la fase hiperdinámica de la sepsis.",
        "El papel del farmacéutico clínico de UCI es vital para validar el modelo bayesiano con los niveles analíticos recibidos."
      ],
      summarySlide: "Optimización PK/PD en Shock Séptico (UCI).\n- Intervención: Perfusión continua de betalactámicos guiada por modelo Bayesiano.\n- Resultado Primario: Resolución del shock en 72h (78% en grupo intervención vs 60% en control; p=0.008).\n- Target PK/PD: Logrado en el 91% de pacientes del grupo intervención vs 44% en control.\n- Recomendación: Implementar TDM sistemático en las primeras 24-48 horas de ingreso.",
      debateQuestion: "¿Contamos con la capacidad analítica en nuestro laboratorio para realizar la determinación rápida de antibióticos en sangre en menos de 4 horas?",
      clinicalCase: "Paciente de 45 años en shock séptico por neumonía neumocócica. Se inicia Meropenem empírico. Presenta un gasto cardíaco elevado y aclaramiento de creatinina estimado por orina de 24 horas de 160 mL/min (aclaramiento aumentado). El nivel plasmático valle a las 24 horas resulta sub-terapéutico.",
      localApplicability: "Elaboración de una guía rápida de recogida y envío de muestras de antibióticos coordinada entre los Servicios de Medicina Intensiva, Farmacia y Bioquímica."
    }
  },
  {
    id: "art-13",
    title: "Monitorización Farmacoterapéutica (TDM) y Optimización de Dosis de Antipsicóticos de Segunda Generación en Pacientes con Esquizofrenia Refractaria",
    source: "Actas Españolas de Psiquiatría",
    date: "2026-05-05",
    specialty: "Psiquiatría",
    transversal: "Seguridad del paciente",
    pubType: "Revisión",
    relevance: 86,
    impact: 82,
    summary: "Estudio clínico de revisión sobre la utilidad de monitorizar niveles séricos de clozapina y risperidona para optimizar la adherencia, correlacionar la respuesta clínica con el rango terapéutico idóneo y prevenir toxicidades neurológicas y metabólicas graves en pacientes psiquiátricos institucionalizados o ambulatorios.",
    practiceChange: {
      whatsNew: "Aporta rangos terapéuticos séricos de referencia específicos y pautas de ajuste de dosis personalizadas en pacientes con sospecha de mal cumplimiento o respuesta insuficiente.",
      patientProfile: "Pacientes con esquizofrenia refractaria o trastornos psicóticos graves con respuesta clínica tórpida o sospecha de incumplimiento terapéutico.",
      drugsAffected: "Clozapina (Clopin®), Risperidona, Olanzapina, Aripiprazol.",
      precautions: "Vigilar estrictamente el recuento leucocitario en el caso de la clozapina por riesgo de agranulocitosis, y ajustar dosis si los niveles séricos superan los 700 ng/mL por riesgo de convulsiones."
    },
    guidelineComparison: {
      classification: "confirma",
      details: "Confirma las directrices del Consenso de la AGNP sobre monitorización de fármacos en psiquiatría, aportando recomendaciones de implementación práctica en el entorno hospitalario nacional."
    },
    criticalReading: {
      pico: "P: Pacientes diagnosticados de esquizofrenia refractaria.\nI: Ajuste de dosis guiado por monitorización farmacoterapéutica (TDM) de niveles séricos.\nC: Pauta de ajuste de dosis convencional basada en la sintomatología clínica únicamente.\nO: Puntuación en la escala PANSS a las 12 semanas, tasa de efectos adversos extraespiramidales y reingresos.",
      internalValidity: "Alta. Basada en una revisión sistemática exhaustiva de 22 estudios observacionales y 3 ensayos controlados de optimización farmacológica.",
      externalValidity: "Excelente. Aplicable a los pacientes atendidos en unidades de salud mental y hospitales de día de psiquiatría en España.",
      biases: "Sesgos de publicación atenuados por la inclusión de literatura no publicada mediante búsquedas en registros de ensayos clínicos. Confusión remanente moderada en estudios observacionales.",
      sampleSize: "Análisis acumulado de datos de más de 2.400 pacientes tratados con antipsicóticos.",
      evidenceQuality: "Moderada-Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Establecer la monitorización sérica de clozapina como obligatoria en caso de sospecha de ineficacia o toxicidad. Habilitar solicitudes rápidas desde el módulo de Psiquiatría.",
      reconciliation: "Conciliación farmacológica activa al ingreso en la Unidad de Agudos de Psiquiatría para verificar la concordancia entre los niveles en sangre detectados y la pauta prescrita por el médico de atención primaria."
    },
    clinicalSession: {
      keyMessages: [
        "La monitorización de niveles séricos de clozapina es la herramienta más fiable para discernir entre refractariedad real e incumplimiento terapéutico.",
        "Niveles de clozapina superiores a 350 ng/mL se asocian con una probabilidad de respuesta clínica significativamente mayor.",
        "El ajuste de dosis asistido por el farmacéutico clínico reduce los efectos adversos de tipo sedación, estreñimiento severo y ganancia de peso."
      ],
      summarySlide: "TDM de Antipsicóticos en Esquizofrenia Refractaria.\n- Fármaco diana: Clozapina (rango eficaz: 350-600 ng/mL).\n- Utilidad: Identificación de pacientes no cumplidores y prevención de toxicidad por encima de 700 ng/mL.\n- Impacto: Reducción del 15% en la estancia media en unidades de agudos al acelerar la estabilización terapéutica.\n- Papel del farmacéutico: Recomendación de dosis basándose en genotipos de citocromos (CYP1A2/CYP2D6) y niveles séricos.",
      debateQuestion: "¿Cómo podemos coordinar con el Servicio de Psiquiatría para establecer extracciones de sangre basales en estado de equilibrio estacionario (valle previo a la dosis matutina)?",
      clinicalCase: "Paciente varón de 28 años con esquizofrenia refractaria que no responde a la dosis habitual de clozapina de 300mg/día. Se debate si aumentar la dosis o cambiar de fármaco, procediéndose a solicitar un nivel en sangre que resulta en 120 ng/mL (sugiriendo metabolismo ultrarrápido o falta de adherencia).",
      localApplicability: "Despliegue de un circuito de recogida de muestras para el laboratorio de Toxicología y Farmacocinética de nuestro hospital, con informe integrado en el historial clínico."
    }
  },
  {
    id: "art-14",
    title: "Desprescripción de Medicación Anticolinérgica en Ancianos con Deterioro Cognitivo Leve: Ensayo Clínico Aleatorizado en Centros Geriátricos",
    source: "Revista Española de Geriatría y Gerontología",
    date: "2026-05-18",
    specialty: "Geriatría",
    transversal: "Paciente anciano/frágil",
    pubType: "Ensayo clínico",
    relevance: 90,
    impact: 89,
    summary: "Ensayo controlado y aleatorizado que evalúa la efectividad de un protocolo de desprescripción estructurado de psicofármacos y antihistamínicos con alta carga anticolinérgica en pacientes institucionalizados mayores de 80 años. Demuestra mejoras significativas en test cognitivos y reducción de la inestabilidad en la marcha.",
    practiceChange: {
      whatsNew: "Aporta evidencia de primer nivel sobre la reversibilidad del deterioro cognitivo leve y la disminución del riesgo de caídas al reducir la carga anticolinérgica total medida por la escala ARS (Anticholinergic Risk Scale).",
      patientProfile: "Pacientes de 80 años o más con diagnóstico de deterioro cognitivo leve que toman al menos dos fármacos con actividad anticolinérgica moderada-alta.",
      drugsAffected: "Amitriptilina, Lorazepam, Hidroxicina, Oxibutinina, Dexclorfeniramina.",
      precautions: "La retirada de estos fármacos debe realizarse de forma paulatina para evitar síndromes de abstinencia o rebote de la sintomatología original (ej. insomnio o incontinencia)."
    },
    guidelineComparison: {
      classification: "amplía",
      details: "Amplía las recomendaciones sobre desprescripción recogidas en los criterios de Beer y los criterios STOPP/START, aportando un protocolo de retirada progresiva validado."
    },
    criticalReading: {
      pico: "P: Pacientes institucionalizados de 80 o más años con deterioro cognitivo leve y carga anticolinérgica ARS ≥3.\nI: Protocolo estructurado de desprescripción guiado por farmacéutico y geriatra.\nC: Cuidado geriátrico convencional sin protocolo específico de desprescripción.\nO: Puntuación en el test MMSE a los 6 meses y número de caídas accidentales registradas.",
      internalValidity: "Alta. Ensayo clínico controlado, aleatorizado por centros. Aunque abierto por la naturaleza del estudio, el evaluador de los tests neuropsicológicos fue ciego al grupo de intervención.",
      externalValidity: "Excelente. Realizado en 12 residencias geriátricas públicas y concertadas con perfiles de fragilidad y pluripatología reales.",
      biases: "Sesgo de desgaste controlado (pérdidas <5% por fallecimiento o traslado, analizadas por intención de tratar).",
      sampleSize: "380 pacientes aleatorizados (190 por brazo).",
      evidenceQuality: "Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Establecer la escala ARS en el módulo de prescripción del hospital y de las residencias asociadas para alertar sobre cargas anticolinérgicas acumuladas elevadas.",
      reconciliation: "Intervención activa del farmacéutico al ingreso del paciente geriátrico para proponer alternativas terapéuticas seguras sin actividad anticolinérgica (ej. Mirabegrón en lugar de Oxibutinina)."
    },
    clinicalSession: {
      keyMessages: [
        "La reducción de la carga anticolinérgica total de un valor ARS ≥3 a <1 mejora la puntuación MMSE en una media de 1.8 puntos a los 6 meses.",
        "Se constata una reducción relativa del 40% en la tasa de caídas en el brazo de intervención.",
        "La desprescripción es viable y segura, requiriendo un enfoque multidisciplinar y el seguimiento de pautas de reducción progresiva."
      ],
      summarySlide: "Desprescripción Anticolinérgica en el Paciente Anciano.\n- Población: Pacientes de ≥80 años en residencias con carga anticolinérgica elevada.\n- Intervención: Retirada paulatina y sustitución de fármacos con puntuación ARS ≥2.\n- Resultados:\n  * Cognición: Incremento significativo del test MMSE (p=0.012).\n  * Seguridad: Reducción del 40% en caídas (p=0.005).\n- Conclusión: Retirar anticolinérgicos revierte parcialmente la disfunción cognitiva y previene accidentes graves.",
      debateQuestion: "¿Cómo podemos formar a los médicos de atención primaria y de residencias para que adopten la desprescripción como una práctica preventiva rutinaria y no solo reactiva?",
      clinicalCase: "Paciente de 84 años con demencia incipiente que presenta episodios de inestabilidad y sequedad de boca. Su tratamiento incluye Amitriptilina 25mg/noche por dolor neuropático, Oxibutinina 5mg/12h por incontinencia urinaria y Lorazepam 1mg/noche por insomnio.",
      localApplicability: "Despliegue de una sesión de actualización en Geriatría y Farmacia para presentar la escala de riesgo anticolinérgico y los algoritmos de desprescripción consensuados."
    }
  },
  {
    id: "art-15",
    title: "Ceftacidima/Avibactam frente a Polimixina B en Infecciones Graves por Klebsiella pneumoniae Productora de Carbapenemasas (KPC): Ensayo Clínico CRACKLE-II",
    source: "The Lancet Infectious Diseases",
    date: "2026-05-14",
    specialty: "Infecciones",
    transversal: "Sepsis y PROA (Optimización de Antimicrobianos)",
    pubType: "Ensayo clínico",
    relevance: 93,
    impact: 91,
    summary: "Estudio clínico prospectivo y observacional multicéntrico que compara la efectividad y nefrotoxicidad de Ceftacidima/Avibactam frente a polimixina B en pacientes con bacteriemia y neumonía nosocomial causadas por enterobacterias productoras de carbapenemasas KPC. Demuestra una reducción del 50% en la mortalidad hospitalaria ajustada y tasas muy inferiores de fracaso renal agudo.",
    practiceChange: {
      whatsNew: "Confirma clínicamente la obsolescencia de las pautas basadas en colistina/polimixina B como tratamiento de elección para KPC, posicionando a Ceftacidima/Avibactam como primera línea preferente.",
      patientProfile: "Pacientes adultos hospitalizados con infecciones del torrente sanguíneo o del tracto respiratorio inferior por enterobacterias productoras de carbapenemasas de tipo serín-betalactamasa (KPC).",
      drugsAffected: "Ceftacidima/Avibactam (Zavicefta®), Polimixina B, Colistina, Meropenem.",
      precautions: "Vigilar la posible emergencia de resistencia a Ceftacidima/Avibactam mediada por mutaciones en la betalactamasa KPC (como KPC-3) durante tratamientos prolongados."
    },
    guidelineComparison: {
      classification: "amplía",
      details: "Amplía las guías de la SEIMC y de la ESCMID al aportar datos comparativos robustos de mortalidad de vida real y nefrotoxicidad directa entre ambos enfoques terapéuticos."
    },
    criticalReading: {
      pico: "P: Pacientes hospitalizados con bacteriemia o neumonía por K. pneumoniae productora de KPC.\nI: Monoterapia o combinación con Ceftacidima/Avibactam.\nC: Regímenes basados en Polimixina B o Colistina.\nO: Mortalidad hospitalaria por todas las causas a los 30 días y tasa de fallo renal agudo (criterios KDIGO).",
      internalValidity: "Alta. Estudio de cohorte prospectivo que utilizó un análisis de propensión de emparejamiento (propensity score matching) muy riguroso para controlar el sesgo de confusión por indicación clínico.",
      externalValidity: "Excelente. Incluye centros hospitalarios reales de alta complejidad, reflejando el manejo habitual en unidades de infecciosas.",
      biases: "Sesgo de información mitigado mediante evaluación centralizada y ciega del estado de curación clínica y de las determinaciones microbiológicas de resistencia.",
      sampleSize: "285 pacientes incluidos de forma consecutiva.",
      evidenceQuality: "Moderada-Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Justificación farmacoeconómica para sustituir colistina en la guía farmacoterapéutica local, a pesar del mayor coste unitario de Ceftacidima/Avibactam, debido al ahorro en diálisis y menor estancia en la UCI.",
      reconciliation: "Validación rápida por el farmacéutico PROA de los perfiles moleculares de resistencia para autorizar el fármaco en menos de 24 horas."
    },
    clinicalSession: {
      keyMessages: [
        "Ceftacidima/Avibactam reduce la mortalidad intrahospitalaria un 50% ajustado en comparación con las polimixinas tradicionales.",
        "La tasa de fallo renal agudo inducido por fármacos fue del 6% con Ceftacidima/Avibactam frente al 28% con Polimixina B (p<0.001).",
        "Se desaconseja formalmente el uso de colistina/polimixina B como primera línea empírica o dirigida frente a KPC activa."
      ],
      summarySlide: "CRACKLE-II: Ceftacidima/Avibactam vs Polimixina B en KPC.\n- Mortalidad a 30 días: Reducción significativa (HR 0.52; p=0.002) en favor de Zavicefta.\n- Nefrotoxicidad: Disminución drástica del fracaso renal agudo (6% vs 28%).\n- Posicionamiento: Tratamiento de primera línea preferente guiado por PCR de resistencia.",
      debateQuestion: "¿Cómo podemos agilizar la retirada total de la colistina de los stock de planta para evitar su uso accidental en infecciones sensibles a los nuevos betalactámicos?",
      clinicalCase: "Paciente de 69 años con bacteriemia por K. pneumoniae con PCR positiva para gen blaKPC. Presenta un aclaramiento basal de 35 mL/min. Recibe pauta inicial empírica con Colistina y Meropenem, presentando al tercer día un aumento de creatinina plasmática de 1.1 mg/dL.",
      localApplicability: "Establecimiento de una regla de decisión clínica en el software de farmacia para proponer el switch inmediato a Ceftacidima/Avibactam ante hemocultivos positivos para KPC."
    }
  },
  {
    id: "art-16",
    title: "Inmunoterapia con Pembrolizumab en Combinación con Quimioterapia en Cáncer de Pulmón No Microcítico Metastásico: Estudio de Fase III KEYNOTE-189",
    source: "Journal of Clinical Oncology (JCO)",
    date: "2026-05-10",
    specialty: "Oncología/Hematología",
    transversal: "Seguridad del paciente",
    pubType: "Ensayo clínico",
    relevance: 95,
    impact: 94,
    summary: "Ensayo clínico de fase III, aleatorizado y doble ciego, que evalúa la adición de Pembrolizumab a la quimioterapia con Pemetrexed y un platino (cisplatino o carboplatino) en pacientes con cáncer de pulmón no microcítico (CPNM) no escamoso metastásico no tratado previamente y sin mutaciones EGFR/ALK. Demuestra una prolongación sustancial de la supervivencia global.",
    practiceChange: {
      whatsNew: "Establece como estándar de primera línea mundial la combinación de inmunoterapia más quimioterapia, logrando un beneficio en supervivencia independientemente del nivel de expresión del biomarcador PD-L1.",
      patientProfile: "Pacientes adultos diagnosticados de CPNM no escamoso metastásico, en primera línea de tratamiento, con buen estado funcional y sin alteraciones de los oncogenes EGFR o ALK.",
      drugsAffected: "Pembrolizumab (Keytruda®), Pemetrexed, Cisplatino, Carboplatino.",
      precautions: "Monitorización activa de efectos adversos inmunomediados (neumonitis, colitis, hipofisitis o nefritis). Requiere uso precoz de corticoides sistémicos ante cualquier síntoma sospechoso."
    },
    guidelineComparison: {
      classification: "confirma",
      details: "Confirma y consolida las directrices de la guía ESMO y de la SEOM 2025 para el cáncer de pulmón avanzado, situando esta combinación como pauta de elección preferencial de clase I."
    },
    criticalReading: {
      pico: "P: Pacientes con CPNM no escamoso metastásico no tratado previamente, sin mutaciones EGFR/ALK.\nI: Pembrolizumab (200 mg) más Pemetrexed y Platino cada 3 semanas (4 ciclos) seguido de Pembrolizumab y Pemetrexed de mantenimiento.\nC: Placebo más Pemetrexed y Platino.\nO: Supervivencia global (SG) y supervivencia libre de progresión (SLP).",
      internalValidity: "Alta. Diseño controlado con placebo, aleatorizado 2:1, doble ciego, multicéntrico internacional. Análisis robusto por intención de tratar con pérdidas de seguimiento mínimas.",
      externalValidity: "Excelente. Criterios de selección realistas que representan el grueso de pacientes metastásicos atendidos en los servicios de Oncología del país.",
      biases: "Bajo riesgo de sesgo debido al riguroso cegamiento de los evaluadores de imágenes radiográficas (criterios RECIST 1.1) y de los clínicos implicados.",
      sampleSize: "616 pacientes aleatorizados (410 en brazo de intervención, 206 en control).",
      evidenceQuality: "Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Aprobación y protocolización inmediata en el Servicio de Farmacia para la dosificación fija de Pembrolizumab a 200 mg (o pauta extendida de 400 mg cada 6 semanas) para optimizar la ocupación del Hospital de Día.",
      reconciliation: "Elaboración de una tarjeta de seguridad específica de inmunoterapia para el paciente oncológico, coordinando visitas mensuales con enfermería y farmacéutico para el control de toxicidades inmunomediadas."
    },
    clinicalSession: {
      keyMessages: [
        "La supervivencia global a los 12 meses fue significativamente superior en el brazo de Pembrolizumab (69.2% frente a 49.4%; HR 0.49).",
        "El beneficio en supervivencia se extiende de forma consistente a los tres subgrupos de expresión de PD-L1 (incluyendo los de <1%).",
        "La incidencia de efectos adversos de grado 3 o superior inmunomediados fue del 18.9%, exigiendo educación sanitaria rigurosa del paciente."
      ],
      summarySlide: "KEYNOTE-189: Pembrolizumab + Quimioterapia en CPNM.\n- Supervivencia Global Mediana: 22.0 meses con Pembrolizumab vs 10.7 meses con quimioterapia sola (HR 0.56; p<0.001).\n- Beneficio transversal: Consistente en PD-L1 <1%, 1-49% y ≥50%.\n- Toxicidad: Neumonitis inmunomediada (4.4%) y colitis (2.2%) como eventos de interés.",
      debateQuestion: "¿Cómo implementaremos un circuito ágil de interconsulta con el Servicio de Endocrinología y Digestivo ante sospecha de tiroiditis o colitis por inmunoterapia?",
      clinicalCase: "Varón de 59 años, fumador activo, diagnosticado de adenocarcinoma pulmonar metastásico con metástasis óseas. El análisis molecular descarta mutaciones EGFR y ALK. La expresión de PD-L1 resulta del 0%. Se debate en el comité de tumores el inicio del tratamiento con Pembrolizumab asociado a quimioterapia.",
      localApplicability: "Despliegue de plantillas de validación farmacéutica automatizadas en el programa Oncofarm para verificar los niveles hepáticos y tiroideos antes de cada ciclo."
    }
  },
  {
    id: "art-17",
    title: "Eficacia de Sacubitrilo/Valsartán en Pacientes con Insuficiencia Cardíaca Agudamente Descompensada: Ensayo Clínico PIONEER-HF",
    source: "New England Journal of Medicine (NEJM)",
    date: "2026-05-12",
    specialty: "Cardiología",
    transversal: "Polimedicación",
    pubType: "Ensayo clínico",
    relevance: 92,
    impact: 90,
    summary: "Ensayo clínico aleatorizado y doble ciego que evalúa el inicio intrahospitalario de Sacubitrilo/Valsartán frente a Enalapril en pacientes ingresados por insuficiencia cardíaca aguda con fracción de eyección reducida tras lograr la estabilización hemodinámica. Demuestra una mayor y más rápida reducción del biomarcador NT-proBNP.",
    practiceChange: {
      whatsNew: "Aporta evidencia de primer nivel para avalar el inicio del inhibidor de neprilisina en el propio ámbito hospitalario (durante el ingreso) en lugar de esperar al alta, mejorando el pronóstico cardiovascular temprano.",
      patientProfile: "Pacientes adultos hospitalizados por insuficiencia cardíaca aguda descompensada con fracción de eyección del ventrículo izquierdo (FEVI) ≤40%, estabilizados sin necesidad de inótropos o vasodilatadores IV en las últimas 24 horas.",
      drugsAffected: "Sacubitrilo/Valsartán (Entresto®), Enalapril, Ramipril, Canderasartán.",
      precautions: "Vigilar estrechamente la presión arterial sistólica (riesgo de hipotensión sintomática). Respetar un período de lavado de 36 horas si el paciente tomaba previamente un IECA."
    },
    guidelineComparison: {
      classification: "amplía",
      details: "Amplía las guías de la Sociedad Europea de Cardiología (ESC) 2025 al adelantar el posicionamiento de Sacubitrilo/Valsartán a la fase hospitalaria aguda de forma segura."
    },
    criticalReading: {
      pico: "P: Pacientes hospitalizados con insuficiencia cardíaca descompensada y FEVI ≤40% estabilizados.\nI: Inicio intrahospitalario de Sacubitrilo/Valsartán (dosis ajustada).\nC: Inicio intrahospitalario de Enalapril (dosis ajustada).\nO: Cambio proporcional en la concentración plasmática de NT-proBNP desde el inicio hasta las semanas 4 y 8.",
      internalValidity: "Alta. Estudio controlado aleatorizado, doble ciego, multicéntrico. Distribución homogénea de características basales y alta adherencia al protocolo en ambos brazos clínicos.",
      externalValidity: "Excelente. Refleja de forma fiel el perfil habitual del paciente con insuficiencia cardíaca sistólica ingresado en el servicio de Cardiología del hospital.",
      biases: "Bajo riesgo de sesgos. El análisis de biomarcadores y el registro de eventos isquémicos/reingresos se realizó mediante comités centralizados e independientes.",
      sampleSize: "881 pacientes aleatorizados en 129 centros.",
      evidenceQuality: "Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Inclusión de Sacubitrilo/Valsartán en la guía del hospital con indicación específica de inicio intrahospitalario en pacientes seleccionados, reduciendo la inercia médica.",
      reconciliation: "Garantizar la interrupción del IECA (Enalapril) 36 horas antes de la primera dosis de Sacubitrilo/Valsartán en la planta de Cardiología para evitar el angioedema."
    },
    clinicalSession: {
      keyMessages: [
        "Sacubitrilo/Valsartán logró una reducción del 47% de los niveles de NT-proBNP frente al 25% con Enalapril a las 8 semanas (p<0.001).",
        "El inicio intrahospitalario redujo significativamente un 46% el riesgo relativo de reingreso por insuficiencia cardíaca a los 30 días.",
        "Las tasas de hipotensión sintomática, hiperpotasemia y empeoramiento de función renal fueron similares en ambos grupos."
      ],
      summarySlide: "PIONEER-HF: Sacubitrilo/Valsartán intrahospitalario.\n- Resultados: Reducción superior del NT-proBNP (diferencia de -29%; p<0.001).\n- Seguridad clínica: Sin incremento en eventos renales graves o angioedema.\n- Beneficio asociado: Menor reingreso a los 30 días (HR 0.54).\n- Pauta operativa: Respetar lavado de 36 horas si venía de Enalapril.",
      debateQuestion: "¿Cómo podemos formar a los médicos residentes de Cardiología y Medicina Interna para implementar la pauta de lavado de 36 horas y evitar errores graves de seguridad?",
      clinicalCase: "Paciente varón de 68 años ingresado por insuficiencia cardíaca aguda. FEVI 30%. Estabilizado tras diuréticos IV, normotenso (TAS 105 mmHg), con Enalapril 5mg/12h en tratamiento habitual. Se plantea iniciar Sacubitrilo/Valsartán en planta.",
      localApplicability: "Despliegue de una orden clínica bloqueante en el programa de prescripción médica que obligue a suspender el IECA durante 36 horas antes de validar la primera dosis de Entresto."
    }
  },
  {
    id: "art-18",
    title: "Impacto del Farmacéutico Clínico integrado en Planta sobre la Tasa de Errores de Transcripción y Conciliación al Ingreso en Pacientes Crónicos Complejos",
    source: "American Journal of Health-System Pharmacy (AJHP)",
    date: "2026-05-02",
    specialty: "Farmacia Hospitalaria",
    transversal: "Polimedicación",
    pubType: "Ensayo clínico",
    relevance: 88,
    impact: 86,
    summary: "Estudio controlado multicéntrico que evalúa el impacto de la conciliación activa de la medicación en las primeras 24 horas del ingreso de pacientes crónicos complejos pluripatológicos realizada por farmacéuticos clínicos integrados en planta. Reporta una reducción del 68% en las discrepancias no intencionadas de medicación activa.",
    practiceChange: {
      whatsNew: "Demuestra de forma robusta la reducción del riesgo relativo de eventos adversos prevenibles al incorporar al farmacéutico en los pases de visita diarios de las plantas médicas.",
      patientProfile: "Pacientes adultos hospitalizados en Medicina Interna o Geriatría con criterios de paciente crónico complejo (≥5 patologías y ≥8 fármacos crónicos activos).",
      drugsAffected: "Anticoagulantes, antiagregantes, diuréticos, antidiabéticos orales, insulina, psicofármacos.",
      precautions: "Requiere una estrecha coordinación e integración física del farmacéutico con el equipo médico de la planta en el horario de pase de visita matutino."
    },
    guidelineComparison: {
      classification: "confirma",
      details: "Confirma los estándares nacionales de seguridad del paciente del Ministerio de Sanidad y las recomendaciones de la SEFH sobre la implantación del farmacéutico de planta."
    },
    criticalReading: {
      pico: "P: Pacientes crónicos complejos que ingresan en las salas de hospitalización de Medicina Interna.\nI: Conciliación de medicación estructurada en las primeras 24 horas realizada por un farmacéutico integrado en planta.\nC: Conciliación convencional realizada por el médico al ingreso según historia clínica básica.\nO: Tasa de discrepancias no intencionadas por paciente al ingreso y eventos adversos prevenibles por medicamentos.",
      internalValidity: "Alta. Diseño controlado aleatorizado por grupos (cluster randomized study) por planta médica. Criterios de medida de discrepancias validados y unificados.",
      externalValidity: "Excelente. Refleja las dinámicas asistenciales habituales en hospitales generales de tamaño medio y grande.",
      biases: "Riesgo menor de contaminación cruzada atenuado por la aleatorización por plantas independientes. Evaluación ciega de los eventos adversos por revisores externos.",
      sampleSize: "480 pacientes incluidos en 4 hospitales participantes.",
      evidenceQuality: "Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Establecer la figura del farmacéutico de planta como estándar de calidad en el organigrama del Servicio de Farmacia, justificando la dotación en base a la evitación de costes.",
      reconciliation: "Implantación del protocolo de conciliación al ingreso y diseño de una herramienta de registro específica en la historia clínica del paciente compartida."
    },
    clinicalSession: {
      keyMessages: [
        "El 54% de los pacientes crónicos presenta al menos una discrepancia no intencionada en su tratamiento al ingresar en el hospital.",
        "La presencia física del farmacéutico en planta reduce la tasa de errores de conciliación no intencionados en un 68% (p<0.001).",
        "Los principales fármacos causantes de discrepancias potencialmente graves fueron los antiagregantes y los antidiabéticos."
      ],
      summarySlide: "Farmacéutico Clínico integrado en Planta Médica.\n- Intervención: Conciliación clínica en las primeras 24h del ingreso vs Cuidado estándar.\n- Resultados primarios:\n  * Discrepancias resueltas: Reducción del 68% (de 2.4 errores por paciente a 0.8; p<0.001).\n  * Eventos adversos evitados: Disminución del 32% (p=0.015).\n- Conclusión: Modelo asistencial altamente efectivo para aumentar la seguridad del paciente crítico al ingreso.",
      debateQuestion: "¿Cómo podemos reorganizar las tareas de distribución de medicamentos en el Servicio de Farmacia para liberar el tiempo necesario de los farmacéuticos en planta?",
      clinicalCase: "Paciente de 82 años con diabetes y fibrilación auricular. Ingresa por infección urinaria. El médico mantiene su insulina del hospital pero duplica accidentalmente su tratamiento con Apixabán al transcribir una pauta de su historial antiguo.",
      localApplicability: "Despliegue de una agenda diaria de conciliación en el programa informático para que los pacientes crónicos ingresados sean priorizados en el listado de trabajo."
    }
  },
  {
    id: "art-19",
    title: "Adecuación de la Fluidoterapia de Reanimación en Sepsis Grave y Shock Séptico en Urgencias: Estudio de Cohortes Multicéntrico",
    source: "Annals of Emergency Medicine",
    date: "2026-05-18",
    specialty: "Urgencias",
    transversal: "Sepsis y PROA (Optimización de Antimicrobianos)",
    pubType: "Revisión",
    relevance: 86,
    impact: 84,
    summary: "Estudio de cohorte retrospectivo multicéntrico que evalúa la adecuación de la fluidoterapia de reanimación (administración de 30 mL/kg de cristaloides) en pacientes con sepsis grave y shock séptico en el área de urgencias, y analiza su asociación con la mortalidad hospitalaria y el desarrollo de sobrecarga hídrica.",
    practiceChange: {
      whatsNew: "Pone de relieve que, aunque la fluidoterapia inicial agresiva es clave, la falta de personalización y la sobrecarga de volumen (&gt;10% del peso corporal) se asocia con mayor estancia en UCI y mortalidad.",
      patientProfile: "Pacientes adultos atendidos en Urgencias que cumplen criterios de sepsis grave o shock séptico (lactato plasmático ≥4 mmol/L o hipotensión refractaria).",
      drugsAffected: "Suero Fisiológico (Cloruro Sódico 0.9%), Ringer Lactato, Plasmalyte, albúmina.",
      precautions: "Monitorización de signos de sobrecarga hídrica mediante ecografía pulmonar o venosa a pie de cama y ecocardiografía simplificada antes de administrar fluidos adicionales."
    },
    guidelineComparison: {
      classification: "cuestiona",
      details: "Cuestiona la recomendación rígida de fluidoterapia inicial fija de 30 mL/kg para todos los pacientes sin valorar previamente la respuesta vascular individual o riesgo de sobrecarga."
    },
    criticalReading: {
      pico: "P: Pacientes adultos en shock séptico o sepsis grave atendidos en Urgencias.\nI: Fluidoterapia de reanimación guiada por parámetros dinámicos de respuesta a volumen (ej. elevación pasiva de piernas).\nC: Fluidoterapia fija estándar de 30 mL/kg.\nO: Mortalidad por todas las causas a los 28 días, necesidad de ventilación mecánica y tasa de sobrecarga hídrica.",
      internalValidity: "Moderada. Diseño observacional de cohortes retrospectivo. Aunque se realizó un ajuste multivariante y regresión logística, persiste el riesgo de sesgo de confusión debido a variables no registradas en la historia de urgencias.",
      externalValidity: "Excelente. Datos tomados de la práctica real de 10 servicios de urgencias hospitalarios de urgencias, aportando representatividad al SNS.",
      biases: "Sesgo de selección latente y sesgo de información asociado a la recopilación retrospectiva de datos de balances hídricos.",
      sampleSize: "850 registros clínicos de pacientes seguidos consecutivamente.",
      evidenceQuality: "Moderada-Baja (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Establecer la disponibilidad de cristaloides balanceados (como Ringer Lactato o Plasmalyte) en los carros de parada y boxes de críticos de Urgencias frente al suero salino clásico.",
      reconciliation: "Inclusión de parámetros de fluidoterapia dinámica en la hoja de prescripción informatizada de Urgencias para obligar al registro de la respuesta hemodinámica."
    },
    clinicalSession: {
      keyMessages: [
        "La fluidoterapia agresiva e indiscriminada superior a 30 mL/kg en pacientes que no responden a volumen se asocia a mayor distrés respiratorio agudo.",
        "El uso de cristaloides balanceados disminuye el riesgo de acidosis hiperclorémica en comparación con el Cloruro Sódico 0.9%.",
        "La reanimación debe guiarse de forma precoz por parámetros hemodinámicos dinámicos y no únicamente por metas de volumen fijas."
      ],
      summarySlide: "Reanimación en Sepsis en Urgencias: Fluidos vs Sobrecarga.\n- Hallazgo principal: Sobrecarga hídrica (>10%) incrementa el riesgo de muerte a los 28 días (OR 1.62; p=0.015).\n- Cristaloides: Mayor tasa de fallo renal en grupo tratado con Salino 0.9% frente a Balanceados (Ringer).\n- Recomendación: Evaluar respuesta a volumen dinámicamente antes de superar los primeros 2.000 mL de fluido.",
      debateQuestion: "¿Cómo podemos concienciar a los urgenciólogos sobre los riesgos clínicos de la 'sobrehidratación' sistémica en pacientes con fallo cardíaco o renal previo?",
      clinicalCase: "Paciente de 77 años con antecedentes de insuficiencia cardíaca. Ingresa por shock séptico de origen urinario. Se le infunden 3.500 mL de suero fisiológico en 4 horas. Presenta posteriormente disnea progresiva, crepitantes difusos y saturación del 88% en aire ambiente.",
      localApplicability: "Despliegue de un algoritmo visual interactivo de fluidoterapia en sepsis en el box de críticos de Urgencias adaptado a las guías locales."
    }
  },
  {
    id: "art-20",
    title: "Seguridad y Eficacia a Largo Plazo de Secukinumab en Pacientes con Espondiloartritis Axial Radiográfica: Registro Clínico Nacional de Biológicos",
    source: "Annals of the Rheumatic Diseases (ARD)",
    date: "2026-05-15",
    specialty: "Reumatología",
    transversal: "Seguridad del paciente",
    pubType: "Revisión",
    relevance: 87,
    impact: 85,
    summary: "Estudio clínico de vida real basado en los datos del registro nacional de pacientes con espondiloartritis axial activa tratados con Secukinumab (anti-IL17A) tras el fallo o intolerancia a fármacos anti-TNF. Evalúa la persistencia del tratamiento a los 3 años y la tasa de infecciones oportunistas o enfermedad inflamatoria intestinal.",
    practiceChange: {
      whatsNew: "Confirma la eficacia y la excelente persistencia a largo plazo de Secukinumab en vida real como segunda línea biológica, reportando un perfil de seguridad favorable sin incremento de casos de enfermedad inflamatoria intestinal.",
      patientProfile: "Pacientes adultos con espondiloartritis axial radiográfica activa que han presentado respuesta inadecuada o intolerancia a al menos un inhibidor del TNF-alfa.",
      drugsAffected: "Secukinumab (Cosentyx®), Adalimumab, Infliximab, Etanercept.",
      precautions: "Realizar cribado de enfermedad inflamatoria intestinal (enfermedad de Crohn y colitis ulcerosa) antes de iniciar, y monitorizar signos de candidiasis mucocutánea leve."
    },
    guidelineComparison: {
      classification: "confirma",
      details: "Confirma las recomendaciones de las guías de la EULAR y de la Sociedad Española de Reumatología (SER) sobre el posicionamiento de los anti-IL17 en pacientes con fallo previo a anti-TNF."
    },
    criticalReading: {
      pico: "P: Pacientes con espondiloartritis axial activa con fallo previo a anti-TNF.\nI: Tratamiento de mantenimiento con Secukinumab 150 mg o 300 mg subcutáneo mensual.\nC: Datos históricos o cohorte de persistencia a anti-TNF secundarios.\nO: Tasa de persistencia del fármaco a los 3 años y tasa de efectos adversos graves de interés.",
      internalValidity: "Alta. Basada en el análisis prospectivo de un registro nacional nacional unificado de fármacos biológicos con criterios de inclusión y exclusión estandarizados y auditorías de calidad periódicas.",
      externalValidity: "Excelente. Representa las prácticas reales de prescripción y seguimiento de los servicios de Reumatología de todo el territorio nacional.",
      biases: "Sesgo de selección e inercia terapéutica propios de estudios de registro controlados mediante técnicas de imputación múltiple y emparejamiento por puntuación de propensión.",
      sampleSize: "620 pacientes registrados con un seguimiento mediano de 3.2 años.",
      evidenceQuality: "Moderada-Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Establecer la dosis de 150 mg como pauta inicial estándar en la CFT, reservando la dosis de 300 mg únicamente para pacientes con respuesta subóptima para optimizar la eficiencia económica del hospital.",
      reconciliation: "Conciliación farmacoterapéutica en la consulta externa de farmacia. Educación al paciente en la técnica de autoinyección subcutánea y monitorización de la adherencia."
    },
    clinicalSession: {
      keyMessages: [
        "La tasa de persistencia del Secukinumab a los 3 años fue del 68.4% en pacientes con fallo previo a un anti-TNF.",
        "Se observó una baja tasa de infecciones graves (1.2 por 100 pacientes-año) y ausencia de brotes significativos de colitis ulcerosa.",
        "La dosis de 300 mg mostró una eficacia superior en pacientes con afectación cutánea por psoriasis concomitante grave."
      ],
      summarySlide: "Secukinumab en Espondiloartritis Axial (Vida Real).\n- Persistencia a 3 años: 68.4% de éxito terapéutico sostenido.\n- Eficacia: Reducción mantenida del ASDAS en ≥1.1 puntos en el 58% de pacientes.\n- Seguridad: Tasa muy baja de infecciones graves. Candidiasis oral transitoria en el 4.2%.\n- Posicionamiento: Segunda línea biológica de elección post-antiTNF.",
      debateQuestion: "¿Cómo podemos estandarizar las pautas de intensificación de dosis a 300 mg en la CFT del hospital basándonos en criterios objetivos de respuesta clínica?",
      clinicalCase: "Paciente de 42 años con espondiloartritis anquilosante en tratamiento con Adalimumab durante 18 meses con pérdida secundaria de respuesta. Presenta dolor lumbar inflamatorio alto y reactantes de fase aguda elevados. Se plantea el cambio a Secukinumab subcutáneo.",
      localApplicability: "Creación de un documento de solicitud de inicio de terapia biológica en Reumatología con criterios de escala analógica visual (EVA) e índices ASDAS pre-cargados."
    }
  },
  {
    id: "art-21",
    title: "Monoclonales anti-TSLP (Tezepelumab) frente a Placebo en Asma Grave Refractaria no Controlada: Ensayo Clínico NAVIGATOR",
    source: "The Lancet",
    date: "2026-05-18",
    specialty: "Respiratorio",
    transversal: "Seguridad del paciente",
    pubType: "Ensayo clínico",
    relevance: 90,
    impact: 89,
    summary: "Ensayo clínico aleatorizado y doble ciego de fase III que evalúa la eficacia de Tezepelumab (un anticuerpo monoclonal que bloquea la linfopoyetina estromal tímica - TSLP) frente a placebo en pacientes con asma grave no controlada. Demuestra una reducción del 56% en la tasa anualizada de exacerbaciones asmáticas.",
    practiceChange: {
      whatsNew: "Introduce por primera vez un biológico eficaz en asma grave no dependiente de la inflamación tipo 2 (T2-low), beneficiando a pacientes no candidatos a otros biológicos clásicos.",
      patientProfile: "Pacientes de 12 a 80 años con asma grave no controlada que reciben dosis altas de corticoides inhalados y un segundo fármaco de control, independientemente de los niveles basales de eosinófilos.",
      drugsAffected: "Tezepelumab (Tezspire®), Omalizumab, Mepolizumab, Benralizumab, Dupilumab.",
      precautions: "Vigilar reacciones locales en el punto de inyección y monitorizar al paciente por posibles reacciones de hipersensibilidad o anafilaxia sistémica diferida."
    },
    guidelineComparison: {
      classification: "amplía",
      details: "Amplía las guías GEMA (Guía Española para el Manejo del Asma) 2025 al incorporar la terapia anti-alarmina en el algoritmo terapéutico para el asma grave no eosinofílica."
    },
    criticalReading: {
      pico: "P: Pacientes de 12 a 80 años con asma grave no controlada.\nI: Tezepelumab 210 mg por vía subcutánea cada 4 semanas.\nC: Inyección de Placebo cada 4 semanas.\nO: Tasa anualizada de exacerbaciones asmáticas durante un período de 52 semanas.",
      internalValidity: "Alta. Estudio de fase III aleatorizado 1:1, controlado, doble ciego, multinacional. Análisis por intención de tratar adecuado, con tasas de abandono muy bajas (<5%) distribuidas simétricamente.",
      externalValidity: "Excelente. Los criterios de exclusión son mínimos, lo que permite extrapolar el beneficio a los pacientes asmáticos complejos de las consultas de Neumología y Alergia.",
      biases: "Bajo riesgo de sesgos. Aleatorización centralizada e independiente con asignación del fármaco enmascarada mediante jeringas de idéntica apariencia.",
      sampleSize: "1.061 pacientes aleatorizados en total.",
      evidenceQuality: "Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Protocolización en la CFT para restringir Tezepelumab principalmente a pacientes con asma grave no T2 (eosinófilos <150 cél/mcL) o refractarios a biológicos anti-IL5/anti-IL4R previos, por motivos de optimización de coste.",
      reconciliation: "Dispensación de inicio intrahospitalaria de las tres primeras dosis para adiestrar al paciente, permitiendo posteriormente la autoadministración domiciliaria con soporte telefónico."
    },
    clinicalSession: {
      keyMessages: [
        "Tezepelumab reduce la tasa de exacerbaciones anuales un 56% global frente al placebo (p<0.001).",
        "El fármaco demostró eficacia clínica incluso en el subgrupo de pacientes con eosinófilos en sangre <150 cél/mcL.",
        "Se constató una mejora del FEV1 pre-broncodilatador de 130 mL a las 52 semanas frente a placebo."
      ],
      summarySlide: "Ensayo NAVIGATOR: Tezepelumab en Asma Grave.\n- Eficacia primaria: Reducción del 56% en exacerbaciones anuales (p<0.001).\n- Subgrupo Eosinófilos <150 cél/mcL: Disminución significativa del 39%.\n- Función Pulmonar: Mejora del FEV1 en 130 mL.\n- Posicionamiento: Primer biológico eficaz para pacientes con asma grave no T2-high.",
      debateQuestion: "¿Cómo coordinaremos los criterios de derivación conjunta entre Alergología y Neumología para identificar a los pacientes candidatos a esta terapia biológica?",
      clinicalCase: "Paciente de 41 años diagnosticada de asma grave refractaria. Presenta 3 exacerbaciones moderadas que requirieron corticoides sistémicos este año. Sus niveles de eosinófilos en sangre periférica son de 90 cél/mcL (inflamación T2-low).",
      localApplicability: "Despliegue de un cuestionario de cribado clínico informatizado para validar los requisitos de prescripción de Tezepelumab según el protocolo de la CFT."
    }
  },
  {
    id: "art-22",
    title: "Implementación de un Circuito de Prescripción Electrónica Asistida con Alertas Clínicas de Ajuste de Dosis por Función Renal en Pacientes Ancianos",
    source: "Farmacia Hospitalaria",
    date: "2026-05-24",
    specialty: "Farmacia Hospitalaria",
    transversal: "Paciente anciano/frágil",
    pubType: "Ensayo clínico",
    relevance: 89,
    impact: 87,
    summary: "Estudio observacional prospectivo antes-después que evalúa el impacto de alertas automáticas basadas en la ecuación CKD-EPI integradas en el programa de prescripción médica. Analiza la reducción de la sobredosificación de fármacos críticos y la tasa de nefrotoxicidad asociada en pacientes hospitalizados mayores de 70 años.",
    practiceChange: {
      whatsNew: "Demuestra que la integración de calculadoras automáticas de aclaramiento de creatinina vinculadas a avisos en pantalla evita el 72% de las dosis potencialmente tóxicas de fármacos nefrotóxicos o de eliminación renal.",
      patientProfile: "Pacientes de 70 años o más ingresados en salas generales con un filtrado glomerular estimado inferior a 60 mL/min/1.73m².",
      drugsAffected: "Nuevos anticoagulantes orales directos (apixabán, rivaroxabán), Enoxaparina, Metformina, Digoxina, Alopurinol, antibióticos betalactámicos.",
      precautions: "Evitar la fatiga por alertas configurando avisos únicamente para fármacos de estrecho margen terapéutico o reducciones de dosis >30% del estándar."
    },
    guidelineComparison: {
      classification: "confirma",
      details: "Confirma los criterios nacionales de seguridad y conciliación de la SEFH para prevenir eventos adversos por medicamentos en pacientes crónicos complejos."
    },
    criticalReading: {
      pico: "P: Pacientes hospitalizados de ≥70 años con insuficiencia renal moderada-grave.\nI: Sistema de prescripción electrónica asistida con alertas de ajuste de dosis automáticas.\nC: Fase previa sin alertas automáticas de dosificación.\nO: Proporción de prescripciones correctamente ajustadas a la función renal y eventos adversos renales.",
      internalValidity: "Alta. Diseño prospectivo de tipo cuasi-experimental (antes-después) con control exhaustivo del perfil clínico basal y auditoría continua de las prescripciones validadas.",
      externalValidity: "Excelente. El software y los flujos analizados corresponden a los sistemas de receta electrónica hospitalaria habituales del SNS.",
      biases: "Sesgo de confusión histórico corregido mediante regresión logística multivariante para controlar cambios en el perfil de gravedad de los ingresos.",
      sampleSize: "1.100 pacientes analizados (550 en fase control y 550 en fase intervención).",
      evidenceQuality: "Alta en su ámbito operativo y de seguridad"
    },
    pharmacotherapeuticImpact: {
      selection: "Integración informática de algoritmos de dosificación según guías locales en el módulo del software de prescripción médica del hospital.",
      reconciliation: "Validación farmacéutica diaria asistida por alertas para proponer el ajuste al médico en la sesión clínica matinal de la planta."
    },
    clinicalSession: {
      keyMessages: [
        "La implantación de alertas electrónicas incrementó la dosificación correcta del 41% al 84% de las recetas de riesgo.",
        "Se observó una reducción absoluta del 5.8% en el desarrollo de insuficiencia renal aguda hospitalaria por nefrotoxicidad.",
        "Es clave parametrizar el software para evitar la saturación y el cierre sistemático de avisos por parte del personal médico."
      ],
      summarySlide: "Alertas Clínicas de Dosificación Renal en Ancianos.\n- Resultados primarios: Ajuste de dosis óptimo aumenta del 41% al 84% (p<0.001).\n- Seguridad del paciente: Descenso significativo de eventos adversos (OR 0.38; p=0.002).\n- Fármacos de mayor impacto: Anticoagulantes directos y antibióticos.\n- Recomendación: Configurar alertas activas obligatorias de interrupción.",
      debateQuestion: "¿Cómo podemos diseñar un circuito de validación conjunta médico-farmacéutico para resolver las alertas complejas sin interrumpir el flujo asistencial?",
      clinicalCase: "Paciente mujer de 81 años ingresada por neumonía. Presenta un peso de 48 kg y creatinina sérica de 1.4 mg/dL (aclaramiento estimado CKD-EPI de 28 mL/min). Se le prescribe enoxaparina 60 mg/24h subcutánea para profilaxis de riesgo sin ajuste renal.",
      localApplicability: "Puesta en marcha de un piloto de alertas en el área de Medicina Interna del hospital durante un mes para evaluar la aceptación y tasa de anulación."
    }
  },
  {
    id: "art-23",
    title: "Estabilidad y Compatibilidad Fisicoquímica de Diluciones Concentradas de Infliximab en Bolsas de Poliolefina y Jeringas de Polipropileno para Dose-Banding",
    source: "European Journal of Hospital Pharmacy",
    date: "2026-05-22",
    specialty: "Farmacotecnia",
    transversal: "Seguridad del paciente",
    pubType: "Revisión",
    relevance: 85,
    impact: 83,
    summary: "Estudio experimental de estabilidad química y microbiológica que evalúa la viabilidad del almacenamiento prolongado de diluciones de Infliximab preparadas de forma centralizada en jeringas y bolsas de infusión. Valida la implantación de la técnica de bandas de dosis fijas (dose-banding) para optimizar la preparación.",
    practiceChange: {
      whatsNew: "Demuestra la estabilidad fisicoquímica y el mantenimiento de la actividad inmunológica de infliximab diluido hasta 14 días conservado en refrigeración (2-8°C) y protegido de la luz.",
      patientProfile: "Pacientes con enfermedad inflamatoria intestinal (Crohn o colitis) o artritis en tratamiento activo con Infliximab biosimilar en el Hospital de Día.",
      drugsAffected: "Infliximab biosimilar (Remsima®, Inflectra®, Flixabi®).",
      precautions: "Evitar la congelación de las mezclas preparadas. Confirmar la ausencia de agregados proteicos mediante inspección visual antes de la administración."
    },
    guidelineComparison: {
      classification: "confirma",
      details: "Respalda las directrices técnicas del Servicio de Farmacia para la estandarización y preparación anticipada de terapias biológicas estériles."
    },
    criticalReading: {
      pico: "P: Mezclas listas para usar de infliximab diluido (10 mg/mL) en bolsas de poliolefina y jeringas de propileno.\nI: Almacenamiento a 2-8°C durante 14 días y posterior exposición a temperatura ambiente.\nC: Preparación inmediata bajo demanda a partir de viales extemporáneos.\nO: Pureza cromatográfica (HPLC-SEC), actividad de unión al TNF-alfa por ELISA, turbidez y esterilidad microbiológica.",
      internalValidity: "Alta. Estudio experimental in vitro riguroso con metodologías validadas y repetidas para la cuantificación de monómeros, dímeros e impurezas solubles.",
      externalValidity: "Excelente. Proporciona datos técnicos directamente trasladables al área de mezclas estériles del Servicio de Farmacia Hospitalaria.",
      biases: "No aplica sesgo clínico por ser un análisis in vitro de estabilidad molecular.",
      sampleSize: "Análisis por duplicado de 6 lotes independientes para cada contenedor a los días 0, 3, 7, 10 y 14.",
      evidenceQuality: "Alta en el ámbito de estabilidad fisicoquímica farmacéutica"
    },
    pharmacotherapeuticImpact: {
      selection: "Permite cambiar el flujo de trabajo del Hospital de Día, preparando lotes de infliximab de forma anticipada los lunes para cubrir la demanda de la semana.",
      reconciliation: "Disminución del tiempo de espera del paciente en el hospital en un 38% al disponer de las mezclas previamente preparadas en la cabina de flujo laminar."
    },
    clinicalSession: {
      keyMessages: [
        "Infliximab diluido mantiene una concentración >98% y no muestra signos de agregación o degradación física a los 14 días a 2-8°C.",
        "La técnica de dose-banding y preparación centralizada permite una optimización del gasto farmacéutico del 10.4% por reducción de mermas de viales.",
        "Se valida la esterilidad microbiológica de las preparaciones en jeringa tras ensayo de contaminación simulada."
      ],
      summarySlide: "Dose-Banding de Infliximab en el Servicio de Farmacia.\n- Hallazgo técnico: Estabilidad total demostrada durante 14 días refrigerado.\n- Envases analizados: Jeringas y bolsas sin plastificantes (poliolefina).\n- Eficiencia: Reducción del despilfarro de dosis y del tiempo de espera del paciente.\n- Requisito: Mantenimiento estricto de la cadena de frío.",
      debateQuestion: "¿Cómo podemos coordinar con el hospital de día las citas de pacientes para agrupar las administraciones y optimizar la preparación de lotes?",
      clinicalCase: "Se recibe una solicitud para preparar una dosis no estándar de Infliximab de 340 mg para un paciente con colitis ulcerosa refractaria. Se analiza la preparación utilizando dos viales y ajustando la dosis en banda pre-preparada de 350 mg.",
      localApplicability: "Actualización de las guías de elaboración del Servicio de Farmacia e integración del concepto de dose-banding en el circuito de control de mezclas."
    }
  },
  {
    id: "art-24",
    title: "Eficacia y Seguridad de la Inmunoterapia con Durvalumab en combinación con Quimioterapia en Cáncer de Vías Biliares Avanzado en Población Española: Estudio Multicéntrico RERBILIA",
    source: "Farmacia Hospitalaria",
    date: "2026-05-25",
    specialty: "Oncología/Hematología",
    transversal: "Seguridad del paciente",
    pubType: "Ensayo clínico",
    relevance: 91,
    impact: 89,
    summary: "Estudio observacional retrospectivo multicéntrico que evalúa la efectividad y el perfil de seguridad de Durvalumab en combinación con Gemcitabina y Cisplatino como primera línea en pacientes con colangiocarcinoma avanzado o metastásico en condiciones de práctica clínica habitual en España.",
    practiceChange: {
      whatsNew: "Confirma en vida real la tasa de respuesta objetiva (32.4%) y supervivencia libre de progresión (8.1 meses) observadas en el ensayo TOPAZ-1, posicionando a la inmunoterapia como estándar de cuidado local.",
      patientProfile: "Pacientes adultos con colangiocarcinoma o cáncer de vesícula biliar localmente avanzado o metastásico, no candidatos a resección quirúrgica.",
      drugsAffected: "Durvalumab (Imfinzi®), Gemcitabina, Cisplatino.",
      precautions: "Vigilancia estrecha de toxicidades inmunomediadas (especialmente disfunción tiroidea y colitis). Requerir pruebas de función tiroidea basales y antes de cada ciclo de inmunoterapia."
    },
    guidelineComparison: {
      classification: "confirma",
      details: "Avalado por el Grupo de Farmacia Oncológica (GEDEFO) de la SEFH, confirmando las recomendaciones de ESMO y SEOM de 2025 para el uso sistemático de anti-PD-L1 en esta indicación."
    },
    criticalReading: {
      pico: "P: Pacientes con cáncer de vías biliares avanzado o metastásico de primera línea.\nI: Durvalumab combinado con gemcitabina/cisplatino seguido de mantenimiento con durvalumab.\nC: Quimioterapia clásica sola (histórica o estándar).\nO: Supervivencia libre de progresión (SLP), supervivencia global (SG) y perfil de toxicidades.",
      internalValidity: "Moderada-alta. Estudio observacional pero de gran tamaño muestral, con recogida de datos estandarizada en 14 centros hospitalarios españoles.",
      externalValidity: "Excelente. Refleja fielmente la práctica oncológica habitual en los hospitales del Sistema Nacional de Salud.",
      biases: "Riesgo de sesgo de selección debido a su carácter retrospectivo y pérdida de algunos pacientes por falta de seguimiento completo.",
      sampleSize: "114 pacientes tratados. Potencia suficiente para el análisis de supervivencia.",
      evidenceQuality: "Moderada-Alta (Evidencia de vida real)"
    },
    pharmacotherapeuticImpact: {
      selection: "Aprobación y protocolización de Durvalumab en la CFT del hospital. Estimación de impacto presupuestario de unos 45.000€ por paciente tratado.",
      reconciliation: "Establecer la monitorización mensual de hormonas tiroideas (TSH, T4 libre) e incluirla en la prescripción informatizada del Servicio de Farmacia."
    },
    clinicalSession: {
      keyMessages: [
        "Durvalumab más quimioterapia demuestra una SLP mediana de 8.1 meses frente a los 6.8 meses históricos de la quimioterapia sola.",
        "La toxicidad inmunomediada de grado 3-4 se presentó en el 14% de los pacientes, siendo el hipotiroidismo la complicación más frecuente (18%).",
        "El beneficio clínico se mantiene independientemente del nivel de expresión de PD-L1 en el tumor."
      ],
      summarySlide: "Durvalumab en Cáncer de Vías Biliares (Estudio RERBILIA).\n- Diseño: Multicéntrico observacional, 114 pacientes en España.\n- Resultados: SLP de 8.1 meses y Supervivencia Global de 12.9 meses.\n- Toxicidad: 14% de efectos adversos inmunomediados G3-4.\n- Conclusión: Efectividad clínica consistente con los ensayos de registro en condiciones de práctica real.",
      debateQuestion: "¿Cómo optimizaremos el circuito de solicitud y validación de Durvalumab para iniciar el tratamiento en menos de 7 días tras el diagnóstico?",
      clinicalCase: "Varón de 67 años diagnosticado de colangiocarcinoma intrahepático con metástasis pulmonares bilaterales. Excelente estado general (ECOG 0). Se propone inicio de tratamiento de primera línea con Durvalumab + Gemcitabina + Cisplatino tras valoración multidisciplinar.",
      localApplicability: "Creación del protocolo de preparación en cabina de citostáticos y plantilla de prescripción en el programa de Hospital de Día."
    }
  },
  {
    id: "art-25",
    title: "Prevención de Errores de Medicación en Pacientes Críticos mediante la Estandarización de Concentraciones de Perfusión de Fármacos Vasoactivos: Resultados de una Encuesta Nacional",
    source: "European Journal of Hospital Pharmacy",
    date: "2026-05-24",
    specialty: "Paciente Crítico",
    transversal: "Seguridad del paciente",
    pubType: "Revisión",
    relevance: 88,
    impact: 86,
    summary: "Estudio descriptivo que analiza el impacto de la unificación de concentraciones estándar de perfusión continua para Noradrenalina, Dopamina y Dobutamina en 25 Unidades de Cuidados Intensivos españolas. Evalúa la reducción de errores en la preparación y programación de bombas inteligentes.",
    practiceChange: {
      whatsNew: "Demuestra que la adopción de una concentración única estándar de Noradrenalina (0.1 mg/mL y 0.2 mg/mL) disminuye un 68% los errores de programación de bombas de perfusión en UCI.",
      patientProfile: "Pacientes adultos ingresados en UCI que requieren soporte inotrópico o vasoactivo.",
      drugsAffected: "Noradrenalina, Dobutamina, Dopamina, Nitroglicerina parenteral.",
      precautions: "Se requiere formación del personal de enfermería en el manejo de las nuevas diluciones estandarizadas y actualización del software de las bombas de infusión inteligentes con límites estrictos (guardrails)."
    },
    guidelineComparison: {
      classification: "confirma",
      details: "Alineado con las recomendaciones de seguridad de la European Association of Hospital Pharmacists (EAHP) y de la campaña 'Medicamentos sin Daños' de la OMS."
    },
    criticalReading: {
      pico: "P: Personal de enfermería y médicos que programan perfusiones vasoactivas en UCI.\nI: Implementación de concentraciones estándar de perfusión vasoactiva y bombas inteligentes.\nC: Preparación clásica con dosis variables de fármaco añadidas al suero.\nO: Tasa de discrepancias o errores de dosificación en la preparación y programación.",
      internalValidity: "Alta. Recogida sistemática de errores y cuasi-errores de medicación a través de un registro específico de seguridad antes y después de la estandarización.",
      externalValidity: "Muy alta. Los fármacos y sistemas de bombas analizados son de uso habitual en la gran mayoría de UCIs españolas.",
      biases: "Riesgo de subnotificación voluntaria de errores en ambas fases, mitigado mediante auditorías directas aleatorias y anónimas por farmacéuticos de UCI.",
      sampleSize: "Registro de 12.400 horas de infusión controladas y auditadas.",
      evidenceQuality: "Alta en gestión del riesgo y seguridad del paciente"
    },
    pharmacotherapeuticImpact: {
      selection: "Adopción de las concentraciones estándar aprobadas por la Comisión de Farmacia y Terapéutica e implantación de jeringas listas para usar (RTU) preparadas por el Servicio de Farmacia o adquiridas comercialmente.",
      reconciliation: "Revisión diaria del perfil de infusión de los pacientes críticos durante las rondas de visita conjunta en UCI."
    },
    clinicalSession: {
      keyMessages: [
        "La estandarización reduce los errores graves de dosificación vasoactiva a pie de cama de un 8.4% a un 1.2%.",
        "La preparación de mezclas en el Servicio de Farmacia garantiza la esterilidad y estabilidad físico-química del preparado.",
        "La biblioteca de fármacos en las bombas inteligentes debe ser bloqueada para evitar anulaciones manuales de los límites de seguridad."
      ],
      summarySlide: "Estandarización de Vasoactivos en Paciente Crítico.\n- Objetivo: Reducir errores de programación y preparación.\n- Solución: Concentraciones estándar únicas validadas por el Servicio de Farmacia.\n- Impacto: Disminución de errores de infusión del 8.4% al 1.2% (p<0.001).\n- Recomendación: Implementar jeringas listas para uso y actualizar bombas con guardrails.",
      debateQuestion: "¿Cuáles son las principales dificultades del Servicio de Farmacia para suministrar jeringas prellenadas de Noradrenalina de forma continua en fines de semana?",
      clinicalCase: "Paciente en shock séptico que requiere dosis crecientes de Noradrenalina. Enfermería prepara una disolución añadiendo 2 viales a 100 mL de suero fisiológico, pero en el cambio de turno se confunde la concentración programada en la bomba, programándola como disolución simple en lugar de doble.",
      localApplicability: "Despliegue del protocolo de estandarización conjunto entre Farmacia y Medicina Intensiva, con auditoría de cumplimiento trimestral."
    }
  },
  {
    id: "art-26",
    title: "Eficacia de un Programa de Desprescripción de Benzodiacepinas en Centros Sociosanitarios liderado por Farmacéuticos de Hospital",
    source: "Farmacia Hospitalaria",
    date: "2026-05-23",
    specialty: "Geriatría",
    transversal: "Paciente anciano/frágil",
    pubType: "Ensayo clínico",
    relevance: 90,
    impact: 88,
    summary: "Ensayo clínico controlado y aleatorizado por clústeres que evalúa la efectividad de una intervención educativa y de soporte a la desprescripción dirigida por farmacéuticos para reducir el uso crónico de benzodiacepinas en pacientes ancianos institucionalizados en residencias geriátricas de larga estancia.",
    practiceChange: {
      whatsNew: "Consigue suspender o reducir en más del 50% la dosis de benzodiacepinas en el 62% de los pacientes crónicos del grupo de intervención, logrando una reducción del 45% en la tasa de caídas a los 6 meses de seguimiento.",
      patientProfile: "Pacientes de 65 años o más que residen en centros sociosanitarios con uso continuado de benzodiacepinas durante más de 3 meses.",
      drugsAffected: "Lorazepam, Lormetazepam, Diazepam, Alprazolam, Zolpidem.",
      precautions: "El proceso de desprescripción debe ser gradual (tapering) para evitar el síndrome de abstinencia y el insomnio de rebote, requiriendo un seguimiento estrecho del paciente."
    },
    guidelineComparison: {
      classification: "confirma",
      details: "Apoya las recomendaciones de desprescripción basadas en los Criterios STOPP/START y las guías de la Sociedad Española de Geriatría y Gerontología (SEGG)."
    },
    criticalReading: {
      pico: "P: Residentes ancianos crónicos consumidores de benzodiacepinas.\nI: Programa de desprescripción dirigido por farmacéutico con pauta de retirada gradual.\nC: Cuidado habitual y seguimiento médico estándar sin pauta estructurada de retirada.\nO: Tasa de suspensión definitiva a los 6 meses, frecuencia de caídas y calidad del sueño.",
      internalValidity: "Alta. Aleatorización por clústeres (residencias) para evitar la contaminación entre pacientes. Evaluación ciega de los endpoints de seguridad por investigadores independientes.",
      externalValidity: "Excelente. El perfil de los residentes incluidos es plenamente representativo de la población institucionalizada en centros sociosanitarios de España.",
      biases: "Riesgo menor de sesgo por pérdida de pacientes en el seguimiento (12% por fallecimiento o traslado, esperable en esta población).",
      sampleSize: "320 pacientes de 12 centros residenciales.",
      evidenceQuality: "Alta (GRADE)"
    },
    pharmacotherapeuticImpact: {
      selection: "Inclusión de guías de retirada y folletos informativos de desprescripción en la cartera de servicios sociosanitarios del Servicio de Farmacia.",
      reconciliation: "Conciliación activa y revisión semestral sistemática de toda la terapia sedante-hipnótica en pacientes mayores institucionalizados."
    },
    clinicalSession: {
      keyMessages: [
        "El farmacéutico como integrador clínico lidera la reducción exitosa del uso inadecuado de hipnóticos en ancianos frágiles.",
        "Se demuestra un descenso muy significativo del riesgo de caídas (HR 0.55, p=0.012) sin empeoramiento percibido de la calidad del sueño.",
        "La implicación y educación de los cuidadores y enfermería de la residencia es indispensable para el éxito de la retirada."
      ],
      summarySlide: "Desprescripción de Benzodiacepinas en Residencias.\n- Resultados de Intervención: 62% logran retirada total o reducción del 50% de dosis.\n- Impacto en Caídas: Descenso del 45% en el brazo de intervención a 6 meses.\n- Calidad del Sueño: Medida por escala de Pittsburg, sin diferencias vs control.\n- Conclusión: La intervención farmacéutica estructurada es segura, eficaz y mejora la calidad asistencial.",
      debateQuestion: "¿Cómo podemos convencer a los familiares y cuidadores sobre el beneficio de desprescribir hipnóticos de larga duración cuando los asocian erróneamente a tranquilidad?",
      clinicalCase: "Paciente de 86 años residente con antecedentes de demencia leve y 2 caídas sin fractura este año. Toma Lormetazepam 2 mg por la noche desde hace 4 años. El farmacéutico propone iniciar un plan de reducción de dosis a 1 mg durante 2 semanas, luego 0.5 mg durante otras 2 semanas, antes de suspender.",
      localApplicability: "Establecimiento de un protocolo de revisión estructurado en la historia clínica sociosanitaria compartida."
    }
  },
  {
    id: "art-27",
    title: "Evaluación de la Eficacia y Coste-Efectividad de la monitorización farmacocinética de Adalimumab en Pacientes con Enfermedad Inflamatoria Intestinal: Estudio de Vida Real",
    source: "European Journal of Hospital Pharmacy",
    date: "2026-05-22",
    specialty: "Coste-Efectividad",
    transversal: "Polimedicación",
    pubType: "Revisión",
    relevance: 86,
    impact: 84,
    summary: "Estudio observacional que analiza la costo-efectividad de la monitorización terapéutica de fármacos (TDM) reactiva y proactiva de Adalimumab en pacientes con enfermedad de Crohn y colitis ulcerosa. Demuestra optimización del gasto en biológicos y tasas de remisión clínica sostenida.",
    practiceChange: {
      whatsNew: "Demuestra que la monitorización proactiva de niveles séricos de Adalimumab (manteniendo niveles valle entre 5-10 mcg/mL) evita la pérdida de respuesta y reduce un 18% los costes de intensificación innecesaria de dosis en comparación con el manejo empírico.",
      patientProfile: "Pacientes con enfermedad de Crohn o colitis ulcerosa moderada-grave en tratamiento de mantenimiento con Adalimumab.",
      drugsAffected: "Adalimumab (incluyendo biosimilares de menor coste).",
      precautions: "Garantizar la toma de muestras de sangre exactamente en el momento valle (justo antes de la siguiente administración subcutánea) para asegurar la validez de los resultados farmacocinéticos."
    },
    guidelineComparison: {
      classification: "amplía",
      details: "Complementa las guías del Grupo Español de Trabajo en Enfermedad de Crohn y Colitis Ulcerosa (GETECCU) promoviendo la incorporación activa del farmacéutico clínico en el ajuste PK."
    },
    criticalReading: {
      pico: "P: Pacientes adultos con enfermedad inflamatoria intestinal en tratamiento con Adalimumab.\nI: Ajuste de dosis guiado por monitorización farmacocinética (niveles y anticuerpos anti-adalimumab).\nC: Manejo clínico convencional basado únicamente en síntomas y marcadores inflamatorios (proteína C reactiva, calprotectina).\nO: Tasa de remisión clínica sostenida a 12 meses, tasas de intensificación y coste directo por paciente.",
      internalValidity: "Moderada-Alta. Cohorte prospectiva bien caracterizada, con determinaciones analíticas centralizadas mediante ELISA validado.",
      externalValidity: "Excelente. Los protocolos y biosimilares de Adalimumab analizados corresponden al estándar actual en los hospitales españoles.",
      biases: "Posible sesgo de clasificación en pacientes con síntomas dudosos. Mitigado mediante el uso de criterios objetivos de remisión endoscópica y calprotectina fecal.",
      sampleSize: "184 pacientes incluidos con seguimiento completo de un año.",
      evidenceQuality: "Moderada-Alta (Estudio observacional con gran impacto práctico)"
    },
    pharmacotherapeuticImpact: {
      selection: "Consolidar el circuito de determinación analítica de niveles valle de anti-TNF en el Servicio de Farmacia Hospitalaria o Bioquímica.",
      reconciliation: "Participación del farmacéutico en la consulta externa de digestivo para ajustar la dosis basándose en el informe farmacocinético integrado."
    },
    clinicalSession: {
      keyMessages: [
        "La monitorización farmacocinética proactiva es superior al ajuste empírico por síntomas para evitar el fracaso terapéutico secundario.",
        "Los anticuerpos anti-Adalimumab a títulos altos (>10 UA/mL) se asocian a niveles indetectables del fármaco y exigen el cambio de diana terapéutica.",
        "El ahorro medio estimado es de 1.200€ por paciente/año en concepto de evitación de intensificaciones de dosis inútiles."
      ],
      summarySlide: "Monitorización de Adalimumab en EII.\n- Resultados Clave: Remisión sostenida a un año en el 78% del grupo PK vs 64% control (p=0.03).\n- Ahorro económico: Disminución de costes de intensificación en un 18%.\n- Criterio de ajuste: Nivel valle óptimo 5-10 mcg/mL.\n- Algoritmo: Si nivel bajo y anticuerpos (+), cambiar de fármaco; si nivel bajo y anticuerpos (-), intensificar dosis.",
      debateQuestion: "¿Cómo podemos coordinar las citas en consultas externas para que el paciente se extraiga la analítica valle exactamente el día que le corresponde la inyección de Adalimumab?",
      clinicalCase: "Paciente de 36 años con Crohn ileocolónico en tratamiento de mantenimiento con Adalimumab 40 mg cada 2 semanas. Presenta un rebrote clínico leve. Se determinan niveles valle de Adalimumab que resultan en 2.1 mcg/mL con anticuerpos anti-fármaco negativos. Se decide intensificar a 40 mg semanal.",
      localApplicability: "Diseño de una hoja de ruta para la consulta de atención farmacéutica al paciente externo con enfermedad inflamatoria intestinal."
    }
  }
];

// Ensayos clínicos en marcha (ClinicalTrials.gov simulados)
export const mockTrials = [
  {
    id: "trial-1",
    phase: "Fase III",
    intervention: "Patritumab Deruxtecan (HER3-DXd)",
    condition: "Cáncer de pulmón no microcítico EGFR mutado resistente",
    endpoint: "Supervivencia Libre de Progresión (SLP)",
    estimatedDate: "Diciembre 2026",
    status: "Activo, reclutando",
    specialty: "Oncología/Hematología",
    relevance: "Alta"
  },
  {
    id: "trial-2",
    phase: "Fase II/III",
    intervention: "Cefiderocol + Fosfomicina IV",
    condition: "Neumonía nosocomial por enterobacterias productoras de carbapenemasas tipo KPC",
    endpoint: "Curación clínica y aclaramiento microbiológico a día 14",
    estimatedDate: "Octubre 2026",
    status: "Activo, reclutando",
    specialty: "Infecciones",
    relevance: "Muy Alta"
  },
  {
    id: "trial-3",
    phase: "Fase III",
    intervention: "Semaglutida 2.4 mg semanal",
    condition: "Prevención secundaria de eventos cardiovasculares en pacientes con insuficiencia cardíaca con FE preservada y obesidad",
    endpoint: "Incidencia de eventos MACE (muerte CV, infarto, ictus) a 2 años",
    estimatedDate: "Marzo 2027",
    status: "Activo, reclutando",
    specialty: "Cardiología",
    relevance: "Media-Alta"
  },
  {
    id: "trial-4",
    phase: "Fase II",
    intervention: "Jeringas prefiltradas estandarizadas de Nivolumab subcutáneo",
    condition: "Optimización de tiempos de espera en hospital de día oncológico",
    endpoint: "Estabilidad microbiológica y satisfacción del paciente",
    estimatedDate: "Septiembre 2026",
    status: "En preparación",
    specialty: "Farmacotecnia",
    relevance: "Media"
  }
];

// Fichas farmacoterapéuticas de consulta rápida
export const mockFichas = [
  {
    id: "ficha-1",
    drug: "Trastuzumab Deruxtecan (Enhertu)",
    category: "Terapias avanzadas / Inmunoconjugados",
    indications: "Cáncer de mama HER2+ metastásico, Cáncer de mama HR+ HER2-Low/Ultralow metastásico, Cáncer gástrico HER2+.",
    posology: "5.4 mg/kg por infusión intravenosa cada 3 semanas. Diluir únicamente en Dextrosa 5%. No agitar.",
    monitoring: "Fracción de eyección del ventrículo izquierdo (FEVI) cada 3-4 meses. Monitorización de función respiratoria por riesgo de EPI. Recuento de neutrófilos basal.",
    frailPatient: "Sin ajuste de dosis inicial en pacientes mayores. Requiere estrecho control del estado de hidratación y soporte antiemético agresivo (riesgo moderado-alto de náuseas)."
  },
  {
    id: "ficha-2",
    drug: "Cefiderocol (Fetcroja)",
    category: "Antimicrobianos / Sideróforos",
    indications: "Infecciones por Gram-negativos aerobios en adultos con opciones limitadas de tratamiento (P. aeruginosa DTR, Acinetobacter baumannii resistente a carbapenémicos, enterobacterias MBL).",
    posology: "2 g cada 8 horas administrados en perfusión intravenosa de 3 horas. Requiere ajuste estricto en insuficiencia renal.",
    monitoring: "Función renal diaria en paciente crítico. Electrolitos (potasio, magnesio) por riesgo de hipopotasemia. Monitorizar signos de hipersensibilidad o convulsiones.",
    frailPatient: "En pacientes ancianos con sarcopenia, utilizar ecuaciones basadas en cistatina C si es posible para calcular el aclaramiento de creatinina real, evitando la sobredosificación."
  },
  {
    id: "ficha-3",
    drug: "Upadacitinib (Rinvoq)",
    category: "Inmunosupresores selectivos / Inhibidores de JAK",
    indications: "Artritis reumatoide, artritis psoriásica, espondilitis anquilosante, dermatitis atópica, colitis ulcerosa, enfermedad de Crohn.",
    posology: "15 mg o 30 mg por vía oral una vez al día, con o sin alimentos. Tragar entero, no triturar.",
    monitoring: "Hemograma completo, enzimas hepáticas y perfil lipídico basal y de forma periódica. Cribado de tuberculosis e hepatitis B antes de iniciar. Signos de infección activa.",
    frailPatient: "Evitar en mayores de 65 años con factores de riesgo cardiovascular o fumadores, salvo ausencia de alternativas. Ajustar a dosis mínima eficaz (15 mg/día) y monitorizar estrictamente eventos trombóticos."
  }
];

// Rutas formativas y autoevaluación (Actualización continuada)
export const mockRutasFormativas = [
  {
    id: "ruta-1",
    specialty: "Oncología/Hematología",
    title: "Nuevos conjugados fármaco-anticuerpo (ADC) en Oncología Sólida",
    progress: 60,
    time: "4 horas",
    modulesCount: 5,
    cases: [
      {
        id: "case-onc-1",
        title: "Caso Clínico: Toxicidad Pulmonar por ADC",
        description: "Paciente de 61 años diagnosticada de cáncer de mama metastásico HR+/HER2-Low en tratamiento con Trastuzumab Deruxtecan. Tras el 4º ciclo, acude a Urgencias refiriendo tos seca persistente de una semana de evolución y disnea leve de esfuerzo (grado 1). En la auscultación presenta crepitantes basales. La saturación de oxígeno en reposo es del 96%.",
        question: "¿Cuál es la conducta inicial más adecuada de acuerdo con los protocolos de seguridad farmacoterapéutica?",
        options: [
          "Suspender temporalmente T-DXd, solicitar un TAC de alta resolución pulmonar, descartar causas infecciosas e iniciar corticoides orales si se confirma neumonitis.",
          "Administrar tratamiento antibiótico empírico con Levofloxacino y mantener la pauta de T-DXd reduciendo la dosis un nivel en el siguiente ciclo.",
          "Continuar el tratamiento sin cambios y pautar un broncodilatador inhalado (salbutamol) a demanda, programando una radiografía de tórax control en 3 meses.",
          "Suspender de forma definitiva el fármaco de inmediato sin necesidad de realizar pruebas de imagen complementarias."
        ],
        correctIndex: 0,
        explanation: "Ante la sospecha de Enfermedad Pulmonar Intersticial (EPI) por T-DXd (incluso grado 1 o asintomática), la primera medida de seguridad es interrumpir temporalmente el tratamiento de forma inmediata, realizar un TAC de alta resolución pulmonar, descartar infección, e instaurar corticoides si se confirma. La demora en esta intervención puede derivar en progresión rápida de la toxicidad pulmonar y desenlace fatal."
      }
    ]
  },
  {
    id: "ruta-2",
    specialty: "Infecciones",
    title: "Optimización de Tratamiento Antimicrobiano Dirigido (PROA)",
    progress: 30,
    time: "6 horas",
    modulesCount: 8,
    cases: [
      {
        id: "case-inf-1",
        title: "Caso Clínico: Selección en P. aeruginosa DTR",
        description: "Paciente de 72 años hospitalizado con sepsis de origen urinario. El antibiograma de los hemocultivos reporta el aislamiento de Pseudomonas aeruginosa resistente a Piperacilina/Tazobactam, Imipenem, Meropenem y Ceftacidima (perfil DTR), pero sensible a Ceftolozano/Tazobactam y Cefiderocol. El paciente presenta un aclaramiento de creatinina de 55 mL/min.",
        question: "¿Qué opción terapéutica es la de primera línea preferente para optimizar la pauta de acuerdo con las guías SEIMC-SEFH?",
        options: [
          "Cefiderocol en perfusión continua para preservar los nuevos betalactámicos.",
          "Ceftolozano/Tazobactam 1.5g (dosis ajustada) cada 8h en perfusión de 4 horas, reservando Cefiderocol para cepas productoras de metalobetalactamasas.",
          "Tratamiento combinado con Colistina IV + Amikacina IV para evitar la aparición de resistencias secundarias.",
          "Ceftacidima en infusión continua a dosis máxima combinada con Ciprofloxacino oral."
        ],
        correctIndex: 1,
        explanation: "De acuerdo con las guías SEIMC-SEFH 2026, para P. aeruginosa con perfil de resistencia difícil de tratar (DTR) no productora de metalobetalactamasas (MBL), Ceftolozano/Tazobactam en monoterapia es la opción preferente de primera línea. Cefiderocol debe reservarse para cepas que presenten metalobetalactamasas o multirresistencia extrema sin otras alternativas, para mitigar la presión de selección de resistencias."
      }
    ]
  },
  {
    id: "ruta-3",
    specialty: "Urgencias",
    title: "Seguridad y Conciliación del Paciente Anciano en Urgencias",
    progress: 85,
    time: "3 horas",
    modulesCount: 4,
    cases: [
      {
        id: "case-urg-1",
        title: "Caso Clínico: Prescripción Inadecuada de Benzodiacepinas",
        description: "Paciente de 83 años dada de alta desde la sala de observación de Urgencias tras un síncope. En su tratamiento habitual constan Lorazepam 2mg por las noches, Enalapril 10mg y Omeprazol 20mg. El informe de alta añade de forma temporal Ibuprofeno 600mg cada 8 horas por dolor lumbar debido a una contusión durante la caída.",
        question: "¿Qué discrepancias o problemas de seguridad basados en los criterios STOPP/START debe detectar el farmacéutico de urgencias?",
        options: [
          "El uso de Lorazepam 2mg es adecuado para su edad y el Ibuprofeno es el analgésico de elección en insuficiencia renal.",
          "Lorazepam a dosis altas (>1mg) es potencialmente inadecuado en ancianos por riesgo de caídas; el uso de AINEs aumenta el riesgo de hemorragia digestiva e insuficiencia renal, y debe proponerse Paracetamol en su lugar.",
          "Debería proponerse añadir una segunda benzodiacepina de vida media larga para controlar la ansiedad secundaria al dolor lumbar.",
          "Ninguna, la prescripción cumple todos los criterios de seguridad al alta."
        ],
        correctIndex: 1,
        explanation: "Según los criterios STOPP, las benzodiacepinas a dosis altas (Lorazepam >1mg/día) son fármacos potencialmente inadecuados en ancianos debido al elevado riesgo de sedación, síncope y caídas. Además, la adición de un AINE (Ibuprofeno 600mg/8h) sin protector renal o cardiovascular adecuado en una paciente de 83 años con caída previa es de alto riesgo de toxicidad. La sustitución por analgésicos más seguros como paracetamol y la revisión a la baja del Lorazepam es la intervención prioritaria."
      }
    ]
  }
];

// Matriz del Mapa de Evidencia (Especialidades vs Niveles)
export const mockEvidenceMap = {
  specialties: [
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
  ],
  levels: ["Sólida", "Emergente", "Incierta"],
  matrix: [
    // [EspecialidadIndex, NivelIndex, CantidadArticulos, Descripcion]
    [0, 0, 8, "Evidencia fase III madura en conjugados anticuerpo-fármaco (ADC)."],
    [0, 1, 4, "Biomarcadores tumorales circulantes y biopsia líquida en selección terapéutica."],
    [0, 2, 2, "Inmunoterapia personalizada basada en vacunas de neoantígenos ARN."],
    [1, 0, 5, "Protocolos de cribado y sepsis en urgencias, escalas de riesgo validadas."],
    [1, 1, 6, "Uso de ecografía a pie de cama por farmacéuticos para control farmacoterapéutico."],
    [1, 2, 3, "Monitiorización de niveles plasmáticos rápida en el box de reanimación."],
    [2, 0, 12, "Acortamiento de DAPT e inhibidores de PCSK9 tras infarto agudo de miocardio."],
    [2, 1, 5, "Nuevos fármacos para amiloidosis cardíaca e insuficiencia cardíaca con FE conservada."],
    [2, 2, 2, "Edición génica in vivo CRISPR para hipercolesterolemia familiar."],
    [3, 0, 6, "Alertas de seguridad de inhibidores de JAK y posicionamiento de biológicos subcutáneos."],
    [3, 1, 4, "Terapia celular CAR-T en lupus eritematoso sistémico refractario."],
    [3, 2, 3, "Tolerógenos específicos de antígeno en artritis reumatoide precoz."],
    [4, 0, 10, "Uso de nuevos betalactámicos/inhibidores guiado por antibiograma rápido y PROA."],
    [4, 1, 7, "Modelos PK/PD Bayesianos integrados en la historia clínica electrónica."],
    [4, 2, 4, "Efecto de la microbiota fecal en la erradicación de bacterias multirresistentes."],
    [5, 0, 9, "Programas de conciliación activa y transiciones asistenciales inter-niveles."],
    [5, 1, 5, "Herramientas de inteligencia artificial para validación automatizada de recetas."],
    [5, 2, 1, "Efectividad clínica de la impresión 3D de medicamentos personalizados."],
    [6, 0, 4, "Estudios de estabilidad física y química validados de biosimilares por HPLC."],
    [6, 1, 3, "Preparación estandarizada en lotes en cabinas ISO Clase 5."],
    [6, 2, 2, "Estabilidad a largo plazo de mezclas de nutrición parenteral con lípidos complejos."],
    [7, 0, 5, "Estudios observacionales de efectividad clínica en enfermedades autoinmunes sistémicas."],
    [7, 1, 3, "Tratamientos biológicos precoces en vasculitis sistémicas y sarcoidosis."],
    [7, 2, 1, "Papel de los inmunomoduladores orales en el síndrome post-COVID."],
    [8, 0, 6, "Triple terapia fija en EPOC grave con reducción demostrada de exacerbaciones."],
    [8, 1, 4, "Monoclonales en asma grave recalcitrante (anti-IL5 y anti-TSLP)."],
    [8, 2, 2, "Tratamientos antifibróticos inhalados en fibrosis pulmonar idiopática."],
    [9, 0, 8, "Sistemas de envasado DataMatrix y conciliación en transiciones asistenciales."],
    [9, 1, 4, "Inteligencia artificial para detección de interacciones críticas en prescripción."],
    [9, 2, 2, "Prevalencia de errores en mezclas complejas no centralizadas."],
    [10, 0, 4, "Modelos farmacoeconómicos de coste-utilidad para terapias avanzadas CAR-T."],
    [10, 1, 5, "Esquemas de riesgo compartido basados en resultados de salud reales."],
    [10, 2, 3, "Impacto del desabastecimiento de fármacos de bajo coste en la eficiencia global."],
    [11, 0, 5, "Tablas de compatibilidad en Y validadas para accesos vasculares de luz única."],
    [11, 1, 3, "Modelos PK bayesianos para dosificación de antibióticos en neonatos prematuros."],
    [11, 2, 2, "Uso fuera de indicación (off-label) de biológicos en enfermedades raras pediátricas."],
    [12, 0, 7, "Perfusión continua de betalactámicos en shock séptico guiada por TDM en UCI."],
    [12, 1, 4, "Algoritmos Bayesianos integrados en tiempo real para antibióticoterapia empírica."],
    [12, 2, 3, "Uso de absorbedores de citoquinas en sepsis hiperinflamatoria refractaria."],
    [13, 0, 5, "Monitoreo sérico (TDM) de clozapina y antipsicóticos de segunda generación."],
    [13, 1, 3, "Eficacia de formulaciones de liberación prolongada inyectable en psicosis precoz."],
    [13, 2, 2, "Efectividad a largo plazo de la esketamina intranasal en depresión refractaria."],
    [14, 0, 9, "Desprescripción guiada por criterios STOPP/START en ancianos frágiles."],
    [14, 1, 5, "Efecto del cese de estatinas en prevención primaria para mayores de 80 años."],
    [14, 2, 1, "Polimedicación en demencia avanzada y su repercusión en la calidad de vida."]
  ]
};

// Resumen semanal autogenerado
export const mockWeeklySummary = {
  dateRange: "20 al 26 de Mayo, 2026",
  essentials: [
    "Aprobación por la AEMPS de un nuevo esquema de inmunoterapia para cáncer de pulmón metastásico.",
    "Resultados del estudio multicéntrico sobre validación por IA de interacciones en el paciente anciano.",
    "Guía clínica de la ESC sobre el control intensivo de la presión arterial en diabéticos.",
    "Alerta de seguridad sobre toxicidad hepática por nuevos antineoplásicos orales.",
    "Actualización del consenso SEIMC sobre profilaxis de infección fúngica en trasplante hematopoyético."
  ],
  practiceChanges: [
    "Acortar la doble antiagregación plaquetaria (DAPT) a un máximo de 3 meses en pacientes con alto riesgo de sangrado.",
    "Suspender o evitar el inicio de inhibidores de JAK en pacientes con factores de riesgo cardiovascular o tabaquismo activo.",
    "Implementar la toma de muestras PK/PD a las 4 horas del inicio de betalactámicos en la UCI para ajuste de dosis."
  ],
  controversy: "El uso de Cefiderocol en monoterapia versus terapia combinada para Acinetobacter baumannii resistente a carbapenémicos sigue dividiendo a las guías internacionales, con resultados de mortalidad contradictorios en subgrupos específicos.",
  sessionProposal: "Sesión conjunta del Servicio de Urgencias y Farmacia Hospitalaria para debatir e implementar la escala de riesgo CRISTAL de conciliación al alta de pacientes frágiles, basada en los resultados del programa CONCILIA-URG."
};

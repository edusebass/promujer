export interface ServicioDescripcion {
  servicio: string;
  imgBanner: string;
  questions: { question: string; answer: string }[];
  urlVideo: string;
}

// Ginecología
export const SERVICIOS_GINECOLOGIA: Record<string, ServicioDescripcion> = {
  "sindrome-ovario-poliquistico": {
    servicio: "Síndrome de ovario poliquístico (SOP)",
    imgBanner: "https://static.vecteezy.com/system/resources/previews/010/328/397/non_2x/polycystic-ovary-syndrome-endocrinology-color-icon-illustration-vector.jpg",
    questions: [
      {
        question: "¿Qué es el SOP?",
        answer: "El síndrome de ovario poliquístico es un trastorno hormonal frecuente en mujeres en edad reproductiva, que puede causar periodos menstruales irregulares, exceso de vello y dificultad para quedar embarazada.",
      },
      {
        question: "¿Cuáles son los síntomas del SOP?",
        answer: "Síntomas comunes incluyen menstruaciones irregulares, acné, aumento de peso, exceso de vello corporal y dificultad para quedar embarazada.",
      },
      {
        question: "¿Cómo se trata el SOP?",
        answer: "El tratamiento puede incluir cambios en el estilo de vida, medicamentos para regular el ciclo menstrual y, en algunos casos, tratamientos de fertilidad.",
      },
    ],
    urlVideo: "IoO35gZfzSA",
  },
  endometriosis: {
    servicio: "Endometriosis",
    imgBanner: "https://thumbs.dreamstime.com/b/icono-de-l%C3%ADnea-color-endometriosis-problema-ginecol%C3%B3gico-pictograma-para-promoci%C3%B3n-aplicaciones-m%C3%B3viles-p%C3%A1ginas-web-259590692.jpg",
    questions: [
      {
        question: "¿Qué es la endometriosis?",
        answer: "Es una enfermedad en la que el tejido similar al que recubre el interior del útero crece fuera de él, causando dolor y, a veces, infertilidad.",
      },
      {
        question: "¿Cuáles son los síntomas?",
        answer: "Dolor pélvico intenso, menstruaciones dolorosas, dolor durante las relaciones sexuales y, en algunos casos, problemas de fertilidad.",
      },
      {
        question: "¿Cómo se trata?",
        answer: "El tratamiento puede incluir medicamentos para el dolor, terapia hormonal y, en casos graves, cirugía.",
      },
    ],
    urlVideo: "Zuro6igibUw",
  },
  "miomas-uterinos": {
    servicio: "Miomas uterinos",
    imgBanner: "https://st.depositphotos.com/16244452/61637/v/450/depositphotos_616375742-stock-illustration-infectious-diseases-uterus-color-line.jpg",
    questions: [
      {
        question: "¿Qué son los miomas uterinos?",
        answer: "Son tumores benignos que se desarrollan en el útero y pueden causar sangrado abundante, dolor pélvico y problemas reproductivos.",
      },
      {
        question: "¿Cuáles son los síntomas?",
        answer: "Sangrado menstrual abundante, dolor pélvico, presión en la vejiga y, en algunos casos, infertilidad.",
      },
      {
        question: "¿Cómo se tratan?",
        answer: "El tratamiento depende del tamaño y los síntomas, e incluye medicamentos, procedimientos mínimamente invasivos o cirugía.",
      },
    ],
    urlVideo: "Hh578vkrHVQ",
  },
  "infecciones-vaginales": {
    servicio: "Infecciones vaginales recurrentes",
    imgBanner: "https://static.vecteezy.com/system/resources/previews/050/127/389/non_2x/vaginal-infections-woman-disease-color-icon-illustration-vector.jpg",
    questions: [
      {
        question: "¿Qué son las infecciones vaginales recurrentes?",
        answer: "Son infecciones que afectan la vagina y que se presentan varias veces al año, causando molestias como picazón, ardor y flujo anormal.",
      },
      {
        question: "¿Cuáles son los síntomas?",
        answer: "Picazón, ardor, enrojecimiento, flujo vaginal anormal y mal olor.",
      },
      {
        question: "¿Cómo se previenen?",
        answer: "Mantener una buena higiene íntima, evitar duchas vaginales y usar ropa interior de algodón.",
      },
    ],
    urlVideo: "xz8TSmb8mJQ",
  },
  "dolor-pelvico-cronico": {
    servicio: "Dolor pélvico crónico",
    imgBanner: "https://static.vecteezy.com/system/resources/previews/050/127/389/non_2x/vaginal-infections-woman-disease-color-icon-illustration-vector.jpg",
    questions: [
      {
        question: "¿Qué es el dolor pélvico crónico?",
        answer: "Es un dolor en la zona baja del abdomen que dura más de seis meses y puede estar relacionado con varias condiciones ginecológicas.",
      },
      {
        question: "¿Cuáles son las causas?",
        answer: "Endometriosis, infecciones, miomas, problemas digestivos o urinarios.",
      },
      {
        question: "¿Cómo se trata?",
        answer: "El tratamiento depende de la causa e incluye medicamentos, fisioterapia y, en algunos casos, cirugía.",
      },
    ],
    urlVideo: "EpjhihZQQMI",
  },
  "trastornos-menstruales": {
    servicio: "Trastornos menstruales",
    imgBanner: "https://static.vecteezy.com/system/resources/previews/003/855/071/non_2x/menstruation-color-icon-menstrual-bleeding-vaginal-discharge-female-health-disorder-isolated-illustration-vector.jpg",
    questions: [
      {
        question: "¿Qué son los trastornos menstruales?",
        answer: "Son alteraciones en la frecuencia, duración o cantidad del sangrado menstrual.",
      },
      {
        question: "¿Cuáles son los síntomas?",
        answer: "Ciclos irregulares, sangrado abundante o escaso, dolor intenso.",
      },
      {
        question: "¿Cómo se tratan?",
        answer: "Con medicamentos hormonales, cambios en el estilo de vida y tratamiento de la causa subyacente.",
      },
    ],
    urlVideo: "Y3300MyP_Gc",
  },
};

// Obstetricia
export const SERVICIOS_OBSTETRICIA: Record<string, ServicioDescripcion> = {
  "control-prenatal": {
    servicio: "Control prenatal",
    imgBanner: "https://cdn-icons-png.flaticon.com/512/8123/8123645.png",
    questions: [
      {
        question: "¿Por qué es importante el control prenatal?",
        answer: "Permite monitorear la salud de la madre y el bebé, detectar complicaciones y brindar educación sobre el embarazo.",
      },
      {
        question: "¿Con qué frecuencia debo acudir?",
        answer: "Generalmente una vez al mes durante los primeros seis meses, luego cada dos semanas y semanalmente al final del embarazo.",
      },
      {
        question: "¿Qué incluye el control prenatal?",
        answer: "Exámenes físicos, ecografías, análisis de sangre y orina, y asesoría nutricional.",
      },
    ],
    urlVideo: "6DesoMNKY1g",
  },
  "diabetes-gestacional": {
    servicio: "Diabetes gestacional",
    imgBanner: "https://cdn-icons-png.flaticon.com/512/6450/6450073.png",
    questions: [
      {
        question: "¿Qué es la diabetes gestacional?",
        answer: "Es un tipo de diabetes que aparece durante el embarazo y suele desaparecer después del parto.",
      },
      {
        question: "¿Cuáles son los riesgos?",
        answer: "Puede causar complicaciones para la madre y el bebé, como parto prematuro y peso elevado al nacer.",
      },
      {
        question: "¿Cómo se controla?",
        answer: "Con dieta, ejercicio y, en algunos casos, medicamentos.",
      },
    ],
    urlVideo: "eoex9LHNLrs",
  },
  "preeclampsia": {
    servicio: "Preeclampsia",
    imgBanner: "https://www.stop-pe.org/wp-content/uploads/2017/11/hipertension_Mesa-de-trabajo-1.png",
    questions: [
      {
        question: "¿Qué es la preeclampsia?",
        answer: "Es una complicación del embarazo caracterizada por presión arterial alta y daño en órganos como el hígado y los riñones.",
      },
      {
        question: "¿Cuáles son los síntomas?",
        answer: "Presión alta, hinchazón, dolor de cabeza, visión borrosa.",
      },
      {
        question: "¿Cómo se trata?",
        answer: "Con control médico estricto, reposo y, en casos graves, parto anticipado.",
      },
    ],
    urlVideo: "lpAcEyjtqDM",
  },
  "parto-prematuro": {
    servicio: "Parto prematuro",
    imgBanner: "https://static.vecteezy.com/system/resources/previews/005/350/518/non_2x/premature-birth-rgb-color-icon-early-childbirth-mother-with-health-problem-delivery-preterm-baby-serious-health-issues-risk-isolated-illustration-simple-filled-line-drawing-vector.jpg",
    questions: [
      {
        question: "¿Qué es el parto prematuro?",
        answer: "Es el nacimiento que ocurre antes de las 37 semanas de gestación.",
      },
      {
        question: "¿Cuáles son los factores de riesgo?",
        answer: "Embarazos múltiples, infecciones, antecedentes de parto prematuro.",
      },
      {
        question: "¿Cómo se previene?",
        answer: "Control prenatal adecuado y tratamiento de factores de riesgo.",
      },
    ],
    urlVideo: "LKQ-9h-G4DA",
  },
  "cesarea-recuperacion": {
    servicio: "Cesárea y recuperación",
    imgBanner: "https://cdn-icons-png.flaticon.com/512/5617/5617665.png",
    questions: [
      {
        question: "¿Qué es una cesárea?",
        answer: "Es una cirugía para extraer al bebé a través de una incisión en el abdomen y el útero.",
      },
      {
        question: "¿Cómo es la recuperación?",
        answer: "Incluye reposo, control del dolor y cuidados de la herida.",
      },
      {
        question: "¿Cuándo consultar al médico?",
        answer: "Si hay fiebre, dolor intenso, sangrado abundante o signos de infección.",
      },
    ],
    urlVideo: "jFdfltCfOA8",
  },
  "cuidados-postparto": {
    servicio: "Cuidados postparto",
    imgBanner: "https://static.vecteezy.com/system/resources/previews/033/062/441/non_2x/postpartum-care-gynecologist-color-icon-illustration-vector.jpg",
    questions: [
      {
        question: "¿Qué cuidados debo tener después del parto?",
        answer: "Descanso, alimentación saludable, control de sangrado y apoyo en la lactancia.",
      },
      {
        question: "¿Cuándo retomar actividades normales?",
        answer: "Depende del tipo de parto y recuperación, pero generalmente después de 6 semanas.",
      },
      {
        question: "¿Qué señales de alarma debo vigilar?",
        answer: "Fiebre, dolor intenso, sangrado abundante o dificultad para amamantar.",
      },
    ],
    urlVideo: "emTzmnEFprY",
  },
};

// Otros
export const SERVICIOS_OTROS: Record<string, ServicioDescripcion> = {
  "planificacion-familiar": {
    servicio: "Anticoncepción y planificación familiar",
    imgBanner: "https://static.vecteezy.com/system/resources/previews/033/062/441/non_2x/postpartum-care-gynecologist-color-icon-illustration-vector.jpg",
    questions: [
      {
        question: "¿Qué es la planificación familiar?",
        answer: "Es el conjunto de prácticas que ayudan a las personas a decidir el número y el momento de tener hijos.",
      },
      {
        question: "¿Qué métodos existen?",
        answer: "Métodos hormonales, de barrera, naturales y quirúrgicos.",
      },
      {
        question: "¿Por qué es importante?",
        answer: "Permite prevenir embarazos no deseados y planificar la familia de acuerdo a las necesidades de cada persona.",
      },
    ],
    urlVideo: "2Sv20zNo5n8",
  },
  "menopausia": {
    servicio: "Menopausia y terapia hormonal",
    imgBanner: "https://static.vecteezy.com/system/resources/previews/033/062/441/non_2x/postpartum-care-gynecologist-color-icon-illustration-vector.jpg",
    questions: [
      {
        question: "¿Qué es la menopausia?",
        answer: "Es el cese permanente de la menstruación, generalmente entre los 45 y 55 años.",
      },
      {
        question: "¿Cuáles son los síntomas?",
        answer: "Sofocos, sudoración, insomnio, cambios de humor y sequedad vaginal.",
      },
      {
        question: "¿Qué es la terapia hormonal?",
        answer: "Es un tratamiento para aliviar los síntomas de la menopausia mediante hormonas.",
      },
    ],
    urlVideo: "uKvydd-1LT8",
  },
  "cancer-ginecologico": {
    servicio: "Cáncer ginecológico",
    imgBanner: "https://static.vecteezy.com/system/resources/previews/033/062/441/non_2x/postpartum-care-gynecologist-color-icon-illustration-vector.jpg",
    questions: [
      {
        question: "¿Qué es el cáncer ginecológico?",
        answer: "Son los cánceres que afectan los órganos reproductores femeninos, como el útero, ovarios y cuello uterino.",
      },
      {
        question: "¿Cuáles son los síntomas?",
        answer: "Sangrado anormal, dolor pélvico, pérdida de peso inexplicada.",
      },
      {
        question: "¿Cómo se previene?",
        answer: "Con chequeos regulares, vacunación contra el VPH y hábitos saludables.",
      },
    ],
    urlVideo: "-0JZ-S5Amis",
  },
  "salud-sexual": {
    servicio: "Salud sexual femenina",
    imgBanner: "https://static.vecteezy.com/system/resources/previews/033/062/441/non_2x/postpartum-care-gynecologist-color-icon-illustration-vector.jpg",
    questions: [
      {
        question: "¿Qué es la salud sexual femenina?",
        answer: "Es el bienestar físico, emocional y social relacionado con la sexualidad.",
      },
      {
        question: "¿Por qué es importante?",
        answer: "Permite disfrutar de relaciones satisfactorias y prevenir enfermedades de transmisión sexual.",
      },
      {
        question: "¿Cómo se cuida?",
        answer: "Con educación, comunicación, uso de métodos de protección y chequeos médicos.",
      },
    ],
    urlVideo: "LKIaEeRQ2N8",
  },
  "chequeos-ginecologicos": {
    servicio: "Chequeos ginecológicos anuales",
    imgBanner: "https://static.vecteezy.com/system/resources/previews/033/062/441/non_2x/postpartum-care-gynecologist-color-icon-illustration-vector.jpg",
    questions: [
      {
        question: "¿Por qué hacer chequeos ginecológicos anuales?",
        answer: "Permiten detectar enfermedades a tiempo y mantener la salud reproductiva.",
      },
      {
        question: "¿Qué incluyen?",
        answer: "Examen físico, citología, ecografía y asesoría personalizada.",
      },
      {
        question: "¿A qué edad debo empezar?",
        answer: "Desde el inicio de la vida sexual activa o a partir de los 21 años.",
      },
    ],
    urlVideo: "oBnYBTIlZzY",
  },
};

export const SERVICIOS_ECOGRAFIAS: Record<string, ServicioDescripcion> = {
  cromosomica: {
    servicio: "Ecografía cromosómica",
    imgBanner: "https://cdn-icons-png.flaticon.com/512/8123/8123645.png",
    questions: [
      {
        question: "¿Para qué sirve la ecografía cromosómica?",
        answer:
          "Permite evaluar la presencia de marcadores asociados a alteraciones cromosómicas en el feto, ayudando en la detección temprana de síndromes genéticos.",
      },
      {
        question: "¿En qué semana del embarazo se recomienda realizarla?",
        answer:
          "Generalmente se realiza entre las semanas 11 y 14 de gestación para obtener resultados óptimos.",
      },
      {
        question: "¿Qué ventajas ofrece frente a otros estudios?",
        answer:
          "Es un método no invasivo, seguro y proporciona información valiosa para la toma de decisiones tempranas en el embarazo.",
      },
      {
        question: "¿Por qué elegir nuestra clínica para tu ecografía cromosómica?",
        answer:
          "Contamos con tecnología de última generación y especialistas en diagnóstico prenatal para brindarte tranquilidad y confianza.",
      },
    ],
    urlVideo: "5FiHbJX_crg",
  },
  anatomica: {
    servicio: "Ecografía anatómica",
    imgBanner: "https://cdn-icons-png.flaticon.com/512/8123/8123645.png",
    questions: [
      {
        question: "¿Qué evalúa la ecografía anatómica?",
        answer:
          "Permite un estudio detallado de la anatomía fetal para identificar posibles malformaciones estructurales y valorar el desarrollo de los órganos del bebé.",
      },
      {
        question: "¿Cuándo se recomienda realizarla?",
        answer:
          "Se recomienda entre las semanas 18 y 22 de gestación para una evaluación completa del desarrollo fetal.",
      },
      {
        question: "¿Qué tipo de anomalías puede detectar?",
        answer:
          "Puede identificar alteraciones en el corazón, cerebro, columna, extremidades y otros órganos vitales.",
      },
      {
        question: "¿Por qué confiar en nuestro equipo para tu ecografía anatómica?",
        answer:
          "Nuestros profesionales están altamente capacitados y utilizan equipos avanzados para garantizar diagnósticos precisos.",
      },
    ],
    urlVideo: "DuLHeUyCHug",
  },
  "doppler-fetal": {
    servicio: "Doppler Fetal",
    imgBanner: "https://cdn-icons-png.flaticon.com/512/8123/8123645.png",
    questions: [
      {
        question: "¿Qué es el Doppler Fetal?",
        answer:
          "Evalúa el flujo sanguíneo en los vasos fetales y placentarios, permitiendo detectar alteraciones en la circulación que puedan afectar el bienestar del feto.",
      },
      {
        question: "¿En qué casos se recomienda realizar un Doppler Fetal?",
        answer:
          "Se indica en embarazos de alto riesgo, sospecha de restricción de crecimiento intrauterino o alteraciones en el líquido amniótico.",
      },
      {
        question: "¿Qué beneficios ofrece este estudio?",
        answer:
          "Permite un monitoreo preciso del bienestar fetal y ayuda a tomar decisiones oportunas para la salud del bebé.",
      },
      {
        question: "¿Por qué elegirnos para tu Doppler Fetal?",
        answer:
          "Ofrecemos atención personalizada y tecnología de vanguardia para garantizar la seguridad y tranquilidad de tu embarazo.",
      },
    ],
    urlVideo: "yGlP6mraFsI",
  },
  ginecologica: {
    servicio: "Ecografía ginecológica",
    imgBanner: "https://cdn-icons-png.flaticon.com/512/8123/8123645.png",
    questions: [
      {
        question: "¿Para qué sirve la ecografía ginecológica?",
        answer:
          "Explora los órganos reproductores femeninos para el diagnóstico de patologías como miomas, quistes o alteraciones endometriales.",
      },
      {
        question: "¿Es dolorosa la ecografía ginecológica?",
        answer:
          "Es un procedimiento seguro, rápido y generalmente indoloro, realizado por especialistas en salud femenina.",
      },
      {
        question: "¿Qué ventajas tiene realizarse este estudio regularmente?",
        answer:
          "Permite la detección temprana de enfermedades y el seguimiento adecuado de tratamientos ginecológicos.",
      },
      {
        question: "¿Por qué confiar en nuestro centro para tu ecografía ginecológica?",
        answer:
          "Brindamos un ambiente cómodo, privacidad y atención profesional para tu tranquilidad y bienestar.",
      },
    ],
    urlVideo: "m8Rm7VEIGRY",
  },
  obstetrica: {
    servicio: "Ecografía obstétrica",
    imgBanner: "https://cdn-icons-png.flaticon.com/512/8123/8123645.png",
    questions: [
      {
        question: "¿Qué evalúa la ecografía obstétrica?",
        answer:
          "Controla y da seguimiento al embarazo, valorando el crecimiento fetal, cantidad de líquido amniótico y localización placentaria.",
      },
      {
        question: "¿Con qué frecuencia se recomienda realizarla?",
        answer:
          "Se recomienda en cada trimestre del embarazo para un monitoreo integral de la salud materno-fetal.",
      },
      {
        question: "¿Qué información adicional puede aportar?",
        answer:
          "Permite detectar posibles complicaciones y planificar intervenciones médicas si es necesario.",
      },
      {
        question: "¿Por qué elegirnos para tu ecografía obstétrica?",
        answer:
          "Nuestro equipo te acompaña en cada etapa del embarazo con calidez, experiencia y tecnología avanzada.",
      },
    ],
    urlVideo: "drNJdvBYrWs",
  },
  "4d-hd-live": {
    servicio: "Ecografía 4D HD Live",
    imgBanner: "https://cdn-icons-png.flaticon.com/512/8123/8123645.png",
    questions: [
      {
        question: "¿Qué es la ecografía 4D HD Live?",
        answer:
          "Tecnología avanzada que permite visualizar imágenes en tiempo real y en alta definición del feto, mostrando movimientos y rasgos faciales con gran detalle.",
      },
      {
        question: "¿Qué ventajas ofrece la ecografía 4D HD Live?",
        answer:
          "Ofrece una experiencia única y emocional para los padres, permitiendo ver al bebé en movimiento antes del nacimiento.",
      },
      {
        question: "¿Es segura para el bebé y la madre?",
        answer:
          "Sí, es un procedimiento no invasivo y seguro, realizado bajo estrictos estándares de calidad.",
      },
      {
        question: "¿Por qué realizar tu ecografía 4D HD Live con nosotros?",
        answer:
          "Contamos con equipos de última generación y personal especializado para brindarte imágenes inolvidables y precisas.",
      },
    ],
    urlVideo: "mzR7lJQ-V0g",
  },
};
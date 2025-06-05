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
    urlVideo: "dQw4w9WgXcQ",
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
    urlVideo: "Qw4w9WgXcQd",
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
    urlVideo: "w9WgXcQdQw4",
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
    urlVideo: "XcQdQw4w9Wg",
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
    urlVideo: "9WgXcQdQw4w",
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
    urlVideo: "gXcQdQw4w9W",
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
    urlVideo: "aBcDeFgHiJk",
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
    urlVideo: "bCdEfGhIjKl",
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
    urlVideo: "cDeFgHiJkLm",
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
    urlVideo: "dEfGhIjKlMn",
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
    urlVideo: "eFgHiJkLmNo",
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
    urlVideo: "fGhIjKlMnOp",
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
    urlVideo: "gHiJkLmNoPq",
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
    urlVideo: "hIjKlMnOpQr",
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
    urlVideo: "iJkLmNoPqRs",
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
    urlVideo: "jKlMnOpQrSt",
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
    urlVideo: "kLmNoPqRsTu",
  },
};
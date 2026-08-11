export type Step = {
  num: number
  titulo: string
  subtitulo: string
  placeholder: string
  /* Tailwind gradient classes used as the level color */
  gradient: string
  glow: string
}

export const STEPS: Step[] = [
  {
    num: 1,
    titulo: "Mis Pilares y Valores",
    subtitulo: "¿Qué es lo no negociable para ti?",
    placeholder: "Ej: Honestidad, tiempo con la familia, aprender siempre...",
    gradient: "from-rose-500 to-pink-500",
    glow: "shadow-rose-500/20",
  },
  {
    num: 2,
    titulo: "Aprendizajes Clave",
    subtitulo: "Habilidades del colegio que te servirán",
    placeholder: "Ej: Trabajo en equipo, redacción, pensamiento crítico...",
    gradient: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/20",
  },
  {
    num: 3,
    titulo: "Fortalezas y Talentos",
    subtitulo: "¿En qué destacas de forma natural?",
    placeholder: "Ej: Comunicar ideas, resolver problemas, liderar...",
    gradient: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
  },
  {
    num: 4,
    titulo: "Ruta y Opciones de Carrera",
    subtitulo: "¿Qué alternativas estás evaluando?",
    placeholder: "Ej: Ingeniería, un año sabático, técnico en diseño...",
    gradient: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/20",
  },
  {
    num: 5,
    titulo: "Visión de Futuro",
    subtitulo: "¿Cómo te proyectas a mediano/largo plazo?",
    placeholder: "Ej: Trabajar en lo que amo, viajar, tener mi propio proyecto...",
    gradient: "from-indigo-500 to-purple-600",
    glow: "shadow-indigo-500/20",
  },
]

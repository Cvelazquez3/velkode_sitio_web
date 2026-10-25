/**
 * VELKODE // BRAND SYSTEM & CONSULTANCY CORE CONSTANTS
 * "See it. Build it." — Code with vision.
 */

export const BRAND = {
  name: "Velkode",
  slogan: "See it. Build it.",
  tagline: "Code with vision.",
  description:
    "Desarrollo de sitios web y software a la medida —web, escritorio y plataformas empresariales— para negocios que buscan calidad visual, seriedad técnica y soluciones prácticas adaptadas a su operación.",
  email: "velkode.contacto@gmail.com",
} as const;

export const PILLARS = [
  {
    number: "01",
    subtitle: "Validación por Fases",
    title: "Avances continuos",
    description:
      "Planificamos avances periódicos y demostraciones según la escala de cada proyecto, permitiéndote evaluar el progreso real de manera clara y ordenada.",
  },
  {
    number: "02",
    subtitle: "Claridad total",
    title: "Rumbo definido",
    description:
      "Analizamos las necesidades de tu empresa antes de iniciar el desarrollo. Construimos soluciones funcionales para tu operación, sin funciones de relleno ni complejidades innecesarias.",
  },
  {
    number: "03",
    subtitle: "Calidad y estabilidad",
    title: "Software bien hecho",
    description:
      "Estructura limpia, modular y confiable. Diseñamos sistemas estables (web o de escritorio) preparados para soportar la carga operativa y adaptarse al crecimiento de tu empresa.",
  },
  {
    number: "04",
    subtitle: "Cotización Transparente",
    title: "Alcance definido",
    description:
      "Evaluamos requerimientos y alcances para establecer una cotización clara antes de comenzar cada etapa, manteniendo una comunicación seria y profesional en todo momento.",
  },
] as const;

export const SERVICES = [
  {
    id: "web",
    badge: "Desarrollo Web",
    title: "Sitios Web & Experiencias Digitales",
    description:
      "Páginas corporativas y plataformas web diseñadas exclusivamente para tu empresa. Rápidas, atractivas, optimizadas para posicionamiento en Google y pensadas para transmitir seriedad y convertir visitas en clientes.",
    highlights: [
      "Diseño profesional adaptado a tu identidad corporativa",
      "Velocidad de carga optimizada para celulares y computadoras",
      "Estructura clara y navegación intuitiva",
      "Preparado para que tus clientes te encuentren en Google",
    ],
  },
  {
    id: "software",
    badge: "Software a Medida",
    title: "Software a la Medida (Web y Escritorio)",
    description:
      "Desarrollo de aplicaciones especializadas para optimizar la operación de tu negocio, ya sean plataformas web en la nube o software de escritorio para Windows y macOS. Herramientas diseñadas para automatizar procesos y centralizar tu información.",
    highlights: [
      "Aplicaciones de escritorio (Windows / macOS) y plataformas web",
      "Sistemas de gestión operativa, inventarios y control interno",
      "Conexión con tus sistemas actuales, reportes y bases de datos",
      "Enfoque en estabilidad, facilidad de uso y desempeño diario",
    ],
  },
  {
    id: "architecture",
    badge: "Acompañamiento Digital",
    title: "Consultoría & Asesoría Estratégica",
    description:
      "Orientación honesta y clara para tomar decisiones informadas antes de realizar inversiones. Revisamos tus sistemas actuales, evaluamos alternativas viables y definimos un plan realista para tu negocio.",
    highlights: [
      "Diagnóstico de requerimientos, velocidad y estabilidad",
      "Plan de modernización paso a paso por etapas",
      "Recomendación clara de la mejor solución para tu presupuesto",
      "Acompañamiento cercano durante todo el proceso",
    ],
  },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Entender",
    description:
      "Analizamos las necesidades de tu empresa, el tipo de solución requerida (web, escritorio o sistema interno) y los objetivos operativos antes de cotizar.",
  },
  {
    step: "02",
    title: "Planificar",
    description:
      "Definimos el alcance técnico, la arquitectura adecuada, los requerimientos clave y una propuesta comercial clara por fases.",
  },
  {
    step: "03",
    title: "Construir",
    description:
      "Desarrollamos con revisiones y demostraciones periódicas acordadas, validando el funcionamiento de cada módulo según el cronograma de trabajo.",
  },
  {
    step: "04",
    title: "Implementar",
    description:
      "Realizamos pruebas, despliegue o instalación en tu entorno de trabajo, entregando la solución lista para operar con soporte y acompañamiento.",
  },
] as const;

export const FAQS = [
  {
    question: "¿Qué tipo de software desarrollan?",
    answer:
      "Desarrollamos tanto sitios y plataformas web como aplicaciones de escritorio para entornos corporativos (Windows, macOS o multiplataforma), además de herramientas internas de gestión y bases de datos a la medida.",
  },
  {
    question: "¿Cómo se definen los costos y presupuestos?",
    answer:
      "Elaboramos cotizaciones personalizadas basadas en el alcance, la complejidad técnica y los módulos requeridos. Se establecen acuerdos claros por fases o proyecto global antes de iniciar.",
  },
  {
    question: "¿Cómo se coordinan las revisiones y avances?",
    answer:
      "Cada proyecto tiene su propia dinámica y escala. Al planificar el cronograma, establecemos fechas de revisión y demostraciones periódicas para que puedas evaluar el progreso de manera cómoda y continua.",
  },
  {
    question: "¿Cómo se manejan los accesos y entregables al finalizar?",
    answer:
      "Al concluir el proyecto conforme a los términos acordados, se proporciona el software implementado, ejecutables o accesos correspondientes, junto con la documentación técnica básica para su operación.",
  },
] as const;

export const NAV_LINKS = [
  { label: "Nuestra Base", href: "#pillars" },
  { label: "El Estándar", href: "#vision-code" },
  { label: "Servicios", href: "#services" },
  { label: "Proceso", href: "#process" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contact" },
] as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/share/1DefZCsrf8/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/velkode?mdxt=b2E5MmJua2R5Z203",
  linkedin: "https://linkedin.com/company/velkode",
} as const;

/**
 * VELKODE // CINEMATIC NOIR & NORDIC CYAN PALETTE
 * Tonos extraídos de la identidad atmosférica de marca.
 */
export const VELKODE_PALETTE = {
  // ── 01. Profundidad & Vacío Espacial ──
  obsidian: {
    hex: "#010508",
    rgb: "rgb(1, 5, 8)",
    name: "Obsidian Noir",
    role: "Fondo absoluto, vacío espacial base",
  },
  midnight: {
    hex: "#06090E",
    rgb: "rgb(6, 9, 14)",
    name: "Midnight Abyss",
    role: "Fondo ambiental principal y sombras profundas",
  },
  petrolDeep: {
    hex: "#081319",
    rgb: "rgb(8, 19, 25)",
    name: "Deep Petrol",
    role: "Transición oscura entre vacío y bruma",
  },

  // ── 02. Superficies y Contenedores ──
  petrolSurface: {
    hex: "#182028",
    rgb: "rgb(24, 32, 40)",
    name: "Petrol Slate Dark",
    role: "Superficies de tarjetas, paneles y contenedores",
  },
  petrolBorder: {
    hex: "#25333D",
    rgb: "rgb(37, 51, 61)",
    name: "Petrol Slate Medium",
    role: "Bordes sutiles, divisores y estados interactivos",
  },

  // ── 03. Bruma Nórdica y Tonos Medios ──
  oceanicSlate: {
    hex: "#2B4C60",
    rgb: "rgb(43, 76, 96)",
    name: "Nordic Oceanic Teal",
    role: "Gradientes intermedios y sombras coloreadas",
  },
  steelCyan: {
    hex: "#40626B",
    rgb: "rgb(64, 98, 107)",
    name: "Muted Steel Cyan",
    role: "Bruma ambiental fría y acentos tenues",
  },

  // ── 04. Picos de Luz Atmosférica y Resplandor ──
  cyanMist: {
    hex: "#4B7784",
    rgb: "rgb(75, 119, 132)",
    name: "Atmospheric Cyan Mist",
    role: "Halo de luz difusa y acentos principales",
  },
  frostMist: {
    hex: "#557B8E",
    rgb: "rgb(85, 123, 142)",
    name: "Cinematic Cyan Fog",
    role: "Punto focal de iluminación atmosférica",
  },
  frostHighlight: {
    hex: "#6B8C9D",
    rgb: "rgb(107, 140, 157)",
    name: "Titanium Frost Glow",
    role: "Pico de brillo en degradados y reflejos",
  },
  ambientHaze: {
    hex: "#718CA1",
    rgb: "rgb(113, 140, 161)",
    name: "Upper Ambient Haze",
    role: "Destello superior suave anamórfico",
  },

  // ── 05. Espectro Cristalino & Destellos del Isotipo "V" ──
  beamGlow: {
    hex: "#DBECFE",
    rgb: "rgb(219, 236, 254)",
    name: "Radiant Beam Glow",
    role: "Núcleo brillante del destello horizontal y halo central",
  },
  secondaryRail: {
    hex: "#BAD1E3",
    rgb: "rgb(186, 209, 227)",
    name: "Horizon Rail Cyan",
    role: "Línea de horizonte secundaria bajo el haz",
  },
  icyCrystal: {
    hex: "#A3BDCC",
    rgb: "rgb(163, 189, 204)",
    name: "Icy Crystal Shimmer",
    role: "Reflejo cristalino y facetado del pilar izquierdo de la V",
  },
  polarSteel: {
    hex: "#7892A9",
    rgb: "rgb(120, 146, 169)",
    name: "Polar Steel Midtone",
    role: "Sombra metálica fría del pilar derecho de la V",
  },
  notchGray: {
    hex: "#71716F",
    rgb: "rgb(113, 113, 111)",
    name: "Horizon Notch Gray",
    role: "Muescas flotantes en los extremos laterales del horizonte",
  },

  // ── 06. Titanio y Luz Pura ──
  titaniumSilver: {
    hex: "#CBD5E1",
    rgb: "rgb(203, 213, 225)",
    name: "Titanium Silver",
    role: "Subtítulos, etiquetas y textos secundarios",
  },
  pureWhite: {
    hex: "#FFFFFF",
    rgb: "rgb(255, 255, 255)",
    name: "Pure Titanium White",
    role: "Marca denominativa, isotipo y títulos de alto impacto",
  },
} as const;


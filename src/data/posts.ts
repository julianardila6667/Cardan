export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: '5-senales-cardan-falla',
    title: '5 señales claras de que tu cardán está por fallar',
    excerpt:
      'Vibraciones, ruidos metálicos y juego en la transmisión: aprende a identificar los síntomas tempranos antes de una avería costosa.',
    body: [
      'El cardán es uno de los componentes más críticos del sistema de transmisión, y detectar a tiempo una falla puede ahorrarte miles de pesos en reparaciones mayores. En este artículo repasamos cinco síntomas que no debes ignorar.',
      'Vibración a velocidades específicas, ruidos metálicos al acelerar, juego excesivo al cambiar de marcha, fugas de grasa en las crucetas y desgaste visible en el yugo son las señales más comunes. Si identificas alguna, agenda un diagnóstico de inmediato.',
      'En Cardan y Repuestos contamos con tecnología y más de 40 años de experiencia para detectar fallas en sus etapas tempranas. Un diagnóstico oportuno alarga la vida útil de tu transmisión.',
    ],
    category: 'Mantenimiento',
    date: '12 Ene, 2026',
    readTime: '4 min',
    tags: ['Mantenimiento', 'Diagnóstico', 'Vehículos'],
  },
  {
    slug: 'cardanes-maquinaria-agricola',
    title: 'Cardanes para maquinaria agrícola: lo que debes saber',
    excerpt:
      'Tractores, cosechadoras y equipos pesados requieren cardanes específicos. Te contamos cómo elegir el correcto y mantenerlo en óptimas condiciones.',
    body: [
      'La maquinaria agrícola opera bajo condiciones extremas: cargas pesadas, terrenos irregulares y largas jornadas de trabajo. Los cardanes que las equipan deben estar diseñados específicamente para resistir esa exigencia.',
      'Aspectos clave a considerar: torque máximo, velocidad de rotación (RPM), longitud variable, calidad de las crucetas y compatibilidad con la PTO del equipo. Un cardán mal especificado puede causar daños severos en el motor o caja de transmisión.',
      'Adaptamos cardanes a la medida para cualquier marca y modelo de maquinaria agrícola. Si tu equipo necesita atención, te ayudamos con asesoría técnica especializada.',
    ],
    category: 'Sector agro',
    date: '28 Dic, 2025',
    readTime: '6 min',
    tags: ['Agro', 'Tractores', 'Maquinaria'],
  },
  {
    slug: 'mantenimiento-preventivo-cardan',
    title: 'Mantenimiento preventivo del cardán: guía completa',
    excerpt:
      'Cada cuánto engrasar, balancear y revisar tu cardán para evitar averías. Una rutina simple que extiende su vida útil hasta tres veces.',
    body: [
      'El mantenimiento preventivo es la mejor inversión para el sistema de transmisión de tu vehículo. Una revisión periódica detecta desgastes incipientes antes de que se conviertan en fallas mayores.',
      'Recomendamos engrasar las crucetas cada 5 000 a 10 000 km dependiendo del uso, balancear el cardán cada 30 000 km y realizar una inspección visual completa cada año. Para vehículos de carga pesada o uso intensivo, los intervalos son más frecuentes.',
      'En nuestro taller realizamos diagnóstico, balanceo y engrase con equipos profesionales. Programa tu mantenimiento preventivo y mantén tu vehículo siempre listo.',
    ],
    category: 'Guía técnica',
    date: '15 Dic, 2025',
    readTime: '7 min',
    tags: ['Mantenimiento', 'Prevención', 'Guía'],
  },
  {
    slug: 'cardan-vs-semieje-diferencias',
    title: 'Cardán vs semieje: diferencias y cuándo se usa cada uno',
    excerpt:
      'Ambos transmiten potencia, pero cumplen funciones distintas. Aclaramos las diferencias técnicas y los casos de uso típicos.',
    body: [
      'Aunque a primera vista pueden parecer similares, el cardán y el semieje son componentes con funciones específicas dentro del sistema de transmisión.',
      'El cardán transmite potencia entre la caja y el diferencial, generalmente en vehículos con tracción trasera o 4x4. El semieje, en cambio, transmite potencia desde el diferencial hasta las ruedas.',
      'Saber distinguirlos es clave al momento de pedir un repuesto o describir una falla. Si tienes dudas, nuestros asesores técnicos te orientan sin compromiso.',
    ],
    category: 'Educación',
    date: '02 Dic, 2025',
    readTime: '5 min',
    tags: ['Conceptos', 'Transmisión'],
  },
  {
    slug: 'balanceo-cardan-importancia',
    title: 'La importancia del balanceo de cardán en vehículos pesados',
    excerpt:
      'Un cardán desbalanceado genera vibraciones que dañan rodamientos, soportes y crucetas. Te explicamos por qué este servicio es indispensable.',
    body: [
      'El balanceo del cardán es uno de los servicios más subestimados, pero también uno de los más importantes. Un cardán desbalanceado vibra a altas velocidades y genera daños progresivos en componentes adyacentes.',
      'En vehículos pesados de carga, el balanceo debe revisarse cada 50 000 km o cuando se sienta cualquier vibración inusual. El proceso requiere maquinaria especializada que mide y corrige el peso del componente.',
      'Contamos con equipo de balanceo dinámico computarizado, garantía en cada servicio y entrega rápida.',
    ],
    category: 'Mantenimiento',
    date: '18 Nov, 2025',
    readTime: '5 min',
    tags: ['Balanceo', 'Carga pesada'],
  },
  {
    slug: 'fabricacion-cardan-medida',
    title: 'Fabricación de cardanes a la medida: ¿cuándo lo necesitas?',
    excerpt:
      'No todos los vehículos encuentran cardanes estándar en el mercado. Conoce cuándo es necesaria la fabricación a la medida y qué incluye.',
    body: [
      'Vehículos modificados, maquinaria importada o equipos antiguos a menudo requieren cardanes que ya no se producen o que no encajan con las medidas estándar.',
      'En esos casos fabricamos a la medida: tomamos las dimensiones, especificamos materiales según el uso, ensamblamos y entregamos un cardán nuevo con garantía.',
      'El proceso típico tarda entre 3 y 7 días hábiles dependiendo de la complejidad. Solicita tu cotización con las medidas o nuestro equipo se desplaza a tomarlas.',
    ],
    category: 'Servicios',
    date: '05 Nov, 2025',
    readTime: '6 min',
    tags: ['Fabricación', 'Adaptación'],
  },
];

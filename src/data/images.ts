/**
 * Stock images de Unsplash (uso libre con crédito en footer).
 * Hot-link directo al CDN — Unsplash lo permite explícitamente.
 * Cada URL incluye parámetros de optimización (w=, q=, fit=crop).
 */

const u = (id: string, w = 1600, h?: number) => {
  const dims = h ? `&w=${w}&h=${h}&fit=crop` : `&w=${w}&fit=crop`;
  return `https://images.unsplash.com/${id}?auto=format&q=80${dims}`;
};

// Pexels CDN — also free for commercial use, useful for niche shots like tractors
const px = (id: number, w = 1200, h?: number) => {
  const dims = h ? `&w=${w}&h=${h}&fit=crop` : `&w=${w}&fit=crop`;
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb${dims}`;
};

export const img = {
  // Hero — taller mecánico industrial
  hero: u('photo-1486006920555-c77dcf18193c', 1400, 1100),
  heroAlt: 'Mecánico trabajando en taller automotriz',

  // Difference — primer plano de engranajes / componentes mecánicos
  gears: u('photo-1581092160562-40aa08e78837', 1200, 1200),
  gearsAlt: 'Engranajes industriales en primer plano',

  // Sectores
  carService: u('photo-1492144534655-ae79c964c9d7', 800, 600),
  carServiceAlt: 'Vehículo en servicio de mantenimiento',
  truck: u('photo-1592805144716-feeccccef5ac', 800, 1000),
  truckAlt: 'Camión de carga pesada en carretera',
  industry: u('photo-1486262715619-67b85e0b08d3', 800, 600),
  industryAlt: 'Maquinaria industrial en operación',
  agricultural: px(5358849, 800, 1000),
  agriculturalAlt: 'Tractor agrícola en campo',

  // Equipo / nosotros
  workshop: u('photo-1487754180451-c456f719a1fc', 1200, 1500),
  workshopAlt: 'Taller mecánico profesional',
  team: u('photo-1530046339160-ce3e530c7d2f', 1200, 1500),
  teamAlt: 'Mecánicos profesionales atendiendo vehículo',

  // Servicios detallados
  diagnostic: u('photo-1517524008697-84bbe3c3fd98', 800, 600),
  diagnosticAlt: 'Diagnóstico técnico de motor',
  maintenance: u('photo-1502877338535-766e1452684a', 800, 600),
  maintenanceAlt: 'Mantenimiento preventivo de vehículo',
  manufacturing: u('photo-1565043666747-69f6646db940', 800, 600),
  manufacturingAlt: 'Fabricación de piezas automotrices',

  // Blog (variedad)
  blog1: u('photo-1493238792000-8113da705763', 1000, 600),
  blog1Alt: 'Diagnóstico de cardán',
  blog2: px(5358849, 1000, 600),
  blog2Alt: 'Tractor agrícola en operación',
  blog3: u('photo-1487754180451-c456f719a1fc', 1000, 600),
  blog3Alt: 'Mantenimiento preventivo en taller',
  blog4: u('photo-1503376780353-7e6692767b70', 1000, 600),
  blog4Alt: 'Vehículo automotor',
  blog5: u('photo-1581092160562-40aa08e78837', 1000, 600),
  blog5Alt: 'Componentes industriales',
  blog6: u('photo-1486006920555-c77dcf18193c', 1000, 600),
  blog6Alt: 'Taller automotriz',

  // Contacto / mapa
  shop: u('photo-1486262715619-67b85e0b08d3', 1000, 700),
  shopAlt: 'Taller Cardan y Repuestos',
};

// Mapeo de imágenes por slug de post
export const postImageBySlug: Record<string, { src: string; alt: string }> = {
  '5-senales-cardan-falla': { src: img.blog1, alt: img.blog1Alt },
  'cardanes-maquinaria-agricola': { src: img.blog2, alt: img.blog2Alt },
  'mantenimiento-preventivo-cardan': { src: img.blog3, alt: img.blog3Alt },
  'cardan-vs-semieje-diferencias': { src: img.blog4, alt: img.blog4Alt },
  'balanceo-cardan-importancia': { src: img.blog5, alt: img.blog5Alt },
  'fabricacion-cardan-medida': { src: img.blog6, alt: img.blog6Alt },
};

# Cardan y Repuestos SAS — Sitio web

Sitio web institucional para **Cardan y Repuestos SAS**, especialistas en cardanes con más de 40 años de experiencia en Bogotá, Colombia. Atendemos vehículos particulares, transporte de carga, maquinaria industrial y equipos agrícolas.

> **Servicio & Repuestos** — Venta, mantenimiento, adaptación y fabricación de cardanes a la medida.

## Stack

- **[Astro 5](https://astro.build/)** — generador de sitios estáticos, ship 0 JS por defecto
- **[Tailwind CSS 3](https://tailwindcss.com/)** + plugin de tipografía
- **TypeScript** modo estricto
- **Sitemap** automático (`@astrojs/sitemap`)
- **JSON-LD** `LocalBusiness` para SEO

## Características

- Diseño moderno inspirado en el template **FixinMoto** de Figma — paleta oscura con acento rojo coral (`#ed3a3a`)
- **Modo claro / oscuro** con toggle, persistencia en `localStorage` y respeto a `prefers-color-scheme`
- **Responsive** verificado en 4 breakpoints (mobile 375px, tablet 768px, lg 1024px, desktop 1440px)
- 11 páginas estáticas: Inicio, Nosotros, Productos y Servicios, Blog (índice + 6 posts), Contacto
- Componentes reutilizables: Hero, Stats, Services Grid, Testimonials, FAQ, Difference, Coverage, BlogTeaser, etc.
- WhatsApp FAB flotante + integración por toda la página
- Mapa de Google embebido en Inicio y Contacto
- Formulario de contacto con campos de servicio
- Tema configurable via CSS variables — fácil rebrand

## Estructura del proyecto

```
.
├── public/
│   ├── img/          # Logo y assets estáticos
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/   # Header, Footer, Hero, FAQ, ThemeToggle, etc.
│   ├── data/
│   │   ├── site.ts   # Datos del negocio (teléfonos, dirección, horario)
│   │   ├── posts.ts  # Posts del blog
│   │   └── images.ts # URLs de imágenes (Unsplash + Pexels CDN)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── nosotros.astro
│   │   ├── productos-servicios.astro
│   │   ├── contacto.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── globals.css   # Variables CSS (tema), utilities, components
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Instalación

```bash
# Clonar el repositorio
git clone <URL>
cd "Cardan 2.0"

# Instalar dependencias (Node 18+ recomendado)
npm install

# Levantar servidor de desarrollo
npm run dev
# → http://localhost:4321
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Sirve el `dist/` localmente para verificar antes de deploy |
| `npm run astro` | Acceso directo al CLI de Astro |

## Personalización

### Cambiar datos del negocio
Editá `src/data/site.ts` — todos los teléfonos, email, dirección, horario y URL de WhatsApp viven ahí. Cambian en todas las páginas automáticamente.

### Cambiar paleta de colores
La paleta se define en `tailwind.config.mjs` (token `accent`) y los tokens semánticos del tema en `src/styles/globals.css` (variables `--page`, `--surface`, `--text-body`, etc.).

### Reemplazar imágenes
Editá `src/data/images.ts`. Las imágenes vienen del CDN de Unsplash y Pexels (uso libre comercial). Si querés alojarlas localmente, copialas a `public/img/` y referenciá con `/img/nombre.jpg`.

### Editar posts del blog
Editá `src/data/posts.ts`. Cada post tiene `slug`, `title`, `excerpt`, `body[]`, `category`, `date`, `readTime`, `tags[]`. Las URLs se generan automáticamente desde el slug.

### Logo
Reemplazá `public/img/logo.jpg` por tu versión actualizada (ideal: PNG/SVG con fondo transparente o blanco). El componente `src/components/Logo.astro` lo muestra dentro de una píldora blanca de 48px que funciona en ambos temas.

## Deploy

El sitio es 100% estático. Funciona out-of-the-box en cualquier hosting estático:

### Vercel (recomendado)
1. Conectá el repo en https://vercel.com/new
2. Vercel detecta Astro automáticamente
3. Click "Deploy" — listo

### Netlify
1. Conectá el repo en https://app.netlify.com/start
2. Build command: `npm run build`
3. Publish directory: `dist`

### Cloudflare Pages
1. Conectá el repo en https://dash.cloudflare.com/
2. Framework preset: `Astro`
3. Build command: `npm run build`
4. Output directory: `dist`

### Hosting tradicional (cPanel / FTP)
Después de `npm run build`, subí el contenido completo de la carpeta `dist/` a la raíz pública del servidor.

## Imágenes (créditos)

Las imágenes de stock vienen de:
- **[Unsplash](https://unsplash.com/)** — uso libre comercial (License Unsplash)
- **[Pexels](https://pexels.com/)** — uso libre comercial (License Pexels)

Para reemplazar por fotos propias del taller, editá `src/data/images.ts`.

## Contacto del negocio

- **Dirección:** Av. Carrera 30 No. 30 A-87, Bogotá, Colombia
- **Teléfonos:** 310 819 3698 · 601 720 1162
- **Email:** cardanyrepuestos@hotmail.com
- **Horario:** L–V 8:00 a.m. – 5:00 p.m. · Sáb 8:00 a.m. – 1:00 p.m.

---

© Cardan y Repuestos SAS. Todos los derechos reservados.

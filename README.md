# Velkode

> **Código que impulsa negocios.**

Velkode es una consultora de software que diseña y construye productos digitales modernos, escalables y de alto rendimiento para empresas que quieren crecer con tecnología.

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Lenguaje | TypeScript |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animaciones | [Framer Motion](https://www.framer.com/motion/) |
| Íconos | [@tabler/icons-react](https://tabler.io/icons) |
| Utilidades | [clsx](https://github.com/lukeed/clsx) |
| Fuentes | Space Grotesk · Inter · JetBrains Mono |

---

## Paleta de colores oficial (Identidad Velkode)

| Tono | Hex | Uso principal |
|------|-----|---------------|
| `Obsidian Blue` | `#010508` / `#06090E` | Fondos de alto contraste y base |
| `Deep Navy` | `#081319` | Fondo general de la plataforma |
| `Dark Slate` | `#182028` / `#25333D` | Tarjetas, bordes y superficies |
| `Steel Blue` | `#4B7784` / `#557B8E` | Acentos primarios y detalles |
| `Ice Blue` | `#DBECFE` / `#BAD1E3` | Textos principales y destacados |
| `Muted Slate` | `#7892A9` / `#CBD5E1` | Textos secundarios y lectura |

---

## Estructura del proyecto

```
src/
├── app/                  # App Router (páginas, layout, estilos globales)
│   ├── globals.css       # Estilos globales + @theme (Tailwind v4)
│   ├── layout.tsx        # Root layout con fuentes
│   └── page.tsx          # Página principal
├── components/
│   ├── ui/               # Componentes genéricos reutilizables
│   ├── sections/         # Secciones de la landing page
│   └── layout/           # Navbar, Footer
└── lib/
    ├── constants.ts      # Constantes de la marca
    └── utils.ts          # Utilidades (cn, etc.)
```

---

## Comandos de desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm run start

# Ejecutar linter
npm run lint
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

---

## Requisitos

- Node.js >= 18.17
- npm >= 9

---

*© 2025 Velkode. Todos los derechos reservados.*

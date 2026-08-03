# Libro de estilo de exerciness

Este documento es la fuente de verdad del diseño visual de **exerciness**. Define
identidad, colores, tipografía, espaciado, radios, sombras, iconografía e
inventario de componentes. Se debe cumplir en toda la aplicación.

## 1. Identidad y marca

- **Nombre**: exerciness
- **Concepto**: energía, constancia y claridad. Diseño limpio que prioriza el
  contenido (ejercicios) sobre la decoración.
- **Idioma de la interfaz**: español.
- **Iconografía**: Material Symbols Rounded (Google Icons). **Prohibido el uso
  de emojis en el código**; cualquier símbolo se renderiza con el componente
  `<Icon />`.

## 2. Paleta de colores

Los colores se declaran como tokens CSS en `src/styles/tokens.css` en tripletes
RGB y se exponen a Tailwind con soporte de opacidad (`bg-primary/10`).

### 2.1 Tema claro

| Token                      | Valor                   | Uso                                   |
| -------------------------- | ----------------------- | ------------------------------------- |
| `--color-primary`          | `22 163 74` (#16a34a)   | Acciones principales, enlaces activos |
| `--color-primary-hover`    | `21 128 61` (#15803d)   | Hover de acciones primarias           |
| `--color-primary-contrast` | `255 255 255`           | Texto sobre fondo primario            |
| `--color-surface`          | `255 255 255`           | Fondo de página y tarjetas            |
| `--color-surface-alt`      | `248 250 252` (#f8fafc) | Fondos alternos, hover                |
| `--color-border`           | `226 232 240` (#e2e8f0) | Bordes y separadores                  |
| `--color-text`             | `15 23 42` (#0f172a)    | Texto principal                       |
| `--color-text-muted`       | `100 116 139` (#64748b) | Texto secundario                      |
| `--color-success`          | `22 163 74`             | Éxito                                 |
| `--color-error`            | `220 38 38` (#dc2626)   | Error                                 |
| `--color-warning`          | `217 119 6` (#d97706)   | Advertencia                           |
| `--color-info`             | `2 132 199` (#0284c7)   | Información                           |

### 2.2 Tema oscuro (clase `.dark`)

| Token                   | Valor                   | Uso                  |
| ----------------------- | ----------------------- | -------------------- |
| `--color-primary`       | `34 197 94` (#22c55e)   | Acciones principales |
| `--color-primary-hover` | `22 163 74` (#16a34a)   | Hover                |
| `--color-surface`       | `15 23 42` (#0f172a)    | Fondo de página      |
| `--color-surface-alt`   | `30 41 59` (#1e293b)    | Fondos alternos      |
| `--color-border`        | `51 65 85` (#334155)    | Bordes               |
| `--color-text`          | `248 250 252` (#f8fafc) | Texto principal      |
| `--color-text-muted`    | `148 163 184` (#94a3b8) | Texto secundario     |
| `--color-success`       | `74 222 128` (#4ade80)  | Éxito                |
| `--color-error`         | `248 113 113` (#f87171) | Error                |
| `--color-warning`       | `251 191 36` (#fbbf24)  | Advertencia          |
| `--color-info`          | `56 189 248` (#38bdf8)  | Información          |

**Regla de contraste**: el texto sobre `surface` debe mantener contraste AA
(4.5:1). El verde `--color-primary` en tema claro se reserva para fondos
(sobre él siempre texto `primary-contrast`) o para iconos/acentos.

## 3. Tipografía

- **Familia**: pila del sistema (`system-ui`, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif).
- **Escala**:

| Rol                   | Tamaño                       | Peso     |
| --------------------- | ---------------------------- | -------- |
| Título de página (h1) | 2rem / 2.5rem (text-3xl/4xl) | Bold     |
| Sección (h2)          | 1.5rem (text-2xl)            | Semibold |
| Subsección (h3)       | 1.25rem (text-xl)            | Semibold |
| Cuerpo                | 1rem (text-base)             | Normal   |
| Texto secundario      | 0.875rem (text-sm)           | Normal   |
| Etiqueta/caption      | 0.75rem (text-xs)            | Medium   |

## 4. Espaciado

Se usa la escala de Tailwind (base 0.25rem):

`p-1` (4px) · `p-2` (8px) · `p-3` (12px) · `p-4` (16px) · `p-6` (24px) · `p-8` (32px) · `p-12` (48px)

- Espaciado interno de tarjetas: `p-4` / `p-6`.
- Separación vertical entre secciones: `py-12` / `py-16`.
- Contenedor principal: `max-w-7xl` con padding lateral `px-4 sm:px-6 lg:px-8`.

## 5. Radios y sombras

| Token                    | Valor  | Uso                          |
| ------------------------ | ------ | ---------------------------- |
| `rounded-sm`             | 4px    | Inputs, botones pequeños     |
| `rounded` / `rounded-md` | 8px    | Botones, tarjetas, inputs    |
| `rounded-lg`             | 12px   | Tarjetas destacadas, modales |
| `rounded-full`           | 9999px | Badges, avatares             |

Sombras (de Tailwind, adaptadas al token `--color-text`):

`shadow-sm` · `shadow` · `shadow-md` · `shadow-lg`

## 6. Iconografía

- Fuente: **Material Symbols Rounded** (cargada vía Google Fonts).
- Uso exclusivo mediante el componente `src/components/ui/Icon.jsx`.
- Tamaños habituales: 20px (acciones), 24px (nav), 40px (estados vacíos).
- Accesibilidad: iconos decorativos con `aria-hidden`; iconos informativos con
  `label` y `role="img"`.

## 7. Inventario de componentes UI

| Componente     | Variantes / props                                       | Uso                           |
| -------------- | ------------------------------------------------------- | ----------------------------- |
| `Button`       | primary, secondary, outline, ghost · sm/md/lg · loading | Acciones                      |
| `Card`         | —                                                       | Contenedores                  |
| `Badge`        | default, primary, success, warning, info                | Etiquetas                     |
| `Spinner`      | —                                                       | Cargas                        |
| `Modal`        | open, onClose, title, footer                            | Diálogos                      |
| `EmptyState`   | icon, title, description, action                        | Estados vacíos                |
| `SearchInput`  | value, onChange                                         | Búsqueda                      |
| `FilterSelect` | label, value, onChange, options                         | Filtros                       |
| `ThemeToggle`  | —                                                       | Cambio de tema (ticket theme) |

## 8. Reglas de uso

1. **Siempre tokens semánticos**, nunca colores hardcodeados.
2. **Responsive con media queries** de Tailwind (`sm`, `md`, `lg`, `xl`);
   el CSS propio debe usar `@media`.
3. **HTML semántico**: `header`, `nav`, `main`, `footer`, `section`, `article`,
   encabezados en orden.
4. **Sin `innerHTML`**: nunca inyectar HTML inseguro.
5. **Accesibilidad**: foco visible, `aria-label` en iconos informativos,
   contraste AA.
6. **Sin emojis** en el código; se usa `<Icon />`.

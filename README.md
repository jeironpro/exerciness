# exerciness

Catálogo de ejercicios de gimnasio con búsqueda, filtros, detalle, favoritos y
comparador. Frontend SPA en React + Vite, sin backend.

## Características

- Catálogo de 1.324 ejercicios con búsqueda por nombre y filtros por grupo
  corporal, equipo, objetivo y músculo principal.
- Detalle con media (imagen y animación), instrucciones en español paso a paso y
  atribución obligatoria (© Gym visual).
- Favoritos persistidos en `localStorage` con contador en el navbar.
- Comparador de hasta 4 ejercicios con tabla lado a lado y barra flotante.
- Tema claro/oscuro con detección de la preferencia del sistema y persistencia.

## Requisitos

- Node.js 24 LTS
- Yarn Berry 4.x (habilitado vía Corepack)

## Puesta en marcha

```bash
corepack enable
yarn install
yarn dev
```

## Sincronizar el dataset

El dataset (fuera del repo, en `exercises-dataset-main/`) se copia a `public/`
con:

```bash
yarn data:sync
```

## Scripts

| Script              | Descripción                       |
| ------------------- | --------------------------------- |
| `yarn dev`          | Servidor de desarrollo            |
| `yarn build`        | Build de producción               |
| `yarn preview`      | Sirve el build localmente         |
| `yarn data:sync`    | Sincroniza el dataset a `public/` |
| `yarn lint`         | ESLint                            |
| `yarn format:check` | Verifica el formato con Prettier  |
| `yarn test`         | Vitest (98 tests)                 |

## Documentación

- [Documentación técnica](docs/technical.md) — arquitectura, datos, estado, rutas, pruebas y CI.
- [Libro de estilo](docs/style-guide.md) — tokens de diseño, paleta y kit de componentes.

## Licencia

MIT. Consulta [LICENSE](LICENSE).

import { Link } from 'react-router-dom'

// Página 404 para rutas no encontradas.
export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-text">404</h1>
      <p className="text-text-muted">La página que buscas no existe.</p>
      <Link
        to="/"
        className="rounded-md bg-primary px-4 py-2 font-medium text-primary-contrast hover:bg-primary-hover"
      >
        Volver al inicio
      </Link>
    </section>
  )
}

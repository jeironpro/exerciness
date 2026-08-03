import { Link } from 'react-router-dom'

// Página 404 para rutas no encontradas.
export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-gray-900">404</h1>
      <p className="text-gray-600">La página que buscas no existe.</p>
      <Link
        to="/"
        className="rounded-md bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
      >
        Volver al inicio
      </Link>
    </section>
  )
}

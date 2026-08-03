import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useExerciseStore } from '@/store/exerciseStore.js'
import { useFavoritesStore } from '@/store/favoritesStore.js'
import ExerciseCard from '@/components/common/ExerciseCard.jsx'
import EmptyState from '@/components/ui/EmptyState.jsx'
import Spinner from '@/components/ui/Spinner.jsx'

// Página de ejercicios favoritos, persistidos en localStorage.
export default function Favorites() {
  const { exercises, loading, error, load } = useExerciseStore()
  const ids = useFavoritesStore((state) => state.ids)

  // Carga el catálogo si aún no está disponible.
  useEffect(() => {
    const state = useExerciseStore.getState()
    if (state.exercises.length === 0 && !state.loading) state.load()
  }, [load])

  if (loading && exercises.length === 0) {
    return (
      <section className="flex flex-col items-center gap-4 py-24" aria-live="polite">
        <Spinner className="h-8 w-8 text-primary" />
        <p className="text-text-muted">Cargando tus favoritos...</p>
      </section>
    )
  }

  if (error && exercises.length === 0) {
    return (
      <EmptyState
        icon="error"
        title="No se pudieron cargar los favoritos"
        description={error}
        action={
          <button
            type="button"
            className="btn mt-2 bg-primary px-4 text-primary-contrast hover:bg-primary-hover"
            onClick={() => load()}
          >
            Reintentar
          </button>
        }
      />
    )
  }

  const favorites = exercises.filter((exercise) => ids.includes(exercise.id))

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-text">Mis favoritos</h1>
        <p className="mt-1 text-text-muted">
          {favorites.length}{' '}
          {favorites.length === 1 ? 'ejercicio guardado' : 'ejercicios guardados'}.
        </p>
      </header>

      {favorites.length === 0 ? (
        <EmptyState
          icon="favorite_border"
          title="Aún no tienes favoritos"
          description="Marca ejercicios como favoritos para tenerlos siempre a mano."
          action={
            <Link
              to="/ejercicios"
              className="btn mt-2 bg-primary px-4 text-primary-contrast hover:bg-primary-hover"
            >
              Explorar ejercicios
            </Link>
          }
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favorites.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      )}
    </section>
  )
}

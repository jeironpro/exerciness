import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useExerciseStore } from '@/store/exerciseStore.js'
import ExerciseCard from '@/components/common/ExerciseCard.jsx'
import Spinner from '@/components/ui/Spinner.jsx'

// Página de inicio: hero con llamada a la acción y ejercicios destacados.
export default function Home() {
  const { exercises, loading, load } = useExerciseStore()

  // Carga el catálogo si aún no está en el store.
  useEffect(() => {
    const state = useExerciseStore.getState()
    if (state.exercises.length === 0 && !state.loading) state.load()
  }, [load])

  const featured = exercises.slice(0, 6)

  return (
    <>
      <section className="bg-surface-alt">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-text sm:text-5xl">Descubre tu rutina perfecta</h1>
          <p className="max-w-xl text-lg text-text-muted">
            Más de 1.300 ejercicios con vídeo, instrucciones y filtros avanzados para planificar tu
            entrenamiento.
          </p>
          <Link
            to="/ejercicios"
            className="btn h-12 bg-primary px-6 text-base text-primary-contrast hover:bg-primary-hover"
          >
            Explorar ejercicios
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-semibold text-text">Ejercicios destacados</h2>
        {loading && exercises.length === 0 ? (
          <div className="flex justify-center py-12" aria-live="polite">
            <Spinner className="h-8 w-8 text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

import { useEffect } from 'react'
import { useExerciseStore } from '@/store/exerciseStore.js'
import { useFilterStore } from '@/store/filterStore.js'
import { filterExercises, sortExercises } from '@/utils/helpers.js'
import ExerciseCard from '@/components/common/ExerciseCard.jsx'
import ExerciseFilters from '@/components/common/ExerciseFilters.jsx'
import Spinner from '@/components/ui/Spinner.jsx'
import EmptyState from '@/components/ui/EmptyState.jsx'

// Catálogo completo de ejercicios con búsqueda, filtros y ordenación.
export default function Exercises() {
  const { exercises, loading, error, load } = useExerciseStore()
  const filters = useFilterStore()

  // Carga el dataset una única vez y lo cachea en el store.
  useEffect(() => {
    const state = useExerciseStore.getState()
    if (state.exercises.length === 0 && !state.loading) state.load()
  }, [load])

  if (loading && exercises.length === 0) {
    return (
      <section className="flex flex-col items-center gap-4 py-24" aria-live="polite">
        <Spinner className="h-8 w-8 text-primary" />
        <p className="text-text-muted">Cargando el catálogo de ejercicios...</p>
      </section>
    )
  }

  if (error && exercises.length === 0) {
    return (
      <EmptyState
        icon="error"
        title="No se pudo cargar el catálogo"
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

  const visible = sortExercises(filterExercises(exercises, filters), filters.sortBy)

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-text">Catálogo de ejercicios</h1>
        <p className="mt-1 text-text-muted">{exercises.length} ejercicios disponibles.</p>
      </header>
      <ExerciseFilters exercises={exercises} />
      {visible.length === 0 ? (
        <EmptyState
          icon="search_off"
          title="Sin resultados"
          description="Prueba a cambiar los filtros o el término de búsqueda."
        />
      ) : (
        <>
          <p className="mb-4 mt-6 text-sm text-text-muted" aria-live="polite">
            {visible.length} {visible.length === 1 ? 'ejercicio' : 'ejercicios'} encontrados.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

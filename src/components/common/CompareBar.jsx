import { Link } from 'react-router-dom'
import { useExerciseStore } from '@/store/exerciseStore.js'
import { useCompareStore } from '@/store/compareStore.js'

// Barra flotante de comparación: visible cuando hay ejercicios seleccionados.
const CompareBar = () => {
  const ids = useCompareStore((state) => state.ids)
  const clear = useCompareStore((state) => state.clear)
  const exercises = useExerciseStore((state) => state.exercises)

  if (ids.length === 0) return null

  const selected = exercises.filter((exercise) => ids.includes(exercise.id))

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface p-3 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4">
        <div className="flex -space-x-2" aria-hidden="true">
          {selected.slice(0, 4).map((exercise) => (
            <img
              key={exercise.id}
              src={exercise.image}
              alt=""
              className="h-10 w-10 rounded-full border-2 border-surface object-cover"
            />
          ))}
        </div>
        <span className="text-sm font-medium text-text">
          {ids.length} {ids.length === 1 ? 'ejercicio seleccionado' : 'ejercicios seleccionados'}
        </span>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className="btn h-9 border border-border bg-surface-alt px-3 text-sm text-text hover:border-primary hover:text-primary"
            onClick={clear}
          >
            Limpiar
          </button>
          <Link
            to="/comparar"
            className="btn h-9 bg-primary px-3 text-sm text-primary-contrast hover:bg-primary-hover"
          >
            Comparar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompareBar

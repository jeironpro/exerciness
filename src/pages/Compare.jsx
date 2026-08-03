import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useExerciseStore } from '@/store/exerciseStore.js'
import { useCompareStore } from '@/store/compareStore.js'
import {
  getBodyPartLabel,
  getEquipmentLabel,
  getTargetLabel,
  getMuscleGroupLabel,
} from '@/utils/helpers.js'
import EmptyState from '@/components/ui/EmptyState.jsx'
import Spinner from '@/components/ui/Spinner.jsx'
import Icon from '@/components/ui/Icon.jsx'

// Comparador: tabla lado a lado de los ejercicios seleccionados.
export default function Compare() {
  const { exercises, loading, error, load } = useExerciseStore()
  const ids = useCompareStore((state) => state.ids)
  const removeCompare = useCompareStore((state) => state.removeCompare)

  // Carga el catálogo si aún no está disponible.
  useEffect(() => {
    const state = useExerciseStore.getState()
    if (state.exercises.length === 0 && !state.loading) state.load()
  }, [load])

  if (loading && exercises.length === 0) {
    return (
      <section className="flex flex-col items-center gap-4 py-24" aria-live="polite">
        <Spinner className="h-8 w-8 text-primary" />
        <p className="text-text-muted">Cargando el comparador...</p>
      </section>
    )
  }

  if (error && exercises.length === 0) {
    return (
      <EmptyState
        icon="error"
        title="No se pudo cargar el comparador"
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

  const selected = exercises.filter((exercise) => ids.includes(exercise.id))

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-text">Comparador</h1>
        <p className="mt-1 text-text-muted">Compara hasta 4 ejercicios lado a lado.</p>
      </header>

      {selected.length < 2 ? (
        <EmptyState
          icon="compare_arrows"
          title="Selecciona al menos dos ejercicios"
          description="Añade ejercicios con el botón de comparación en el catálogo para verlos lado a lado."
          action={
            <Link
              to="/ejercicios"
              className="btn mt-2 bg-primary px-4 text-primary-contrast hover:bg-primary-hover"
            >
              Ir al catálogo
            </Link>
          }
        />
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border bg-surface shadow-sm">
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">Comparación de ejercicios seleccionados</caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="p-3 text-left font-medium text-text-muted">
                  Ejercicio
                </th>
                {selected.map((exercise) => (
                  <th scope="col" key={exercise.id} className="min-w-40 p-3 text-left align-top">
                    <div className="flex flex-col gap-2">
                      <img
                        src={exercise.image}
                        alt=""
                        className="aspect-square w-full rounded-md object-cover"
                      />
                      <Link
                        to={`/ejercicio/${exercise.id}`}
                        className="font-semibold text-primary hover:underline"
                      >
                        {exercise.name}
                      </Link>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 self-start text-xs text-text-muted hover:text-error"
                        onClick={() => removeCompare(exercise.id)}
                      >
                        <Icon name="close" size={14} />
                        Quitar
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <CompareRow
                label="Grupo corporal"
                values={selected.map((e) => getBodyPartLabel(e.body_part))}
              />
              <CompareRow
                label="Equipo"
                values={selected.map((e) => getEquipmentLabel(e.equipment))}
              />
              <CompareRow label="Objetivo" values={selected.map((e) => getTargetLabel(e.target))} />
              <CompareRow
                label="Músculo principal"
                values={selected.map((e) => getMuscleGroupLabel(e.muscle_group))}
              />
              <CompareRow
                label="Secundarios"
                values={selected.map((e) =>
                  e.secondary_muscles.map(getMuscleGroupLabel).join(', '),
                )}
              />
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

// Fila del comparador: etiqueta de atributo + valor por ejercicio.
function CompareRow({ label, values }) {
  return (
    <tr className="border-b border-border last:border-b-0">
      <th scope="row" className="w-40 p-3 text-left align-top font-medium text-text-muted">
        {label}
      </th>
      {values.map((value, index) => (
        <td key={index} className="p-3 align-top text-text">
          {value}
        </td>
      ))}
    </tr>
  )
}

import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useExerciseStore } from '@/store/exerciseStore.js'
import {
  getBodyPartLabel,
  getEquipmentLabel,
  getTargetLabel,
  getMuscleGroupLabel,
} from '@/utils/helpers.js'
import ExerciseVideo from '@/components/common/ExerciseVideo.jsx'
import FavoriteButton from '@/components/common/FavoriteButton.jsx'
import Badge from '@/components/ui/Badge.jsx'
import Card from '@/components/ui/Card.jsx'
import Spinner from '@/components/ui/Spinner.jsx'
import EmptyState from '@/components/ui/EmptyState.jsx'

// Página de detalle de un ejercicio: media, instrucciones y músculos.
export default function ExerciseDetail() {
  const { id } = useParams()
  const { exercises, loading, error, load } = useExerciseStore()

  // Carga el catálogo si aún no está disponible.
  useEffect(() => {
    const state = useExerciseStore.getState()
    if (state.exercises.length === 0 && !state.loading) state.load()
  }, [load])

  if (loading && exercises.length === 0) {
    return (
      <section className="flex flex-col items-center gap-4 py-24" aria-live="polite">
        <Spinner className="h-8 w-8 text-primary" />
        <p className="text-text-muted">Cargando el ejercicio...</p>
      </section>
    )
  }

  if (error && exercises.length === 0) {
    return (
      <EmptyState
        icon="error"
        title="No se pudo cargar el ejercicio"
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

  const exercise = exercises.find((item) => item.id === id)

  if (!exercise) {
    return (
      <EmptyState
        icon="search_off"
        title="Ejercicio no encontrado"
        description="El ejercicio que buscas no existe o ha cambiado de catálogo."
        action={
          <Link
            to="/ejercicios"
            className="btn mt-2 bg-primary px-4 text-primary-contrast hover:bg-primary-hover"
          >
            Volver al catálogo
          </Link>
        }
      />
    )
  }

  const steps = exercise.instruction_steps?.es ?? []
  const description = exercise.instructions?.es ?? ''

  return (
    <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/ejercicios"
        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        <span className="material-symbols-rounded select-none" aria-hidden="true">
          arrow_back
        </span>
        Volver al catálogo
      </Link>

      <header className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text">{exercise.name}</h1>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <Badge tone="primary">{getBodyPartLabel(exercise.body_part)}</Badge>
            <Badge>{getEquipmentLabel(exercise.equipment)}</Badge>
            <Badge tone="info">{getTargetLabel(exercise.target)}</Badge>
          </div>
        </div>
        <FavoriteButton exerciseId={exercise.id} className="shrink-0" />
      </header>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ExerciseVideo exercise={exercise} />

        <div className="flex flex-col gap-6">
          <section>
            <h2 className="text-xl font-semibold text-text">Instrucciones</h2>
            {steps.length > 0 ? (
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-text-muted">
                {steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            ) : (
              <p className="mt-3 text-text-muted">{description}</p>
            )}
          </section>

          <Card className="p-4">
            <h2 className="text-lg font-semibold text-text">Músculos implicados</h2>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex flex-wrap items-center gap-2">
                <dt className="font-medium text-text-muted">Principal:</dt>
                <Badge tone="primary">{getMuscleGroupLabel(exercise.muscle_group)}</Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <dt className="font-medium text-text-muted">Secundarios:</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {exercise.secondary_muscles.map((muscle) => (
                    <Badge key={muscle}>{getMuscleGroupLabel(muscle)}</Badge>
                  ))}
                </dd>
              </div>
            </dl>
          </Card>
        </div>
      </div>
    </article>
  )
}

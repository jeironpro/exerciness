/* Hallmark · genre: playful · macrostructure: 02-long-document · theme: Hum · design-system: design.md · designed-as-app */
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
import Spinner from '@/components/ui/Spinner.jsx'
import EmptyState from '@/components/ui/EmptyState.jsx'

export default function ExerciseDetail() {
  const { id } = useParams()
  const { exercises, loading, error, load } = useExerciseStore()

  useEffect(() => {
    const state = useExerciseStore.getState()
    if (state.exercises.length === 0 && !state.loading) state.load()
  }, [load])

  if (loading && exercises.length === 0) {
    return (
      <section className="flex flex-col items-center gap-4 py-24" aria-live="polite">
        <Spinner className="h-8 w-8 text-accent" />
        <p className="font-body text-ink-2">Cargando...</p>
      </section>
    )
  }

  if (error && exercises.length === 0) {
    return (
      <EmptyState
        icon="error"
        title="No se pudo cargar"
        description={error}
        action={
          <button type="button" className="btn" onClick={() => load()}>
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
          <Link to="/ejercicios" className="btn no-underline">
            Volver al catálogo
          </Link>
        }
      />
    )
  }

  const steps = exercise.instruction_steps?.es ?? []
  const description = exercise.instructions?.es ?? ''

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/ejercicios"
        className="inline-flex items-center gap-1 font-body text-sm font-medium text-accent-2 no-underline hover:underline"
      >
        <span className="material-symbols-rounded select-none text-base" aria-hidden="true">
          arrow_back
        </span>
        Volver
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap gap-2">
          <Badge tone="primary">{getBodyPartLabel(exercise.body_part)}</Badge>
          <Badge>{getEquipmentLabel(exercise.equipment)}</Badge>
          <Badge tone="secondary">{getTargetLabel(exercise.target)}</Badge>
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <h1 className="font-display text-3xl font-semibold leading-tight text-ink">
            {exercise.name}
          </h1>
          <FavoriteButton exerciseId={exercise.id} className="shrink-0" />
        </div>
      </header>

      <div className="mt-8 space-y-10">
        <section className="flex flex-col items-center">
          <ExerciseVideo exercise={exercise} />
        </section>

        <section>
          <h2 className="font-body text-lg font-semibold text-ink">Instrucciones</h2>
          {steps.length > 0 ? (
            <ol
              className="mt-4 space-y-3 pl-5 font-body text-ink-2 [&>li]:leading-relaxed"
              style={{ maxWidth: '65ch' }}
            >
              {steps.map((step, index) => (
                <li key={index} className="list-decimal">
                  {step}
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-4 font-body leading-relaxed text-ink-2" style={{ maxWidth: '65ch' }}>
              {description}
            </p>
          )}
        </section>

        <section className="rounded-card border border-rule bg-paper-2 p-5">
          <h2 className="font-body text-base font-semibold text-ink">Músculos implicados</h2>
          <dl className="mt-3 space-y-3 font-body text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <dt className="font-medium text-ink-2">Principal:</dt>
              <dd>
                <Badge tone="primary">{getMuscleGroupLabel(exercise.muscle_group)}</Badge>
              </dd>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <dt className="font-medium text-ink-2">Secundarios:</dt>
              <dd className="flex flex-wrap gap-1.5">
                {exercise.secondary_muscles.map((muscle) => (
                  <Badge key={muscle}>{getMuscleGroupLabel(muscle)}</Badge>
                ))}
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </article>
  )
}

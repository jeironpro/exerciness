/* Hallmark · genre: playful · macrostructure: 03-marquee-hero · theme: Hum · design-system: design.md · designed-as-app */
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useExerciseStore } from '@/store/exerciseStore.js'
import ExerciseCard from '@/components/common/ExerciseCard.jsx'
import Spinner from '@/components/ui/Spinner.jsx'

export default function Home() {
  const { exercises, loading, load } = useExerciseStore()

  useEffect(() => {
    const state = useExerciseStore.getState()
    if (state.exercises.length === 0 && !state.loading) state.load()
  }, [load])

  const featured = exercises.slice(0, 6)

  return (
    <>
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
        <div className="relative">
          <div
            className="absolute -left-8 -top-8 h-16 w-16 rounded-full bg-accent opacity-60"
            aria-hidden="true"
          />
          <h1 className="font-display text-[clamp(2.5rem,6vw+1rem,5.5rem)] font-semibold leading-none tracking-tighter text-ink">
            Tu catálogo de
            <br />
            <span className="relative">
              ejercicios
              <span
                className="absolute -bottom-1 left-0 h-3 w-full rounded-pill bg-accent/40"
                aria-hidden="true"
              />
            </span>
          </h1>
        </div>
        <p className="mt-6 max-w-lg font-body text-lg text-ink-2">
          Más de 1.300 movimientos. Busca, filtra, guarda y compara. El gimnasio empieza aquí.
        </p>
        <div className="mt-8 flex gap-4">
          <Link to="/ejercicios" className="btn no-underline">
            Explorar ahora
          </Link>
          <Link to="/favoritos" className="btn btn--outline no-underline">
            Tus favoritos
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-baseline gap-3">
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-ink-2">
            01 · DESTACADOS
          </span>
          <h2 className="font-display text-2xl font-semibold text-ink">Seis para empezar</h2>
        </div>
        {loading && exercises.length === 0 ? (
          <div className="flex justify-center py-12" aria-live="polite">
            <Spinner className="h-8 w-8 text-accent" />
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

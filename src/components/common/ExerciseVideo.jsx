import { useState } from 'react'
import Icon from '@/components/ui/Icon.jsx'

// Visual del ejercicio: muestra la miniatura y permite reproducir la animación
// (GIF) bajo demanda para no descargar los 126 MB de vídeos sin necesidad.
const ExerciseVideo = ({ exercise }) => {
  const [playing, setPlaying] = useState(false)

  return (
    <figure className="flex flex-col items-center gap-3">
      <div className="w-full max-w-[280px] overflow-hidden rounded-lg border border-border bg-surface-alt">
        {playing ? (
          <img
            src={exercise.gif_url}
            alt={`Animación de ${exercise.name}`}
            className="aspect-square w-full object-contain"
          />
        ) : (
          <img
            src={exercise.image}
            alt={exercise.name}
            className="aspect-square w-full object-contain"
          />
        )}
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-md border border-border bg-surface-alt px-3 py-1.5 text-sm font-medium text-text hover:border-primary hover:text-primary"
        onClick={() => setPlaying((value) => !value)}
      >
        <Icon name={playing ? 'pause' : 'play_arrow'} size={18} />
        {playing ? 'Pausar animación' : 'Reproducir animación'}
      </button>
      {exercise.attribution && (
        <figcaption className="text-xs text-text-muted">{exercise.attribution}</figcaption>
      )}
    </figure>
  )
}

export default ExerciseVideo

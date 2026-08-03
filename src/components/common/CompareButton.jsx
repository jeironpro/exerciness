import Icon from '@/components/ui/Icon.jsx'
import { useCompareStore, selectIsComparing, selectCompareCount } from '@/store/compareStore.js'

// Botón para añadir o quitar un ejercicio del comparador.
// Con compact solo muestra el icono (para overlays sobre tarjetas).
const CompareButton = ({ exerciseId, compact = false, className = '' }) => {
  const isComparing = useCompareStore(selectIsComparing(exerciseId))
  const compareCount = useCompareStore(selectCompareCount)
  const maxItems = useCompareStore((state) => state.maxItems)
  const toggleCompare = useCompareStore((state) => state.toggleCompare)
  const atLimit = !isComparing && compareCount >= maxItems

  return (
    <button
      type="button"
      aria-pressed={isComparing}
      onClick={() => toggleCompare(exerciseId)}
      aria-label={isComparing ? 'Quitar de la comparación' : 'Añadir a la comparación'}
      title={atLimit ? 'Se alcanzó el máximo de ejercicios a comparar' : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-md border font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 ${
        isComparing
          ? 'border-primary bg-primary/10 text-primary'
          : 'border-border bg-surface text-text-muted hover:border-primary hover:text-primary'
      } ${compact ? 'h-8 w-8' : 'h-9 px-3 text-sm'} ${className}`}
    >
      <Icon name={isComparing ? 'check_circle' : 'compare_arrows'} size={20} />
      {!compact && (isComparing ? 'En comparación' : 'Comparar')}
    </button>
  )
}

export default CompareButton

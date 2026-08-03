import Button from '@/components/ui/Button.jsx'
import Icon from '@/components/ui/Icon.jsx'
import { useFavoritesStore, selectIsFavorite } from '@/store/favoritesStore.js'

// Botón para añadir o quitar un ejercicio de favoritos.
const FavoriteButton = ({ exerciseId, className = '' }) => {
  const isFavorite = useFavoritesStore(selectIsFavorite(exerciseId))
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)

  return (
    <Button
      variant={isFavorite ? 'primary' : 'outline'}
      aria-pressed={isFavorite}
      onClick={() => toggleFavorite(exerciseId)}
      className={className}
    >
      <Icon
        name={isFavorite ? 'favorite' : 'favorite_border'}
        size={20}
        label={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
      />
      {isFavorite ? 'En favoritos' : 'Favorito'}
    </Button>
  )
}

export default FavoriteButton

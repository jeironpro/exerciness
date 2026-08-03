import { Link } from 'react-router-dom'
import Card from '@/components/ui/Card.jsx'
import Badge from '@/components/ui/Badge.jsx'
import CompareButton from '@/components/common/CompareButton.jsx'
import { getBodyPartLabel, getEquipmentLabel } from '@/utils/helpers.js'

// Tarjeta de ejercicio: miniatura, nombre, etiquetas y acceso al comparador.
const ExerciseCard = ({ exercise }) => (
  <Card className="relative overflow-hidden transition-shadow hover:shadow-md">
    <Link to={`/ejercicio/${exercise.id}`} className="block">
      <img
        src={exercise.image}
        alt={exercise.name}
        loading="lazy"
        className="aspect-square w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-text">{exercise.name}</h3>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Badge tone="primary">{getBodyPartLabel(exercise.body_part)}</Badge>
          <Badge>{getEquipmentLabel(exercise.equipment)}</Badge>
        </div>
      </div>
    </Link>
    <CompareButton exerciseId={exercise.id} compact className="absolute right-3 top-3" />
  </Card>
)

export default ExerciseCard

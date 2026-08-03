import Icon from './Icon.jsx'

// Estado vacío con icono, título, descripción y acción opcional.
const EmptyState = ({ icon = 'fitness_center', title, description, action }) => (
  <div className="flex flex-col items-center gap-2 py-16 text-center">
    <Icon name={icon} size={40} className="text-text-muted" />
    <h2 className="text-lg font-semibold text-text">{title}</h2>
    {description && <p className="max-w-md text-sm text-text-muted">{description}</p>}
    {action}
  </div>
)

export default EmptyState

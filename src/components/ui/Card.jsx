// Contenedor de tarjeta reutilizable con borde y sombra por defecto.
const Card = ({ className = '', children, ...props }) => (
  <div className={`rounded-lg border border-border bg-surface shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

export default Card

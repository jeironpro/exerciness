/* Hallmark · genre: playful · theme: Hum · design-system: design.md · designed-as-app */
const Card = ({ className = '', children, ...props }) => (
  <div
    className={`rounded-card bg-paper shadow-soft transition-shadow duration-220 ${
      className.includes('hover:') ? '' : 'hover:shadow-lift'
    } ${className}`}
    {...props}
  >
    {children}
  </div>
)

export default Card

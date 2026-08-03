// Tonos disponibles para la etiqueta.
const tones = {
  default: 'border border-border bg-surface-alt text-text-muted',
  primary: 'bg-primary/10 text-primary',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  info: 'bg-info/10 text-info',
}

// Etiqueta compacta para mostrar categorías o estados.
const Badge = ({ tone = 'default', className = '', children, ...props }) => (
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone]} ${className}`}
    {...props}
  >
    {children}
  </span>
)

export default Badge

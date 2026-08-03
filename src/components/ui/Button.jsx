import Spinner from './Spinner.jsx'

// Variantes de color del botón.
const variants = {
  primary: 'bg-primary text-primary-contrast hover:bg-primary-hover',
  secondary:
    'border border-border bg-surface-alt text-text hover:border-primary hover:text-primary',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-primary-contrast',
  ghost: 'text-text-muted hover:bg-surface-alt hover:text-text',
}

// Tamaños disponibles.
const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

// Botón reutilizable con variante, tamaño y estado de carga.
const Button = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...props
}) => (
  <button
    type={type}
    disabled={disabled || loading}
    aria-busy={loading || undefined}
    className={`btn ${variants[variant]} ${sizes[size]} ${className}`}
    {...props}
  >
    {loading && <Spinner className="h-4 w-4" />}
    {children}
  </button>
)

export default Button

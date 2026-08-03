// Indicador de carga circular reutilizable.
const Spinner = ({ className = '', ...props }) => (
  <span
    className={`inline-block h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}
    role="status"
    aria-label="Cargando"
    {...props}
  />
)

export default Spinner

import Icon from './Icon.jsx'

// Campo de búsqueda con icono integrado y botón de limpieza.
const SearchInput = ({
  value = '',
  onChange,
  placeholder = 'Buscar...',
  className = '',
  ...props
}) => (
  <div className={`relative ${className}`}>
    <Icon
      name="search"
      size={20}
      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
    />
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="h-10 w-full rounded-md border border-border bg-surface pl-10 pr-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
      {...props}
    />
  </div>
)

export default SearchInput

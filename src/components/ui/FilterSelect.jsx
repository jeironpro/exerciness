import { useId } from 'react'
import Icon from './Icon.jsx'

// Selector de filtro con etiqueta asociada e icono desplegable.
const FilterSelect = ({ label, value, onChange, options = [], className = '', ...props }) => {
  const selectId = useId()
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={selectId} className="text-xs font-medium text-text-muted">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          className="h-10 w-full appearance-none rounded-md border border-border bg-surface pl-3 pr-9 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary"
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Icon
          name="expand_more"
          size={20}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
        />
      </div>
    </div>
  )
}

export default FilterSelect

import { NavLink } from 'react-router-dom'
import Icon from '@/components/ui/Icon.jsx'
import { useFavoritesStore, selectFavoritesCount } from '@/store/favoritesStore.js'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/ejercicios', label: 'Ejercicios' },
  { to: '/favoritos', label: 'Favoritos' },
]

// Barra de navegación principal con enlaces semánticos y contador de favoritos.
export default function Navbar() {
  const favoritesCount = useFavoritesStore(selectFavoritesCount)

  return (
    <header className="border-b border-border bg-surface">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-bold text-text">
          <Icon name="fitness_center" size={24} className="text-primary" />
          <span>exerciness</span>
        </NavLink>
        <ul className="flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? 'font-semibold text-primary' : 'text-text-muted hover:text-text'
                }
              >
                {link.label}
                {link.to === '/favoritos' && favoritesCount > 0 && (
                  <span
                    className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-semibold text-primary-contrast"
                    aria-label={`${favoritesCount} ${favoritesCount === 1 ? 'favorito' : 'favoritos'}`}
                  >
                    {favoritesCount}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

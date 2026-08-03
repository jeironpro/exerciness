/* Hallmark · genre: playful · macrostructure: N7 · theme: Hum · design-system: design.md · designed-as-app */
import { NavLink } from 'react-router-dom'
import Icon from '@/components/ui/Icon.jsx'
import ThemeToggle from '@/components/ui/ThemeToggle.jsx'
import { useFavoritesStore, selectFavoritesCount } from '@/store/favoritesStore.js'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/ejercicios', label: 'Ejercicios' },
  { to: '/favoritos', label: 'Favoritos' },
  { to: '/comparar', label: 'Comparar' },
]

export default function Navbar() {
  const favoritesCount = useFavoritesStore(selectFavoritesCount)

  return (
    <header className="border-b-2 border-rule bg-paper">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wider text-ink no-underline"
        >
          <Icon name="fitness_center" size={22} className="text-accent" />
          <span>EXERCINESS</span>
        </NavLink>
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium uppercase tracking-wider no-underline transition-colors ${
                    isActive ? 'text-accent' : 'text-ink-2 hover:text-accent'
                  }`
                }
              >
                {link.label}
                {link.to === '/favoritos' && favoritesCount > 0 && (
                  <span
                    className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent-3 px-1 text-xs font-bold text-paper"
                    aria-label={`${favoritesCount} ${favoritesCount === 1 ? 'favorito' : 'favoritos'}`}
                  >
                    {favoritesCount}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
          <li className="ml-2">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}

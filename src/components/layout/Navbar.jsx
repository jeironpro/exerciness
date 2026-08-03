import { NavLink } from 'react-router-dom'
import Icon from '@/components/ui/Icon.jsx'

const navLinks = [{ to: '/', label: 'Inicio' }]

// Barra de navegación principal con enlaces semánticos.
export default function Navbar() {
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
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

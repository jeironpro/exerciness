import { NavLink } from 'react-router-dom'

const navLinks = [{ to: '/', label: 'Inicio' }]

// Barra de navegación principal con enlaces semánticos.
export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-bold text-gray-900">
          <span aria-hidden="true">exerciness</span>
        </NavLink>
        <ul className="flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? 'font-semibold text-green-600' : 'text-gray-700 hover:text-gray-900'
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

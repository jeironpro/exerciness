import Icon from './Icon.jsx'
import { useThemeStore, selectTheme, THEMES } from '@/store/themeStore.js'

// Alternador de tema claro/oscuro.
const ThemeToggle = () => {
  const theme = useThemeStore(selectTheme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)
  const isDark = theme === THEMES.DARK

  return (
    <button
      type="button"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-text-muted transition-colors hover:border-primary hover:text-primary"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      <Icon name={isDark ? 'light_mode' : 'dark_mode'} size={20} />
    </button>
  )
}

export default ThemeToggle

import { Component } from 'react'

// Captura errores de renderizado y muestra un fallback en lugar de romper la app.
export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // En futuras versiones se puede registrar el error en un servicio de monitorización.
    // eslint-disable-next-line no-console -- el registro del error es intencional
    console.error('Error de renderizado capturado:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
          <h1 className="text-2xl font-bold text-text">Algo salió mal</h1>
          <p className="text-text-muted">
            Hubo un error inesperado. Recarga la página para continuar.
          </p>
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 font-medium text-primary-contrast hover:bg-primary-hover"
            onClick={() => window.location.reload()}
          >
            Recargar
          </button>
        </main>
      )
    }
    return this.props.children
  }
}

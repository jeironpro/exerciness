import { render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

// Renderiza un componente dentro de un router de memoria para tests de rutas.
export function renderWithRouter(ui, options = {}) {
  const { route = '/', routes = [{ path: '/', element: ui }], ...renderOptions } = options
  const router = createMemoryRouter(routes, { initialEntries: [route] })
  return render(<RouterProvider router={router} />, renderOptions)
}

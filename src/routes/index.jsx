import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/layout/Layout.jsx'
import ErrorBoundary from '@/components/common/ErrorBoundary.jsx'
import Home from '@/pages/Home.jsx'
import NotFound from '@/pages/NotFound.jsx'

// Definición central de rutas de la aplicación.
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

import { useEffect, useState } from 'react'

// Hook genérico de petición: ejecuta un loader y expone data/loading/error.
// Util para consultas simples; el estado global de ejercicios usa el store.
export function useFetch(loader, deps = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    // eslint-disable-next-line react-hooks/set-state-in-effect -- patrón estándar de reset de estado al cambiar dependencias
    setLoading(true)
    loader()
      .then((result) => {
        if (active) {
          setData(result)
          setError(null)
        }
      })
      .catch((err) => {
        if (active) setError(err.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
    // Las dependencias se pasan desde fuera; el hook es genérico.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { data, loading, error }
}

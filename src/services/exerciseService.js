import { isValidExercise } from '@/utils/validators.js'

const EXERCISES_URL = '/data/exercises.json'

// Normaliza las rutas relativas de la media a absolutas para que
// funcionen desde cualquier ruta de la SPA.
function normalizeExercise(exercise) {
  return {
    ...exercise,
    image: `/${exercise.image}`,
    gif_url: `/${exercise.gif_url}`,
  }
}

// Carga y valida el dataset completo de ejercicios desde public/data.
export async function fetchExercises() {
  const response = await fetch(EXERCISES_URL)
  if (!response.ok) {
    throw new Error(`No se pudo cargar el catálogo (HTTP ${response.status}).`)
  }
  const data = await response.json()
  if (!Array.isArray(data)) {
    throw new Error('El dataset de ejercicios no tiene el formato esperado.')
  }
  const invalid = data.filter((exercise) => !isValidExercise(exercise))
  if (invalid.length > 0) {
    throw new Error(`El dataset contiene ${invalid.length} registros inválidos.`)
  }
  return data.map(normalizeExercise)
}

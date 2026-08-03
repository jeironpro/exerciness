import { create } from 'zustand'
import { ALL } from '@/utils/constants.js'

// Store de los filtros del catálogo: búsqueda, filtros y ordenación.
export const useFilterStore = create((set) => ({
  search: '',
  bodyPart: ALL,
  equipment: ALL,
  target: ALL,
  muscleGroup: ALL,
  sortBy: 'name',

  setSearch: (search) => set({ search }),
  setBodyPart: (bodyPart) => set({ bodyPart }),
  setEquipment: (equipment) => set({ equipment }),
  setTarget: (target) => set({ target }),
  setMuscleGroup: (muscleGroup) => set({ muscleGroup }),
  setSortBy: (sortBy) => set({ sortBy }),
  reset: () =>
    set({
      search: '',
      bodyPart: ALL,
      equipment: ALL,
      target: ALL,
      muscleGroup: ALL,
      sortBy: 'name',
    }),
}))

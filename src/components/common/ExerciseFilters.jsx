import SearchInput from '@/components/ui/SearchInput.jsx'
import FilterSelect from '@/components/ui/FilterSelect.jsx'
import { useFilterStore } from '@/store/filterStore.js'
import {
  getDistinctOptions,
  getBodyPartLabel,
  getEquipmentLabel,
  getTargetLabel,
  getMuscleGroupLabel,
} from '@/utils/helpers.js'
import { SORT_OPTIONS } from '@/utils/constants.js'

// Barra de filtros y ordenación del catálogo de ejercicios.
const ExerciseFilters = ({ exercises }) => {
  const {
    search,
    bodyPart,
    equipment,
    target,
    muscleGroup,
    sortBy,
    setSearch,
    setBodyPart,
    setEquipment,
    setTarget,
    setMuscleGroup,
    setSortBy,
  } = useFilterStore()

  return (
    <div className="flex flex-col gap-4">
      <SearchInput
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Buscar ejercicio por nombre..."
        aria-label="Buscar ejercicio"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <FilterSelect
          label="Grupo corporal"
          value={bodyPart}
          onChange={(event) => setBodyPart(event.target.value)}
          options={getDistinctOptions(exercises, 'body_part', getBodyPartLabel)}
        />
        <FilterSelect
          label="Equipo"
          value={equipment}
          onChange={(event) => setEquipment(event.target.value)}
          options={getDistinctOptions(exercises, 'equipment', getEquipmentLabel)}
        />
        <FilterSelect
          label="Objetivo"
          value={target}
          onChange={(event) => setTarget(event.target.value)}
          options={getDistinctOptions(exercises, 'target', getTargetLabel)}
        />
        <FilterSelect
          label="Músculo"
          value={muscleGroup}
          onChange={(event) => setMuscleGroup(event.target.value)}
          options={getDistinctOptions(exercises, 'muscle_group', getMuscleGroupLabel)}
        />
        <FilterSelect
          label="Ordenar"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          options={SORT_OPTIONS}
        />
      </div>
    </div>
  )
}

export default ExerciseFilters

import { Categories } from '../data/data'

export type FilmT = {
  characters: string[]
  created: string
  director: string
  edited: string
  episode_id: number
  opening_crawl: string
  planets: string[]
  producer: string
  release_date: string
  species: string[]
  starships: string[]
  title: string
  url: string
  vehicles: string[]
  image: string
}

export type FilmsListT = {
  count: number
  next: string
  previous: string
  results: FilmT[]
  images: string[]
}

export type PersonT = {
  name: string
  birth_year: string
  eye_color: string
  gender: string
  hair_color: string
  height: string
  mass: string
  skin_color: string
  homeworld: string
  films: string[]
  species: string[]
  starships: string[]
  vehicles: string[]
  url: string
  created: string
  edited: string
  image: string
}

export type PeopleListT = {
  count: number
  next: string
  previous: string
  results: PersonT[]
  images: string[]
}

export type SpeciesOneT = {
  name: string
  classification: string
  designation: string
  average_height: string
  average_lifespan: string
  eye_colors: string
  hair_colors: string
  skin_colors: string
  language: string
  homeworld: string
  people: string[]
  films: string[]
  url: string
  created: string
  edited: string
  image: string
}

export type SpeciesListT = {
  count: number
  next: string
  previous: string
  results: SpeciesOneT[]
  images: string[]
}

export type PlanetsT = {
  name: string
  diameter: string
  rotation_period: string
  orbital_period: string
  gravity: string
  population: string
  climate: string
  terrain: string
  surface_water: string
  residents: string[]
  films: string[]
  url: string
  created: string
  edited: string
  image: string
}

export type PlanetsListT = {
  count: number
  next: string
  previous: string
  results: PlanetsT[]
  images: string[]
}

export type StarshipsT = {
  url: string
  image: string
}
export type VehiclesT = {
  url: string
  image: string
}

export type StyledToggleT = {
  width?: number
  height?: number
}

export type ToggleProps = {
  onChange: () => void
  width?: number
  height?: number
}

export type StyledToggleSpanT = {
  isToggled: boolean
  indent?: number
} & StyledToggleT

export type CardImageT = {
  src?: string
  alt: string
}

export type CategoryT = FilmT | PersonT | SpeciesOneT | PlanetsT | StarshipsT | VehiclesT
export type CategoryResponseT = FilmsListT | PeopleListT | SpeciesListT | PlanetsListT
export type ImagePaths = Omit<Record<Categories, string>, Categories.CHARACTERS>

export type EnumCategoriesT =
  | 'people'
  | 'characters'
  | 'species'
  | 'planets'
  | 'starships'
  | 'vehicles'
  | 'films'

export type CardT = {
  src?: string
  toNavigate: string
  category: CategoryT | string
}
export type DetailedCardSectionT = {
  title: string
  data: string[]
}

export type ShowMoreT = {
  onClick: () => void
  nameIsShow?: boolean
}

export type DetailedCardContainerBottomT = {
  title: string
  data: string[] | undefined
}

export type BottomDataT = {
  bottomData: DetailedCardContainerBottomT[]
}

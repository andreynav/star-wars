import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react'

import { Categories } from '../data/data'

type CommonSectionPropsT = {
  created: string
  edited: string
  url: string
  image: string
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
} & CommonSectionPropsT

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
} & CommonSectionPropsT

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
} & CommonSectionPropsT

export type StarshipsT = {
  name: string
  model: string
  starship_class: string
  manufacturer: string
  cost_in_credits: string
  length: string
  crew: string
  passengers: string
  max_atmosphering_speed: string
  hyperdrive_rating: string
  MGLT: string
  cargo_capacity: string
  consumables: string
  films: string[]
  pilots: string[]
} & CommonSectionPropsT

export type VehiclesT = {
  name: string
  model: string
  vehicle_class: string
  manufacturer: string
  cost_in_credits: string
  length: string
  crew: string
  passengers: string
  max_atmosphering_speed: string
  cargo_capacity: string
  consumables: string
  films: string[]
  pilots: string[]
} & CommonSectionPropsT

export type FilmT = {
  title: string
  characters: string[]
  director: string
  episode_id: number
  opening_crawl: string
  planets: string[]
  producer: string
  release_date: string
  species: string[]
  starships: string[]
  vehicles: string[]
} & CommonSectionPropsT

export type CategoryT = FilmT | PersonT | SpeciesOneT | PlanetsT | StarshipsT | VehiclesT
export type ImagePaths = Omit<Record<Categories, string>, Categories.CHARACTERS>

export type SectionListT<T extends CategoryT> = {
  count: number
  next: string
  previous: string
  results: T[]
  images: string[]
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

export type EnumCategoriesT =
  | 'people'
  | 'characters'
  | 'species'
  | 'planets'
  | 'starships'
  | 'vehicles'
  | 'films'

export type CategoryPropT = {
  category: EnumCategoriesT
}

export type CardT = {
  src?: string
  toNavigate: string
  category: CategoryT | string
  name?: string
}
export type DetailedCardSectionT = {
  title: string
  data: string[]
}

export type ShowMoreT = {
  children: ReactNode
}

export type DetailedCardContainerBottomT = {
  title: string
  data: string[] | undefined
}

export type BottomDataT = {
  bottomData: DetailedCardContainerBottomT[]
}

export type PaginatorT = {
  next: boolean
  previous: boolean
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

export type CategoryCardsListT = {
  categoryItems: CategoryT[]
  imagesSrc: string[] | null
  category: string
}

export type CategoryCardT = {
  categoryItem: CategoryT
  category: string
}

export type ThumbnailsListT = {
  data: string[]
  categoryItems: { [key: string]: string[] }
}

export type DetailedCardSectionDataT = {
  data: string[]
  categoryItems: { [key: string]: string[] }
  toggleShowMore: () => void
  isShowMoreVisible: boolean
}

export type SectionContextT = {
  collapse?: () => void
  expand?: () => void
  isDataExists?: boolean
  isCollapsed: boolean
  limit: number
  data: string[]
}

export type CollapseExpandT = {
  children: ReactElement
}

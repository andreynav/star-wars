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
}

export type FilmsListT = {
  count: number
  next: string
  previous: string
  results: FilmT[]
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
}

export type PeopleListT = {
  count: number
  next: string
  previous: string
  results: PersonT[]
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

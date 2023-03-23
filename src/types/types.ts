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

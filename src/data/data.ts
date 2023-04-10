export enum Categories {
  PEOPLE = 'people',
  CHARACTERS = 'characters',
  SPECIES = 'species',
  PLANETS = 'planets',
  STARSHIPS = 'starships',
  VEHICLES = 'vehicles',
  FILMS = 'films'
}

export const bottomDataCategoryProps = {
  people: [Categories.FILMS, Categories.SPECIES, Categories.STARSHIPS, Categories.VEHICLES],
  films: [
    Categories.PLANETS,
    Categories.CHARACTERS,
    Categories.SPECIES,
    Categories.STARSHIPS,
    Categories.VEHICLES
  ],
  species: [Categories.PEOPLE, Categories.FILMS]
}

export const CardInfoCategoryData = {
  [Categories.PEOPLE]: [
    'name',
    'gender',
    'birth_year',
    'eye_color',
    'hair_color',
    'height',
    'mass',
    'skin_color',
    'homeworld'
  ],
  [Categories.FILMS]: [
    'title',
    'episode_id',
    'director',
    'producer',
    'release_date',
    'opening_crawl'
  ],
  [Categories.SPECIES]: [
    'name',
    'classification',
    'language',
    'designation',
    'eye_colors',
    'hair_colors',
    'average_height',
    'average_lifespan',
    'skin_colors',
    'homeworld'
  ]
}

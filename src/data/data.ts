export enum Categories {
  PEOPLE = 'people',
  CHARACTERS = 'characters',
  SPECIES = 'species',
  PLANETS = 'planets',
  STARSHIPS = 'starships',
  VEHICLES = 'vehicles',
  FILMS = 'films'
}

export const bottomDataCategoryProps: { [key: string]: string[] } = {
  [Categories.PEOPLE]: [
    Categories.FILMS,
    Categories.SPECIES,
    Categories.STARSHIPS,
    Categories.VEHICLES
  ],
  [Categories.SPECIES]: [Categories.PEOPLE, Categories.FILMS],
  [Categories.PLANETS]: [Categories.FILMS, 'residents'],
  [Categories.STARSHIPS]: [Categories.FILMS, 'pilots'],
  // [Categories.VEHICLES]: [Categories.FILMS],
  [Categories.FILMS]: [
    Categories.PLANETS,
    Categories.CHARACTERS,
    Categories.SPECIES,
    Categories.STARSHIPS,
    Categories.VEHICLES
  ]
}

export const CardInfoCategoryData: { [K in Categories]: string[] } = {
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
  ],
  [Categories.PLANETS]: [
    'name',
    'diameter',
    'population',
    'climate',
    'terrain',
    'surface_water',
    'rotation_period',
    'orbital_period',
    'gravity'
  ],
  [Categories.CHARACTERS]: [],
  [Categories.STARSHIPS]: [
    'name',
    'model',
    'starship_class',
    'manufacturer',
    'cost_in_credits',
    'length',
    'crew',
    'passengers',
    'max_atmosphering_speed',
    'hyperdrive_rating',
    'MGLT',
    'cargo_capacity',
    'consumables'
  ],
  [Categories.VEHICLES]: [],
  [Categories.FILMS]: [
    'title',
    'episode_id',
    'director',
    'producer',
    'release_date',
    'opening_crawl'
  ]
}

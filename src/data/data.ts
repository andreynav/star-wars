import { EnumCategoriesT } from '../types/types'

export enum Categories {
  PEOPLE = 'people',
  CHARACTERS = 'characters',
  SPECIES = 'species',
  PLANETS = 'planets',
  STARSHIPS = 'starships',
  VEHICLES = 'vehicles',
  FILMS = 'films'
}

export const bottomDataCategoryProps: { [key: string]: EnumCategoriesT[] } = {
  [Categories.PEOPLE]: [
    Categories.FILMS,
    Categories.SPECIES,
    Categories.STARSHIPS,
    Categories.VEHICLES
  ],
  [Categories.SPECIES]: [Categories.PEOPLE, Categories.FILMS],
  // [Categories.PLANETS]: [Categories.FILMS],
  // [Categories.STARSHIPS]: [Categories.FILMS],
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
  [Categories.PLANETS]: [],
  [Categories.CHARACTERS]: [],
  [Categories.STARSHIPS]: [],
  [Categories.VEHICLES]: [],
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
  [Categories.FILMS]: [
    'title',
    'episode_id',
    'director',
    'producer',
    'release_date',
    'opening_crawl'
  ]
}

import axios from 'axios'

import { CategoryResponseT, CategoryT } from '../types/types'
import { getIdFromUrl } from '../utils/getIdFromUrl'

const swapi = axios.create({
  baseURL: 'https://swapi.dev/api/',
  withCredentials: false
})

export enum Categories {
  PEOPLE = 'people',
  CHARACTERS = 'characters',
  SPECIES = 'species',
  PLANETS = 'planets',
  STARSHIPS = 'starships',
  VEHICLES = 'vehicles',
  FILMS = 'films'
}

export const imageBaseApi = 'https://starwars-visualguide.com/assets/img/'

export const apiImgPeople = `${imageBaseApi}${Categories.CHARACTERS}/`
export const apiImgSpecies = `${imageBaseApi}${Categories.SPECIES}/`
export const apiImgPlanets = `${imageBaseApi}${Categories.PLANETS}/`
export const apiImgStarships = `${imageBaseApi}${Categories.STARSHIPS}/`
export const apiImgVehicles = `${imageBaseApi}${Categories.VEHICLES}/`
export const apiImgFilms = `${imageBaseApi}${Categories.FILMS}/`

export const getImageCategoryPath = (category: string) => {
  let path: string | null = null
  switch (category) {
    case Categories.PEOPLE:
      path = apiImgPeople
      break
    case Categories.SPECIES:
      path = apiImgSpecies
      break
    case Categories.PLANETS:
      path = apiImgPlanets
      break
    case Categories.STARSHIPS:
      path = apiImgStarships
      break
    case Categories.VEHICLES:
      path = apiImgVehicles
      break
    case Categories.FILMS:
      path = apiImgFilms
      break
    default:
      console.error('There is no such category')
  }
  return path
}

export const swAPI = {
  getCategoryItemsList: (category: string, pageNumber: number) => {
    return swapi
      .get<CategoryResponseT>(`${category}/?page=${pageNumber}`)
      .then(async (response) => {
        const imgPath = await getImageCategoryPath(category)
        response.data.images = response.data.results.map(
          (item) => `${imgPath}${getIdFromUrl(item.url)}.jpg`
        )
        return response.data
      })
  },
  getCategoryItem: (category: string, id: string) => {
    return swapi.get<CategoryT>(`${category}/${id}/`).then((response) => response.data)
  }
}

import axios from 'axios'

import { CategoryResponseT, FilmT, PersonT, SpeciesOneT } from '../types/types'
import { getIdFromUrl } from '../utils/getIdFromUrl'

const swapi = axios.create({
  baseURL: 'https://swapi.dev/api/',
  withCredentials: false
})

export const imageBaseApi = 'https://starwars-visualguide.com/assets/img/'

export const apiImgPeople = `${imageBaseApi}characters/`
export const apiImgSpecies = `${imageBaseApi}species/`
export const apiImgPlanets = `${imageBaseApi}planets/`
export const apiImgStarships = `${imageBaseApi}starships/`
export const apiImgVehicles = `${imageBaseApi}vehicles/`
export const apiImgFilms = `${imageBaseApi}films/`

export const getImageCategoryPath = (category: string) => {
  let path: string | null = null
  switch (category) {
    case 'people':
      path = apiImgPeople
      break
    case 'species':
      path = apiImgSpecies
      break
    case 'planets':
      path = apiImgPlanets
      break
    case 'starships':
      path = apiImgStarships
      break
    case 'vehicles':
      path = apiImgVehicles
      break
    case 'films':
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
  getPerson: (id: string) => {
    return swapi.get<PersonT>(`people/${id}/`).then((response) => response.data)
  },
  getSpeciesOne: (id: string) => {
    return swapi.get<SpeciesOneT>(`species/${id}/`).then((response) => response.data)
  },
  getFilm: (id: string) => {
    return swapi.get<FilmT>(`films/${id}/`).then((response) => response.data)
  }
}

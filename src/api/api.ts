import axios from 'axios'

import { Categories } from '../data/data'
import { CategoryResponseT, CategoryT, ImagePaths } from '../types/types'
import { getIdFromUrl } from '../utils/getIdFromUrl'

const swApi = axios.create({
  baseURL: 'https://swapi.dev/api/',
  withCredentials: false
})

export const imageBaseApi = 'https://starwars-visualguide.com/assets/img/'

export const imagePaths: ImagePaths = {
  [Categories.PEOPLE]: `${imageBaseApi}${Categories.CHARACTERS}/`,
  [Categories.SPECIES]: `${imageBaseApi}${Categories.SPECIES}/`,
  [Categories.PLANETS]: `${imageBaseApi}${Categories.PLANETS}/`,
  [Categories.STARSHIPS]: `${imageBaseApi}${Categories.STARSHIPS}/`,
  [Categories.VEHICLES]: `${imageBaseApi}${Categories.VEHICLES}/`,
  [Categories.FILMS]: `${imageBaseApi}${Categories.FILMS}/`
}

export const swAPI = {
  getCategoryItemsList: (category: string, pageNumber: number) => {
    return swApi
      .get<CategoryResponseT>(`${category}/?page=${pageNumber}`)
      .then(async (response) => {
        const imgPath = imagePaths[category as keyof ImagePaths]
        response.data.images = response.data.results.map(
          (item) => `${imgPath}${getIdFromUrl(item.url)}.jpg`
        )
        return response.data
      })
  },
  getCategoryItem: (category: string, id: string) => {
    return swApi.get<CategoryT>(`${category}/${id}/`).then(async (response) => {
      response.data.image = `${imagePaths[category as keyof ImagePaths]}${id}.jpg`
      return response.data
    })
  }
}

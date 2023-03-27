import axios from 'axios'

import { FilmsListT, PeopleListT } from '../types/types'

const swapi = axios.create({
  baseURL: 'https://swapi.dev/api/',
  withCredentials: false
})

export const swapiImgFilms = 'https://starwars-visualguide.com/assets/img/films/'
export const swapiImgPeople = 'https://starwars-visualguide.com/assets/img/characters/'
export const swapiImgPlanets = 'https://starwars-visualguide.com/assets/img/planets/'

export const swAPI = {
  getAllPeople: (pageNumber = 1) => {
    return swapi.get<PeopleListT>(`/people/?page=${pageNumber}`).then((response) => response.data)
  },
  getAllFilms: () => {
    return swapi.get<FilmsListT>('films/').then((response) => response.data)
  }
  // getAllPlanets: () => {
  //   return swapi.get<FilmsListT>('films/').then((response) => response.data)
  // }
}

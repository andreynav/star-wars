import axios from 'axios'

import { FilmT, FilmsListT, PeopleListT, PersonT } from '../types/types'

const swapi = axios.create({
  baseURL: 'https://swapi.dev/api/',
  withCredentials: false
})

export const imageBaseApi = 'https://starwars-visualguide.com/assets/img/'

export const apiImgFilms = `${imageBaseApi}films/`
export const apiImgPeople = `${imageBaseApi}characters/`
export const apiImgPlanets = `${imageBaseApi}planets/`

export const swAPI = {
  getAllPeople: (pageNumber = 1) => {
    return swapi.get<PeopleListT>(`people/?page=${pageNumber}`).then((response) => response.data)
  },
  getPerson: (id: string) => {
    return swapi.get<PersonT>(`people/${id}/`).then((response) => response.data)
  },
  getAllFilms: () => {
    return swapi.get<FilmsListT>(`films/`).then((response) => response.data)
  },
  getFilm: (id: string) => {
    return swapi.get<FilmT>(`films/${id}/`).then((response) => response.data)
  }
  // getAllPlanets: () => {
  //   return swapi.get<FilmsListT>('films/').then((response) => response.data)
  // }
}

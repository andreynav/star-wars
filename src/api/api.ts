import axios from 'axios'

import { FilmsListT } from '../types/types'

export const swapi = axios.create({
  baseURL: 'https://swapi.dev/api/',
  withCredentials: false
})

export const swAPI = {
  getAllFilms: () => {
    return swapi.get<FilmsListT>('films/').then((response) => response.data)
  }
}

import { useEffect, useState } from 'react'

import { apiImgFilms, swAPI } from '../../api/api'
import { FilmT } from '../../types/types'
import { CardContainer } from '../CardContainer/CardContainer'
import { CardListContainer } from '../CardListContainer/CardListContainer'
import { Container } from '../Container/Container'
import { ImageContainer } from '../ImageContainer/ImageContainer'

export const Films = ({ error, setError }: any) => {
  const [filmsList, setFilmsList] = useState<FilmT[]>([])

  useEffect(() => {
    const fetchFilmsList = async () => {
      try {
        const data = await swAPI.getAllFilms()
        setError(null)
        // setFilmsList(sortedFilmsList(data.results))
        setFilmsList(data.results)
      } catch (error: any) {
        setError({ message: error.message })
      }
    }

    fetchFilmsList().then()
  }, [])

  // const sortedFilmsList = (list: FilmT[]) => {
  //   return list.sort(function (a: FilmT, b: FilmT) {
  //     return a.episode_id - b.episode_id
  //   })
  // }

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <CardListContainer>
          {filmsList.map((film, index) => {
            return (
              <CardContainer key={film.title}>
                <ImageContainer src={`${apiImgFilms}${index + 1}.jpg`} alt={'poster'} />
                <div>
                  <b>Title:</b> {film.title}
                </div>
                <div>
                  <b>Episode:</b> {film.episode_id}
                </div>
                <div>
                  <b>Director:</b> {film.director}
                </div>
                <div>
                  <b>Producer:</b> {film.producer}
                </div>
                <div>
                  <b>Film released:</b> {film.release_date}
                </div>
                <div>
                  <b>Opening crawl:</b> {film.opening_crawl}
                </div>
                <div>
                  <b>Planets:</b>{' '}
                  <a href={film.planets[0]} target="_blank" rel="noopener noreferrer">
                    {film.planets[0]}
                  </a>
                </div>
                <div>
                  <b>Characters:</b>{' '}
                  <a href={film.characters[0]} target="_blank" rel="noopener noreferrer">
                    {film.characters[0]}
                  </a>
                </div>
                <div>
                  <b>Species:</b>{' '}
                  <a href={film.species[0]} target="_blank" rel="noopener noreferrer">
                    {film.species[0]}
                  </a>
                </div>
                <div>
                  <b>Starships:</b>{' '}
                  <a href={film.starships[0]} target="_blank" rel="noopener noreferrer">
                    {film.starships[0]}
                  </a>
                </div>
                <div>
                  <b>Vehicles:</b>{' '}
                  <a href={film.vehicles[0]} target="_blank" rel="noopener noreferrer">
                    {film.vehicles[0]}
                  </a>
                </div>
                <div>
                  <b>Url:</b>{' '}
                  <a href={film.url} target="_blank" rel="noopener noreferrer">
                    {film.url}
                  </a>
                </div>
              </CardContainer>
            )
          })}
        </CardListContainer>
      )}
    </Container>
  )
}

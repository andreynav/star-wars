import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { apiImgFilms, swAPI } from '../../api/api'
import { FilmT } from '../../types/types'
import { getIdFromUrl } from '../../utils/getIdFromUrl'
import { CardContainer } from '../CardContainer/CardContainer'
import { CardListContainer } from '../CardListContainer/CardListContainer'
import { Container } from '../Container/Container'
import { ImageContainer } from '../ImageContainer/ImageContainer'

export const Film = ({ error, setError }: any) => {
  const { id } = useParams<{ id: string }>()
  const [film, setFilm] = useState<FilmT | null>(null)

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        if (id) {
          const data = await swAPI.getFilm(id)
          setError(null)
          setFilm(data)
        }
      } catch (error: any) {
        setError({ message: error.message })
      }
    }

    fetchFilm().then()
  }, [])

  if (!film) return <div>loading...</div>

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <CardListContainer>
          <CardContainer key={film?.title}>
            <ImageContainer src={`${apiImgFilms}${getIdFromUrl(film.url)}.jpg`} alt={'poster'} />
            <div>
              <b>Title:</b> {film?.title}
            </div>
            <div>
              <b>Episode:</b> {film?.episode_id}
            </div>
            <div>
              <b>Director:</b> {film?.director}
            </div>
            <div>
              <b>Producer:</b> {film?.producer}
            </div>
            <div>
              <b>Film released:</b> {film?.release_date}
            </div>
            <div>
              <b>Opening crawl:</b> {film?.opening_crawl}
            </div>
            <div>
              <b>Planets:</b>{' '}
              <a href={film?.planets[0]} target="_blank" rel="noopener noreferrer">
                {film.planets[0]}
              </a>
            </div>
            <div>
              <b>Characters:</b>{' '}
              <a href={film?.characters[0]} target="_blank" rel="noopener noreferrer">
                {film.characters[0]}
              </a>
            </div>
            <div>
              <b>Species:</b>{' '}
              <a href={film?.species[0]} target="_blank" rel="noopener noreferrer">
                {film.species[0]}
              </a>
            </div>
            <div>
              <b>Starships:</b>{' '}
              <a href={film?.starships[0]} target="_blank" rel="noopener noreferrer">
                {film.starships[0]}
              </a>
            </div>
            <div>
              <b>Vehicles:</b>{' '}
              <a href={film?.vehicles[0]} target="_blank" rel="noopener noreferrer">
                {film.vehicles[0]}
              </a>
            </div>
          </CardContainer>
        </CardListContainer>
      )}
    </Container>
  )
}

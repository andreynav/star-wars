import { useEffect, useState } from 'react'

import { apiImgFilms, swAPI } from '../../api/api'
import { FilmT } from '../../types/types'
import { getIdFromUrl } from '../../utils/getIdFromUrl'
import { Card } from '../Card/Card'
import { CardListContainer } from '../CardListContainer/CardListContainer'
import { Container } from '../Container/Container'

export const Films = ({ error, setError }: any) => {
  const [filmsList, setFilmsList] = useState<FilmT[] | null>(null)

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

  if (!filmsList) return <div>loading...</div>

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <CardListContainer>
          {filmsList.map((film) => {
            return (
              <Card
                key={film.title}
                category={film}
                toNavigate={`/films/${getIdFromUrl(film.url)}`}
                src={`${apiImgFilms}${getIdFromUrl(film.url)}.jpg`}
              />
            )
          })}
        </CardListContainer>
      )}
    </Container>
  )
}

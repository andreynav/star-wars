import { useEffect, useState } from 'react'

import { apiImgFilms, swAPI } from '../../api/api'
import { FilmT } from '../../types/types'
import { getIdFromUrl } from '../../utils/getIdFromUrl'
import { CardContainer } from '../CardContainer/CardContainer'
import { CardListContainer } from '../CardListContainer/CardListContainer'
import { Container } from '../Container/Container'
import { ImageContainer } from '../ImageContainer/ImageContainer'
import { StyledNavLink } from '../StyledNavLink/StyledNavLink'

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
              <StyledNavLink key={film.title} to={`/films/${getIdFromUrl(film.url)}`}>
                <CardContainer>
                  <ImageContainer
                    src={`${apiImgFilms}${getIdFromUrl(film.url)}.jpg`}
                    alt={'poster'}
                  />
                  <div>
                    <b>Title:</b> {film.title}
                  </div>
                </CardContainer>
              </StyledNavLink>
            )
          })}
        </CardListContainer>
      )}
    </Container>
  )
}

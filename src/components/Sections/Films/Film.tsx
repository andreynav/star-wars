import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { Categories, apiImgFilms, swAPI } from '../../../api/api'
import { CategoryT, FilmT } from '../../../types/types'
import { getIdFromUrl } from '../../../utils/getIdFromUrl'
import { DetailedCardContainer } from '../../DetailedCard/DetailedCardContainer/DetailedCardContainer'
import { DetailedCardContainerBottom } from '../../DetailedCard/DetailedCardContainerBottom/DetailedCardContainerBottom'
import { DetailedCardContainerTop } from '../../DetailedCard/DetailedCardContainerTop/DetailedCardContainerTop'
import { CardImage } from '../../common/CardImage/CardImage'
import { Container } from '../../common/Container/Container'

export const Film = () => {
  const { id } = useParams<{ id: string }>()
  const [error, setError] = useState<{ message: string; status?: number } | null>(null)
  const [film, setFilm] = useState<FilmT | null>(null)

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        if (id) {
          const data = await swAPI.getCategoryItem(Categories.FILMS, id)
          setError(null)
          // @ts-ignore
          setFilm(data)
        }
      } catch (error: any) {
        setError({ message: error.message })
      }
    }

    fetchFilm().then()
  }, [])

  if (!film) return <div>loading...</div>

  const bottomDataProps = [
    Categories.PLANETS,
    Categories.CHARACTERS,
    Categories.SPECIES,
    Categories.STARSHIPS,
    Categories.VEHICLES
  ]
  const bottomData = bottomDataProps.map((prop) => {
    // @ts-ignore
    const data = film[prop as keyof CategoryT]
    return { title: `Related ${prop}`, data: Array.isArray(data) ? data : undefined }
  })

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <DetailedCardContainer>
          <DetailedCardContainerTop>
            <CardImage src={`${apiImgFilms}${getIdFromUrl(film.url)}.jpg`} alt={'poster'} />
            <CardInfo>
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
            </CardInfo>
          </DetailedCardContainerTop>
          <DetailedCardContainerBottom bottomData={bottomData} />
        </DetailedCardContainer>
      )}
    </Container>
  )
}

const CardInfo = styled.div`
  padding: 1rem;

  & div {
    padding: 0.5rem 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }
`

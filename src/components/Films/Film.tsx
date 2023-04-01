import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { apiImgFilms, swAPI } from '../../api/api'
import { FilmT } from '../../types/types'
import { getIdFromUrl } from '../../utils/getIdFromUrl'
import { Container } from '../Container/Container'
import { DetailedCardContainer } from '../DetailedCardContainer/DetailedCardContainer'
import { DetailedCardSection } from '../DetailedCardSection/DetailedCardSection'
import { CardImage } from '../ImageContainer/ImageContainer'

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
        <DetailedCardContainer>
          <TopContainer>
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
          </TopContainer>
          <BottomContainer>
            <DetailedCardSection title={'Related planets'} data={film?.planets} />
            <DetailedCardSection title={'Related characters'} data={film.characters} />
            <DetailedCardSection title={'Related species'} data={film?.species} />
            <DetailedCardSection title={'Related starships'} data={film?.starships} />
            <DetailedCardSection title={'Related vehicles'} data={film?.vehicles} />
          </BottomContainer>
        </DetailedCardContainer>
      )}
    </Container>
  )
}

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

const CardInfo = styled.div`
  padding: 1rem;

  & div {
    padding: 0.5rem 0;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }
`

const BottomContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }
`

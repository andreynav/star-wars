import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { apiImgPeople, swAPI } from '../../api/api'
import { PersonT } from '../../types/types'
import { Container } from '../Container/Container'
import { DetailedCardContainer } from '../DetailedCardContainer/DetailedCardContainer'
import { DetailedCardSection } from '../DetailedCardSection/DetailedCardSection'
import { CardImage } from '../ImageContainer/ImageContainer'

export const Person = ({ error, setError }: any) => {
  const { id } = useParams<{ id: string }>()
  const [person, setPerson] = useState<PersonT | null>(null)

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        if (id) {
          const data = await swAPI.getPerson(id)
          setError(null)
          setPerson(data)
        }
      } catch (error: any) {
        setError({ message: error.message })
      }
    }

    fetchPerson().then()
  }, [])

  if (!person) return <div>loading...</div>

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <DetailedCardContainer>
          <TopContainer>
            <CardImage src={`${apiImgPeople}${id}.jpg`} alt={'poster'} />
            <CardInfo>
              <div>
                <b>Name:</b> {person?.name}
              </div>
              <div>
                <b>Gender:</b> {person?.gender}
              </div>
              <div>
                <b>Birth year:</b> {person?.birth_year}
              </div>
              <div>
                <b>Eye color:</b> {person?.eye_color}
              </div>
              <div>
                <b>Hair color:</b> {person?.hair_color}
              </div>
              <div>
                <b>Height:</b> {person?.height}
              </div>
              <div>
                <b>Mass:</b> {person?.mass}
              </div>
              <div>
                <b>Skin color:</b> {person?.skin_color}
              </div>
              <div>
                <b>Home world:</b> {person?.homeworld}
              </div>
            </CardInfo>
          </TopContainer>
          <BottomContainer>
            <DetailedCardSection title={'Related films'} data={person?.films} />
            <DetailedCardSection title={'Related species'} data={person?.species} />
            <DetailedCardSection title={'Related starships'} data={person?.starships} />
            <DetailedCardSection title={'Related vehicles'} data={person?.vehicles} />
          </BottomContainer>
        </DetailedCardContainer>
      )}
    </Container>
  )
}

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

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
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }
`

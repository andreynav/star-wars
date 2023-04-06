import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { apiImgPeople, swAPI } from '../../../api/api'
import { PersonT } from '../../../types/types'
import { DetailedCardContainer } from '../../DetailedCard/DetailedCardContainer/DetailedCardContainer'
import { DetailedCardContainerBottom } from '../../DetailedCard/DetailedCardContainerBottom/DetailedCardContainerBottom'
import { DetailedCardContainerTop } from '../../DetailedCard/DetailedCardContainerTop/DetailedCardContainerTop'
import { CardImage } from '../../common/CardImage/CardImage'
import { Container } from '../../common/Container/Container'

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

  const bottomDataProps = ['films', 'species', 'starships', 'vehicles']
  const bottomData = bottomDataProps.map((prop) => {
    const data = person[prop]
    return { title: `Related ${prop}`, data: Array.isArray(data) ? data : undefined }
  })

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <DetailedCardContainer>
          <DetailedCardContainerTop>
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

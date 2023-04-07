import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { apiImgSpecies, swAPI } from '../../../api/api'
import { CategoryT, SpeciesOneT } from '../../../types/types'
import { DetailedCardContainer } from '../../DetailedCard/DetailedCardContainer/DetailedCardContainer'
import { DetailedCardContainerBottom } from '../../DetailedCard/DetailedCardContainerBottom/DetailedCardContainerBottom'
import { DetailedCardContainerTop } from '../../DetailedCard/DetailedCardContainerTop/DetailedCardContainerTop'
import { CardImage } from '../../common/CardImage/CardImage'
import { Container } from '../../common/Container/Container'

export const SpeciesOne = ({ error, setError }: any) => {
  const { id } = useParams<{ id: string }>()
  const [speciesOne, setSpeciesOne] = useState<SpeciesOneT | null>(null)

  useEffect(() => {
    const fetchSpeciesOne = async () => {
      try {
        if (id) {
          const data = await swAPI.getSpeciesOne(id)
          setError(null)
          setSpeciesOne(data)
        }
      } catch (error: any) {
        setError({ message: error.message })
      }
    }

    fetchSpeciesOne().then()
  }, [])

  if (!speciesOne) return <div>loading...</div>

  const bottomDataProps = ['people', 'films']
  const bottomData = bottomDataProps.map((prop) => {
    const data = speciesOne[prop as keyof CategoryT]
    return { title: `Related ${prop}`, data: Array.isArray(data) ? data : undefined }
  })

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <DetailedCardContainer>
          <DetailedCardContainerTop>
            <CardImage src={`${apiImgSpecies}${id}.jpg`} alt={'poster'} />
            <CardInfo>
              <div>
                <b>Name:</b> {speciesOne?.name}
              </div>
              <div>
                <b>Classification:</b> {speciesOne?.classification}
              </div>
              <div>
                <b>Language:</b> {speciesOne?.language}
              </div>
              <div>
                <b>Designation:</b> {speciesOne?.designation}
              </div>
              <div>
                <b>Eye colors:</b> {speciesOne?.eye_colors}
              </div>
              <div>
                <b>Hair colors:</b> {speciesOne?.hair_colors}
              </div>
              <div>
                <b>Average height:</b> {speciesOne?.average_height}
              </div>
              <div>
                <b>Average lifespan:</b> {speciesOne?.average_lifespan}
              </div>
              <div>
                <b>Skin colors:</b> {speciesOne?.skin_colors}
              </div>
              <div>
                <b>Home world:</b> {speciesOne?.homeworld ?? 'n/a'}
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

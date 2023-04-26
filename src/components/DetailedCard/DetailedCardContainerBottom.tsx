import styled from 'styled-components'

import { BottomDataT, DetailedCardContainerBottomT } from '../../types/types'
import { DetailedCardSection } from './DetailedCardSection/DetailedCardSection'

export const DetailedCardContainerBottom = ({ bottomData }: BottomDataT) => {
  return (
    <BottomContainer>
      {bottomData.map((section: DetailedCardContainerBottomT) => {
        if (section.data) {
          return (
            <DetailedCardSection key={section.title} title={section.title} data={section.data} />
          )
        }
      })}
    </BottomContainer>
  )
}

const BottomContainer = styled.div`
  display: grid;
  grid-gap: 2rem 3rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }
`

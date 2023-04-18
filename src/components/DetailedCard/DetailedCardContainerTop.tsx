import styled from 'styled-components'

import { CategoryCardT } from '../../types/types'
import { CardImage } from '../common/CardImage'
import { DetailedCardInfo } from './DetailedCardInfo'

export const DetailedCardContainerTop = ({ categoryItem, category }: CategoryCardT) => {
  return (
    <TopContainer>
      <CardImage key={categoryItem.image} src={categoryItem.image} alt={'poster'} />
      <DetailedCardInfo categoryItem={categoryItem} category={category} />
    </TopContainer>
  )
}

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

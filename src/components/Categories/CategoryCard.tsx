import styled from 'styled-components'

import { CategoryCardT } from '../../types/types'
import { getBottomData } from '../../utils/getBottomData'
import { DetailedCardContainerBottom } from '../DetailedCard/DetailedCardContainerBottom'
import { DetailedCardContainerTop } from '../DetailedCard/DetailedCardContainerTop'

export const CategoryCard = ({ categoryItem, category }: CategoryCardT) => {
  const bottomData = getBottomData(categoryItem, category)

  return (
    <DetailedCardContainer>
      <DetailedCardContainerTop categoryItem={categoryItem} category={category} />
      <DetailedCardContainerBottom bottomData={bottomData!} />
    </DetailedCardContainer>
  )
}

const DetailedCardContainer = styled.div`
  display: grid;
  height: 100%;
  padding: 2rem;
  border: 1px solid var(--colors-text);
  border-radius: 0.8rem;
  margin: 2rem 0;

  &:hover {
    box-shadow: var(--card-shadow);
  }

  & div b {
    font-weight: var(--fw-normal);
  }

  & a:link,
  a:visited {
    text-decoration: none;
    color: var(--colors-link);
  }
`

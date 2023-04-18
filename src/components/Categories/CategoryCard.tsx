import styled from 'styled-components'

import { CardInfoCategoryData } from '../../data/data'
import { CategoryCardT, CategoryT, EnumCategoriesT } from '../../types/types'
import { convertToTitleCase } from '../../utils/convertToTitleCase'
import { getBottomData } from '../../utils/getBottomData'
import { DetailedCardContainer } from '../DetailedCard/DetailedCardContainer/DetailedCardContainer'
import { DetailedCardContainerBottom } from '../DetailedCard/DetailedCardContainerBottom/DetailedCardContainerBottom'
import { DetailedCardContainerTop } from '../DetailedCard/DetailedCardContainerTop/DetailedCardContainerTop'
import { CardImage } from '../common/CardImage/CardImage'

export const CategoryCard = ({ categoryItem, category }: CategoryCardT) => {
  const bottomData = getBottomData(categoryItem, category)

  return (
    <DetailedCardContainer>
      <DetailedCardContainerTop>
        <CardImage key={categoryItem.image} src={categoryItem.image} alt={'poster'} />
        <CardInfo>
          {CardInfoCategoryData[category as EnumCategoriesT].map((item: string) => {
            return (
              <div key={item as string}>
                <InfoTitle>{convertToTitleCase(item as string)}</InfoTitle>
                <InfoData>{categoryItem[item as keyof CategoryT] ?? 'n/a'}</InfoData>
              </div>
            )
          })}
        </CardInfo>
      </DetailedCardContainerTop>
      <DetailedCardContainerBottom bottomData={bottomData!} />
    </DetailedCardContainer>
  )
}

const CardInfo = styled.div`
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }
`

const InfoTitle = styled.div`
  color: var(--color-data-title);
  font-size: var(--fs-esm);
`

const InfoData = styled.div`
  padding-bottom: 1rem;
`

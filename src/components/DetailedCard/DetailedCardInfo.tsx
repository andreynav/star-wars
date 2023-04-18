import styled from 'styled-components'

import { CardInfoCategoryData } from '../../data/data'
import { CategoryCardT, CategoryT, EnumCategoriesT } from '../../types/types'
import { convertToTitleCase } from '../../utils/convertToTitleCase'

export const DetailedCardInfo = ({ categoryItem, category }: CategoryCardT) => {
  return (
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

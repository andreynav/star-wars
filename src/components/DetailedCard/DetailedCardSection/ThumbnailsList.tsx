import styled from 'styled-components'

import { imageBaseApi } from '../../../api/api'
import { useSectionContext } from '../../../hooks/useSectionContext'
import { ThumbnailsListT } from '../../../types/types'
import { getCategoryFromUrl } from '../../../utils/getCategoryFromUrl'
import { getIdFromUrl } from '../../../utils/getIdFromUrl'
import { getImgPathCategory } from '../../../utils/getImgPathCategory'
import { Card } from '../../Card/Card'

export const ThumbnailsList = ({ data, categoryItems }: ThumbnailsListT) => {
  const { isCollapsed, limit } = useSectionContext()

  return (
    <ThumbnailContainer>
      {data?.map((item: string, index: number) => {
        const imgCategory = getCategoryFromUrl(item)
        const imgPathCategory = getImgPathCategory(imgCategory as string)

        const card = (
          <SectionItem key={item} className={'sectionItem'}>
            <Card
              name={categoryItems?.[imgCategory as string]?.[index]}
              category={imgCategory as string}
              toNavigate={`/${imgCategory}/${getIdFromUrl(item)}`}
              src={`${imageBaseApi}${imgPathCategory}/${getIdFromUrl(item)}.jpg`}
            />
          </SectionItem>
        )

        if (isCollapsed) {
          if (limit > index) {
            return card
          }
        } else {
          return card
        }
      })}
    </ThumbnailContainer>
  )
}

const ThumbnailContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding-top: 1rem;
  grid-template-columns: repeat(3, 1fr);
`

const SectionItem = styled.div`
  display: grid;
`

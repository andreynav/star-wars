import styled from 'styled-components'

import { imageBaseApi } from '../../api/api'
import { ThumbnailsListT } from '../../types/types'
import { getCategoryFromUrl } from '../../utils/getCategoryFromUrl'
import { getIdFromUrl } from '../../utils/getIdFromUrl'
import { getImgPathCategory } from '../../utils/getImgPathCategory'
import { getNameIndexShift } from '../../utils/getNameIndexShift'
import { Card } from '../Card/Card'

export const ThumbnailsList = ({ data, sliceArgs, categoryItems }: ThumbnailsListT) => {
  return (
    <ThumbnailContainer>
      {data.slice(...sliceArgs).map((item: string, index: number) => {
        const imgCategory = getCategoryFromUrl(item)
        const imgPathCategory = getImgPathCategory(imgCategory as string)
        const nameIndexShift = getNameIndexShift(sliceArgs)

        return (
          <SectionItem key={item} className={'sectionItem'}>
            <Card
              name={categoryItems?.[getCategoryFromUrl(item) as string]?.[index + nameIndexShift]}
              category={getCategoryFromUrl(item) as string}
              toNavigate={`/${getCategoryFromUrl(item)}/${getIdFromUrl(item)}`}
              src={`${imageBaseApi}${imgPathCategory}/${getIdFromUrl(item)}.jpg`}
            />
          </SectionItem>
        )
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

import styled from 'styled-components'

import { DetailedCardSectionDataT } from '../../types/types'
import { ThumbnailsList } from '../Categories/ThumbnailsList'
import { ShowMore } from './ShowMore'

export const DetailedCardSectionData = ({
  data,
  categoryItems,
  toggleShowMore,
  isShowMoreVisible
}: DetailedCardSectionDataT) => {
  const isDataExists = data.length > 0
  const isDataLengthMoreThanThree = data.length > 3

  return (
    <>
      {isDataExists ? (
        <>
          <TopContainer>
            <ThumbnailsList data={data} sliceArgs={[0, 3]} categoryItems={categoryItems} />
            {isShowMoreVisible && <ShowMore onClick={toggleShowMore} nameIsShow />}
          </TopContainer>
          <BottomContainer>
            {!isShowMoreVisible && (
              <ThumbnailsList data={data} sliceArgs={[3]} categoryItems={categoryItems} />
            )}
            {!isShowMoreVisible && isDataLengthMoreThanThree && (
              <ShowMore onClick={toggleShowMore} />
            )}
          </BottomContainer>
        </>
      ) : (
        <SectionItemNoData>There is no data in the Jedi archives</SectionItemNoData>
      )}
    </>
  )
}

const TopContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`

const BottomContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`

const SectionItemNoData = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding-top: 1rem;
`

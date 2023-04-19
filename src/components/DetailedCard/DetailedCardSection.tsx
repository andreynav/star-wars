import { useState } from 'react'
import styled from 'styled-components'

import { useDetailedCardSection } from '../../hooks/useDetailedCardSection'
import { DetailedCardSectionT } from '../../types/types'
import { ThumbnailsList } from '../Categories/ThumbnailsList'
import { ShowMore } from './ShowMore'

export const DetailedCardSection = ({ title, data }: DetailedCardSectionT) => {
  const [isShowMoreVisible, setIsShowMoreVisible] = useState(data.length > 3)
  const { categoryItems, isLoading } = useDetailedCardSection(data)

  const toggleShowMore = () => {
    setIsShowMoreVisible(!isShowMoreVisible)
  }

  if (isLoading) return <div>loading...</div>

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      {data.length > 0 ? (
        <>
          <TopContainer>
            <ThumbnailsList data={data} sliceArgs={[0, 3]} categoryItems={categoryItems} />
            {isShowMoreVisible && <ShowMore onClick={toggleShowMore} nameIsShow />}
          </TopContainer>
          <BottomContainer>
            {!isShowMoreVisible && (
              <ThumbnailsList data={data} sliceArgs={[3]} categoryItems={categoryItems} />
            )}
            {!isShowMoreVisible && data.length > 3 && <ShowMore onClick={toggleShowMore} />}
          </BottomContainer>
        </>
      ) : (
        <SectionItem>
          <SectionItemNoData>There is no data in the Jedi archives</SectionItemNoData>
        </SectionItem>
      )}
    </Section>
  )
}

const Section = styled.div`
  display: grid;
  align-content: start;
`

const SectionTitle = styled.div`
  font-weight: bold;
`

const TopContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`

const BottomContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`

const SectionItem = styled.div`
  display: grid;
`

const SectionItemNoData = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding-top: 1rem;
`

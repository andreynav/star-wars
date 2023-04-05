import { useState } from 'react'
import styled from 'styled-components'

import { imageBaseApi } from '../../api/api'
import { DetailedCardSectionT } from '../../types/types'
import { getCategoryFromUrl } from '../../utils/getCategoryFromUrl'
import { getIdFromUrl } from '../../utils/getIdFromUrl'
import { Card } from '../Card/Card'
import { ShowMore } from '../ShowMore/ShowMore'

export const DetailedCardSection = ({ title, data }: DetailedCardSectionT) => {
  const [isShowMoreVisible, setIsShowMoreVisible] = useState(data.length > 3)
  const toggleShowMore = () => {
    setIsShowMoreVisible(!isShowMoreVisible)
  }

  const getThumbnails = (data: any, sliceArgs: any) => {
    return (
      <ThumbnailContainer>
        {data.slice(...sliceArgs).map((item: string) => {
          return (
            <SectionItem key={item}>
              <Card
                category={getCategoryFromUrl(item)!}
                toNavigate={`/${getCategoryFromUrl(item)}/${getIdFromUrl(item)}`}
                src={`${imageBaseApi}${getCategoryFromUrl(item)}/${getIdFromUrl(item)}.jpg`}
              />
            </SectionItem>
          )
        })}
      </ThumbnailContainer>
    )
  }

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      {data.length > 0 ? (
        <>
          <TopContainer>
            {getThumbnails(data, [0, 3])}
            {isShowMoreVisible && <ShowMore onClick={toggleShowMore} nameIsShow />}
          </TopContainer>
          <BottomContainer>
            {!isShowMoreVisible && getThumbnails(data, [3])}
            {!isShowMoreVisible && data.length !== 3 && <ShowMore onClick={toggleShowMore} />}
          </BottomContainer>
        </>
      ) : (
        <SectionItem>There is no data in the Jedi archives</SectionItem>
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

const ThumbnailContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding-top: 1rem;
  grid-template-columns: repeat(3, 1fr);
`

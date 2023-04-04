import styled from 'styled-components'

import { imageBaseApi } from '../../api/api'
import { getCategoryFromUrl } from '../../utils/getCategoryFromUrl'
import { getIdFromUrl } from '../../utils/getIdFromUrl'
import { Card } from '../Card/Card'

export const DetailedCardSection = ({ title, data }: any) => {
  const thumbnails = (
    <ThumbnailContainer>
      {data.map((item: string) => {
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

  return (
    <Section>
      <div>{title}</div>
      {data.length > 0 ? (
        thumbnails
      ) : (
        <SectionItem>There is no data in the Jedi archives</SectionItem>
      )}
    </Section>
  )
}

const Section = styled.div`
  display: grid;
  align-content: start;

  & div:nth-child(1) {
    font-weight: bold;
    line-height: 2rem;
  }
`

const SectionItem = styled.div`
  display: grid;
`

const ThumbnailContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`

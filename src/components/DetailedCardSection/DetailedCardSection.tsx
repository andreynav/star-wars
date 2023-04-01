import styled from 'styled-components'

import { imageBaseApi } from '../../api/api'
import { getCategoryFromUrl } from '../../utils/getCategoryFromUrl'
import { getIdFromUrl } from '../../utils/getIdFromUrl'
import { Card } from '../Card/Card'

export const DetailedCardSection = ({ title, data }: any) => {
  return (
    <Section>
      <div>{title}</div>
      {data.length > 0 ? (
        data.map((item: string) => {
          return (
            <SectionItem key={item}>
              <Card
                category={getCategoryFromUrl(item)!}
                toNavigate={`/${getCategoryFromUrl(item)}/${getIdFromUrl(item)}`}
                src={`${imageBaseApi}${getCategoryFromUrl(item)}/${getIdFromUrl(item)}.jpg`}
              />
            </SectionItem>
          )
        })
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
    border-bottom: 1px solid grey;
  }
`

const SectionItem = styled.div`
  display: grid;
  padding: 1rem 0;
  background-color: var(--colors-ui-base);
`

import styled from 'styled-components'

import { useDetailedCardSection } from '../../../hooks/useDetailedCardSection'
import { DetailedCardSectionT } from '../../../types/types'
import { DetailedCardSectionData } from './DetailedCardSectionData'

export const DetailedCardSection = ({ title, data }: DetailedCardSectionT) => {
  const { categoryItems, isLoading } = useDetailedCardSection(data)

  if (isLoading) return <div>loading...</div>

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <DetailedCardSectionData data={data}>
        <DetailedCardSectionData.ThumbnailsList data={data} categoryItems={categoryItems} />
        <DetailedCardSectionData.Collapse>Show Less</DetailedCardSectionData.Collapse>
        <DetailedCardSectionData.Expand>Show More</DetailedCardSectionData.Expand>
        <DetailedCardSectionData.SectionNoData />
      </DetailedCardSectionData>
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

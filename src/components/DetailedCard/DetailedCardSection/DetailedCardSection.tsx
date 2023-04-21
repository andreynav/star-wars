import { useState } from 'react'
import styled from 'styled-components'

import { useDetailedCardSection } from '../../../hooks/useDetailedCardSection'
import { DetailedCardSectionT } from '../../../types/types'
import { DetailedCardSectionData } from './DetailedCardSectionData'

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
      <DetailedCardSectionData
        data={data}
        categoryItems={categoryItems}
        toggleShowMore={toggleShowMore}
        isShowMoreVisible={isShowMoreVisible}
      />
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

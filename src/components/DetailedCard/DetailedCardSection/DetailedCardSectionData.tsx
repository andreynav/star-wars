import { createContext, useMemo, useState } from 'react'
import styled from 'styled-components'

import { DetailedCardSectionDataT, SectionContextT } from '../../../types/types'
import { Collapse, Expand, SectionNoData, ShowMore, ThumbnailsList } from '../DetailedCardSection/'

export const SectionContext = createContext<SectionContextT>({} as SectionContextT)
const limit = 3

export const DetailedCardSectionData = ({ data, categoryItems }: DetailedCardSectionDataT) => {
  const isDataExists = data.length > 0
  const [isCollapsed, setIsCollapsed] = useState(true)

  const expand = () => {
    setIsCollapsed(!isCollapsed)
  }

  const collapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const value = useMemo(
    () => ({ isDataExists, isCollapsed, limit, expand, collapse, data }),
    [data, isDataExists, isCollapsed]
  )

  return (
    <SectionContext.Provider value={value}>
      <SectionContainer>
        <ThumbnailsList data={data} categoryItems={categoryItems} />
        <Collapse>
          <ShowMore>Show Less</ShowMore>
        </Collapse>
        <Expand>
          <ShowMore>Show More</ShowMore>
        </Expand>
      </SectionContainer>
      <SectionNoData />
    </SectionContext.Provider>
  )
}

const SectionContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`

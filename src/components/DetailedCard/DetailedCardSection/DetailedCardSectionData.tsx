import { createContext, useMemo, useState } from 'react'
import styled from 'styled-components'

import { DetailedCardSectionDataT, SectionContextT } from '../../../types/types'
import { Collapse } from './Collapse'
import { Expand } from './Expand'
import { SectionNoData } from './SectionNoData'
import { ThumbnailsList } from './ThumbnailsList'

export const SectionContext = createContext<SectionContextT>({} as SectionContextT)
const limit = 3

const DetailedCardSectionData = ({ data, children }: DetailedCardSectionDataT) => {
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
      <SectionContainer>{children}</SectionContainer>
    </SectionContext.Provider>
  )
}

DetailedCardSectionData.Collapse = Collapse
DetailedCardSectionData.Expand = Expand
DetailedCardSectionData.ThumbnailsList = ThumbnailsList
DetailedCardSectionData.SectionNoData = SectionNoData

export { DetailedCardSectionData }

const SectionContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`

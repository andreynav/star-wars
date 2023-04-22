import { useContext } from 'react'

import { SectionContext } from '../components/DetailedCard/DetailedCardSection/DetailedCardSectionData'
import { SectionContextT } from '../types/types'

export const useSectionContext = () => {
  const context = useContext<SectionContextT>(SectionContext)
  if (!context) throw new Error('useSectionContext must be used within a SectionContextProvider')
  return context
}

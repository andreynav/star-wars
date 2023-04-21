import { useContext } from 'react'
import styled from 'styled-components'

import { SectionContextT } from '../../../types/types'
import { SectionContext } from './DetailedCardSectionData'

export const SectionNoData = () => {
  const { isDataExists } = useContext<SectionContextT>(SectionContext)
  return isDataExists ? null : (
    <SectionItemNoData>There is no data in the Jedi archives</SectionItemNoData>
  )
}

const SectionItemNoData = styled.div`
  display: grid;
  grid-gap: 1rem;
`

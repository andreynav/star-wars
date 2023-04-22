import styled from 'styled-components'

import { useSectionContext } from '../../../hooks/useSectionContext'

export const SectionNoData = () => {
  const { isDataExists } = useSectionContext()
  return isDataExists ? null : (
    <SectionItemNoData>There is no data in the Jedi archives</SectionItemNoData>
  )
}

const SectionItemNoData = styled.div`
  display: grid;
  grid-gap: 1rem;
`

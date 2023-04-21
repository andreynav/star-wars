import styled from 'styled-components'

import { ShowMoreT } from '../../../types/types'

export const ShowMore = ({ children, ...props }: ShowMoreT) => {
  return <StyledShowMore {...props}>{children}</StyledShowMore>
}

const StyledShowMore = styled.div`
  display: grid;
  cursor: pointer;
  font-size: var(--fs-sm);
  font-weight: bold;
`

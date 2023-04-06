import styled from 'styled-components'

import { ShowMoreT } from '../../../types/types'

export const ShowMore = ({ onClick, nameIsShow }: ShowMoreT) => {
  const text = nameIsShow ? 'Show More' : 'Show Less'
  return <StyledShowMore onClick={onClick}>{text}</StyledShowMore>
}

const StyledShowMore = styled.div`
  display: grid;
  cursor: pointer;
  font-size: var(--fs-sm);
  font-weight: bold;
`

import styled from 'styled-components'

import { CardImageT } from '../../types/types'

export const CardImage = ({ src, alt }: CardImageT) => {
  return <StyledCardImage src={src} alt={alt} />
}

const StyledCardImage = styled.img`
  display: grid;
  border-radius: var(--radii);
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`

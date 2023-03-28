import styled from 'styled-components'

import { ImageContainerT } from '../../types/types'

export const ImageContainer = ({ src, alt }: ImageContainerT) => {
  return <StyledImageContainer src={src} alt={alt} />
}

const StyledImageContainer = styled.img`
  display: grid;
  border-radius: var(--radii) var(--radii) 0 0;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`

import { useState } from 'react'
import styled from 'styled-components'

import { noImgData } from '../../../assets'
import { CardImageT } from '../../../types/types'

export const CardImage = ({ src, alt }: CardImageT) => {
  const [imgSrc, setImgSrc] = useState(src)

  const handleImageError = () => {
    setImgSrc(noImgData)
  }

  return <StyledCardImage src={imgSrc} alt={alt} onError={handleImageError} />
}

const StyledCardImage = styled.img`
  display: grid;
  border-radius: var(--radii);
  object-fit: cover;
`

import styled from 'styled-components'

import { CardT } from '../../types/types'
import { CardContainer } from '../CardContainer/CardContainer'
import { CardImage } from '../ImageContainer/ImageContainer'
import { StyledNavLink } from '../StyledNavLink/StyledNavLink'

export const Card = ({ src, category, toNavigate }: CardT) => {
  let categoryTitle = ''
  switch (typeof category) {
    case 'object':
      if ('title' in category) {
        categoryTitle = category.title
      } else if ('name' in category) {
        categoryTitle = category.name
      }
      break
  }

  return (
    <StyledNavLink to={toNavigate}>
      <CardContainer>
        <ImageContainer>
          <CardImage src={src} alt={categoryTitle} />
          <CardTitle>{categoryTitle}</CardTitle>
        </ImageContainer>
      </CardContainer>
    </StyledNavLink>
  )
}

const ImageContainer = styled.div`
  position: relative;
`

const CardTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-clip: border-box;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.8);
  color: var(--color-title-text);
  font-size: var(--fs-lg);
  font-weight: bold;
  text-align: center;
  padding: 1.5rem;
  border-radius: 0 0 var(--radii) var(--radii);

  @media (max-width: 767px) {
    font-size: var(--fs-md);
    padding: 1rem;
  }

  @media (max-width: 480px) {
    font-size: var(--fs-lg);
  }
`

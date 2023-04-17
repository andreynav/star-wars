import styled from 'styled-components'

import { CardT } from '../../types/types'
import { CardContainer } from '../common/CardContainer/CardContainer'
import { CardImage } from '../common/CardImage/CardImage'
import { StyledNavLink } from '../common/StyledNavLink/StyledNavLink'

export const Card = ({ src, category, toNavigate, name }: CardT) => {
  let categoryTitle = ''
  switch (typeof category) {
    case 'object':
      if ('title' in category) {
        categoryTitle = category.title as string
      } else if ('name' in category) {
        categoryTitle = category.name as string
      }
      break
  }

  return (
    <StyledNavLink to={toNavigate}>
      <CardContainer>
        <ImageContainer>
          <CardImage src={src} alt={categoryTitle} />
          <CardTitle>{categoryTitle || name}</CardTitle>
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
  color: #ffffff;
  font-size: var(--fs-sm);
  font-weight: bold;
  text-align: center;
  padding: 0.75rem;
  border-radius: 0 0 var(--radii) var(--radii);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1200px) {
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: var(--fs-md);
    padding: 0.5rem;
  }
`

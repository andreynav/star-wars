import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export const CardListContainer = ({ children }: PropsWithChildren) => {
  return <StyledCardListContainer>{children}</StyledCardListContainer>
}

const StyledCardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  padding-bottom: 2rem;
  padding-top: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

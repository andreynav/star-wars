import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export const DetailedCardContainerTop = ({ children }: PropsWithChildren) => {
  return <TopContainer>{children}</TopContainer>
}

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export const CardContainer = ({ children }: PropsWithChildren) => {
  return <StyledCardContainer>{children}</StyledCardContainer>
}

const StyledCardContainer = styled.div`
  display: grid;
  height: 100%;
  border-radius: 0.8rem;
  box-shadow: var(--card-shadow);
  cursor: pointer;

  & div b {
    font-weight: var(--fw-normal);
  }

  & a:link,
  a:visited {
    text-decoration: none;
    color: var(--colors-link);
  }
`
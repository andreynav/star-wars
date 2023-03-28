import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export const CardContainer = ({ children }: PropsWithChildren) => {
  return <StyledCardContainer>{children}</StyledCardContainer>
}

const StyledCardContainer = styled.div`
  display: grid;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  cursor: pointer;
  height: 100%;
  padding: 1rem 2rem;
  border: 1px solid var(--colors-placeholder);

  & div b {
    font-weight: var(--fw-normal);
  }

  & a:link,
  a:visited {
    text-decoration: none;
    color: var(--colors-link);
  }
`

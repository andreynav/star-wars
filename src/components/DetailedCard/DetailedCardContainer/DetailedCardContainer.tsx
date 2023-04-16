import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export const DetailedCardContainer = ({ children }: PropsWithChildren) => {
  return <StyledDetailedCardContainer>{children}</StyledDetailedCardContainer>
}

const StyledDetailedCardContainer = styled.div`
  display: grid;
  height: 100%;
  padding: 2rem;
  border: 1px solid var(--colors-text);
  border-radius: 0.8rem;
  margin: 2rem 0;

  &:hover {
    box-shadow: var(--card-shadow);
  }

  & div b {
    font-weight: var(--fw-normal);
  }

  & a:link,
  a:visited {
    text-decoration: none;
    color: var(--colors-link);
  }
`

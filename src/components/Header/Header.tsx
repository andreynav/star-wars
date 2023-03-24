import styled from 'styled-components'

import { Container } from '../Container/Container'

export const Header = () => {
  return (
    <StyledHeaderContainer>
      <Container>
        <h1>Header</h1>
      </Container>
    </StyledHeaderContainer>
  )
}

const StyledHeaderContainer = styled.div`
  display: grid;
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`

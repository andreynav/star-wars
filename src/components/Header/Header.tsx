import styled from 'styled-components'

export const Header = () => {
  return (
    <StyledHeaderContainer>
      <h1>Header</h1>
    </StyledHeaderContainer>
  )
}

const StyledHeaderContainer = styled.div`
  display: grid;
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`

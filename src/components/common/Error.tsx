import { ReactNode } from 'react'
import styled from 'styled-components'

export const Error = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorWrapper>
      <ErrorContainer>{children}</ErrorContainer>
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.div`
  display: grid;
  align-self: center;
  justify-items: center;
  align-items: center;
  background-color: var(--colors-bg);
  color: var(--color-text);
  font-weight: bold;
  height: calc(100vh - 204px);
`

const ErrorContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 64px auto;
  align-items: center;
`

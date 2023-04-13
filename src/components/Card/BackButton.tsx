import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const BackButton = () => {
  const navigate = useNavigate()
  const onNavigate = () => {
    navigate(-1)
  }

  return <Button onClick={onNavigate}>Back</Button>
}

const Button = styled.button`
  display: grid;
  grid-template-columns: auto auto;
  gap: 0.75rem;
  align-items: center;
  padding: 0 1rem;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
  box-shadow: var(--card-shadow);
  line-height: 2.5;
  border: none;
  cursor: pointer;
`

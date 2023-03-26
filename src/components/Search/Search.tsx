import { ChangeEvent } from 'react'
// import { IoCloseCircleOutline, IoSearch } from 'react-icons/io5'
import styled from 'styled-components'

// import { SearchT } from '../../types/types'

export const Search = ({ search, setSearch }: any) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  return (
    <InputContainer>
      {/*<IoSearch size={20} />*/}
      <Input value={search} onChange={onInputChange} />
      {/*<IoCloseCircleOutline size={20} onClick={() => setSearch('')} />*/}
    </InputContainer>
  )
}

const InputContainer = styled.label`
  display: grid;
  align-items: center;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  margin-bottom: 0;
  padding: 1rem;
  height: 48px;
  align-content: center;
  border-radius: 24px;
  cursor: pointer;

  @media (max-width: 480px) {
    //margin-bottom: 2rem;
  }
`

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Search'
})`
  display: grid;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
  min-width: 128px;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--colors-text);
  }
`

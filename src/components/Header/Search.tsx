import { ChangeEvent } from 'react'
import { IoCloseCircleOutline, IoSearch } from 'react-icons/io5'
import styled from 'styled-components'

import { SearchT } from '../../types/types'

export const Search = ({ search, setSearch, category }: SearchT) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  return (
    <InputContainer>
      <IoSearch size={20} />
      <Input value={search} onChange={onInputChange} />
      <IoCloseCircleOutline size={20} onClick={() => setSearch('')} />
      <div>{category}</div>
    </InputContainer>
  )
}

const InputContainer = styled.label`
  display: grid;
  grid-template-columns: 20px auto 20px auto;
  align-items: center;
  background-color: var(--colors-ui-base);
  border: 1px solid var(--colors-placeholder);
  margin-bottom: 0;
  padding: 1rem;
  height: 2rem;
  align-content: center;
  border-radius: 24px;
  cursor: pointer;
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

  @media (max-width: 768px) {
    font-size: var(--fs-sm);
  }
`

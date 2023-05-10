import { ChangeEvent } from 'react'
import { IoCloseCircleOutline, IoSearch } from 'react-icons/io5'
import styled from 'styled-components'

import { SearchT } from '../../types/types'
import { getImgPathCategory } from '../../utils'

export const Search = ({ search, setSearch, category }: SearchT) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  return (
    <InputContainer>
      <IoSearch size={20} />
      <Input value={search} onChange={onInputChange} />
      <IoCloseCircleOutline size={18} onClick={() => setSearch('')} />
      <InputCategory>{getImgPathCategory(category).toUpperCase()}</InputCategory>
    </InputContainer>
  )
}

const InputContainer = styled.label`
  display: grid;
  grid-template-columns: 20px auto 20px min-content;
  align-items: center;
  background-color: var(--colors-ui-base);
  border: 1px solid var(--colors-controls-border);
  margin-bottom: 0;
  padding: 1rem;
  height: 2rem;
  align-content: center;
  border-radius: 24px;
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow);
  }
`

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Search'
})`
  display: grid;
  padding-left: 0.5rem;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
  min-width: 128px;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--colors-placeholder);
  }

  @media (max-width: 768px) {
    font-size: var(--fs-sm);
  }
`

const InputCategory = styled.div`
  display: grid;
  padding-left: 0.5rem;
  width: fit-content;
  color: var(--colors-active-link);
  font-size: var(--fs-eesm);
`

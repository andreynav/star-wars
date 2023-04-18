import { MouseEvent } from 'react'
import styled from 'styled-components'

import { PaginatorT } from '../../types/types'

export const Paginator = ({ next, previous, page, setPage }: PaginatorT) => {
  const onHandleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const isNextButton = event.currentTarget.innerText === 'NEXT'
    const isPreviousButton = event.currentTarget.innerText === 'PREV'

    if (isNextButton && next) {
      setPage((prevPage) => prevPage + 1)
    }
    if (isPreviousButton && previous) {
      setPage((prevPage) => prevPage - 1)
    }
  }

  return (
    <Container>
      <PaginatorContainer>
        <button onClick={onHandleClick} disabled={!previous}>
          PREV
        </button>
        <div>PAGE {page}</div>
        <button onClick={onHandleClick} disabled={!next}>
          NEXT
        </button>
      </PaginatorContainer>
    </Container>
  )
}
const Container = styled.div`
  display: grid;
  padding-top: 2rem;
`

const PaginatorContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 15% 70% 15%;

  & div {
    display: grid;
    height: 32px;
    align-items: center;
    border: 1px solid grey;
    justify-items: center;
  }

  & button {
    color: var(--colors-text);
    padding: 0 0.5rem;
    border: 1px solid grey;
    background: transparent;
    cursor: pointer;
  }

  & button:nth-child(1) {
    border-radius: 10px 0 0 10px;
    border-right: none;
  }

  & button:nth-child(3) {
    border-radius: 0 10px 10px 0;
    border-left: none;
  }

  & button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: var(--fs-sm);
  }
`

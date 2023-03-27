import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { swAPI, swapiImgPeople } from '../../api/api'
import { PersonT } from '../../types/types'
import { Container } from '../Container/Container'

export const People = ({ error, setError }: any) => {
  const [peopleList, setPeopleList] = useState<PersonT[]>([])
  const [page, setPage] = useState(1)
  const [next, SetNext] = useState(false)

  useEffect(() => {
    const fetchPeopleList = async () => {
      try {
        const data = await swAPI.getAllPeople(page)
        setError(null)
        setPeopleList(data.results)
        SetNext(!!data.next)
      } catch (error: any) {
        setError({ message: error.message })
      }
    }

    fetchPeopleList().then()
  }, [page])

  const imageIndex = (index: number) => {
    if (page === 1) {
      return index + 1
    } else if (page === 2) {
      return index + 11
    } else {
      return index + page * 10 - 10 + 2
    }
  }

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <>
          <button
            onClick={() => {
              if (next) setPage((prevPage) => prevPage + 1)
            }}
          >
            page {page}
          </button>
          <StyledCardList>
            {peopleList.map((person, index) => {
              return (
                <StyledPeopleCard key={person.name}>
                  <Image src={`${swapiImgPeople}${imageIndex(index)}.jpg`} alt={'poster'} />
                  <div>
                    <b>Title:</b> {person.name}
                  </div>
                </StyledPeopleCard>
              )
            })}
          </StyledCardList>
        </>
      )}
    </Container>
  )
}

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  padding-bottom: 2rem;
  padding-top: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const StyledPeopleCard = styled.div`
  display: grid;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  cursor: pointer;
  height: 100%;
  //width: 300px;
  padding: 1rem 2rem;
  border: 1px solid grey;

  & div b {
    font-weight: var(--fw-normal);
  }

  & a:link,
  a:visited {
    text-decoration: none;
    color: var(--colors-link);
  }
`

const Image = styled.img`
  display: grid;
  border-radius: var(--radii) var(--radii) 0 0;
  width: 400px;
  height: 500px;
`

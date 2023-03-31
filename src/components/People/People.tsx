import { useEffect, useState } from 'react'

import { apiImgPeople, swAPI } from '../../api/api'
import { PersonT } from '../../types/types'
import { getIdFromUrl } from '../../utils/getIdFromUrl'
import { CardContainer } from '../CardContainer/CardContainer'
import { CardListContainer } from '../CardListContainer/CardListContainer'
import { Container } from '../Container/Container'
import { ImageContainer } from '../ImageContainer/ImageContainer'
import { StyledNavLink } from '../StyledNavLink/StyledNavLink'

export const People = ({ error, setError }: any) => {
  const [peopleList, setPeopleList] = useState<PersonT[] | null>(null)
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

  if (!peopleList) return <div>loading...</div>

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
          <CardListContainer>
            {peopleList.map((person) => {
              return (
                <StyledNavLink key={person.name} to={`/people/${getIdFromUrl(person.url)}`}>
                  <CardContainer>
                    <ImageContainer
                      src={`${apiImgPeople}${getIdFromUrl(person.url)}.jpg`}
                      alt={'poster'}
                    />
                    <div>
                      <b>Title:</b> {person.name}
                    </div>
                  </CardContainer>
                </StyledNavLink>
              )
            })}
          </CardListContainer>
        </>
      )}
    </Container>
  )
}

import { useEffect, useState } from 'react'

import { apiImgPeople, swAPI } from '../../api/api'
import { PersonT } from '../../types/types'
import { getPersonImageIndex } from '../../utils/getPersonImageIndex'
import { CardContainer } from '../CardContainer/CardContainer'
import { CardListContainer } from '../CardListContainer/CardListContainer'
import { Container } from '../Container/Container'
import { ImageContainer } from '../ImageContainer/ImageContainer'

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
            {peopleList.map((person, index) => {
              return (
                <CardContainer key={person.name}>
                  <ImageContainer
                    src={`${apiImgPeople}${getPersonImageIndex(page, index)}.jpg`}
                    alt={'poster'}
                  />
                  <div>
                    <b>Title:</b> {person.name}
                  </div>
                </CardContainer>
              )
            })}
          </CardListContainer>
        </>
      )}
    </Container>
  )
}

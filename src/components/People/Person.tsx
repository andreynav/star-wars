import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { apiImgPeople, swAPI } from '../../api/api'
import { PersonT } from '../../types/types'
import { getPersonImageIndex } from '../../utils/getPersonImageIndex'
import { CardContainer } from '../CardContainer/CardContainer'
import { CardListContainer } from '../CardListContainer/CardListContainer'
import { Container } from '../Container/Container'
import { ImageContainer } from '../ImageContainer/ImageContainer'

export const Person = ({ error, setError }: any) => {
  const { id } = useParams<{ name: string }>()
  const [person, setPerson] = useState<PersonT[] | null>(null)
  const [page, setPage] = useState(1)
  // const [next, SetNext] = useState(false)

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const data = await swAPI.getPerson(id)
        setError(null)
        setPerson(data)
        // SetNext(!!data.next)
      } catch (error: any) {
        setError({ message: error.message })
      }
    }

    fetchPerson().then()
  }, [])

  if (!person) return

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <>
          {/*//TODO: back button ???*/}
          {/*<button*/}
          {/*  onClick={() => {*/}
          {/*    if (next) setPage((prevPage) => prevPage + 1)*/}
          {/*  }}*/}
          {/*>*/}
          {/*  page {page}*/}
          {/*</button>*/}
          <CardListContainer>
            {/*{peopleList.map((person, index) => {*/}
            return (
            <CardContainer key={person?.name}>
              <ImageContainer
                src={`${apiImgPeople}${getPersonImageIndex(page, id)}.jpg`}
                alt={'poster'}
              />
              <div>
                <b>Title:</b> {person?.name}
              </div>
              <div>
                <b>Gender:</b> {person?.gender}
              </div>
              <div>
                <b>Birth year:</b> {person?.birth_year}
              </div>
              <div>
                <b>Eye color:</b> {person?.eye_color}
              </div>
              <div>
                <b>Hair color:</b> {person?.hair_color}
              </div>
              <div>
                <b>Height:</b> {person?.height}
              </div>
              <div>
                <b>Mass:</b> {person?.mass}
              </div>
              <div>
                <b>Skin color:</b> {person?.skin_color}
              </div>
              <div>
                <b>Home world:</b> {person?.homeworld}
              </div>
              <div>
                <b>Films:</b>{' '}
                <a href={person?.films[0]} target="_blank" rel="noopener noreferrer">
                  {person?.films[0]}
                </a>
              </div>
              <div>
                <b>Species:</b>{' '}
                <a href={person?.species[0]} target="_blank" rel="noopener noreferrer">
                  {person?.species[0]}
                </a>
              </div>
              <div>
                <b>Starships:</b>{' '}
                <a href={person?.starships[0]} target="_blank" rel="noopener noreferrer">
                  {person?.starships[0]}
                </a>
              </div>
              <div>
                <b>Vehicles:</b>{' '}
                <a href={person?.vehicles[0]} target="_blank" rel="noopener noreferrer">
                  {person?.vehicles[0]}
                </a>
              </div>
              <div>
                <b>Url:</b>{' '}
                <a href={person.url} target="_blank" rel="noopener noreferrer">
                  {person.url}
                </a>
              </div>
            </CardContainer>
            ){/*})}*/}
          </CardListContainer>
        </>
      )}
    </Container>
  )
}

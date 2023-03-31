import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { apiImgPeople, swAPI } from '../../api/api'
import { PersonT } from '../../types/types'
import { CardContainer } from '../CardContainer/CardContainer'
import { CardListContainer } from '../CardListContainer/CardListContainer'
import { Container } from '../Container/Container'
import { CardImage } from '../ImageContainer/ImageContainer'

export const Person = ({ error, setError }: any) => {
  const { id } = useParams<{ id: string }>()
  const [person, setPerson] = useState<PersonT | null>(null)

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        if (id) {
          const data = await swAPI.getPerson(id)
          setError(null)
          setPerson(data)
        }
      } catch (error: any) {
        setError({ message: error.message })
      }
    }

    fetchPerson().then()
  }, [])

  if (!person) return <div>loading...</div>

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <>
          <CardListContainer>
            <CardContainer key={person?.name}>
              <CardImage src={`${apiImgPeople}${id}.jpg`} alt={'poster'} />
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
            </CardContainer>
          </CardListContainer>
        </>
      )}
    </Container>
  )
}

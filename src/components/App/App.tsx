import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { swAPI } from '../../api/api'
import { FilmT } from '../../types/types'

export const App = () => {
  const [filmsList, setFilmsList] = useState<FilmT[]>([])
  const [error, setError] = useState<{ message: string; status?: number } | null>(null)

  useEffect(() => {
    const fetchFilmsList = async () => {
      try {
        const data = await swAPI.getAllFilms()
        setError(null)
        setFilmsList(sortedFilmsList(data.results))
      } catch (error: any) {
        setError({ message: error.message })
      }
    }

    fetchFilmsList().then()
  }, [])

  const sortedFilmsList = (list: FilmT[]) => {
    return list.sort(function (a: FilmT, b: FilmT) {
      return a.episode_id - b.episode_id
    })
  }

  return (
    <StyledApp>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <>
          <div className="App">STAR WARS</div>
          <StyledCardList>
            {filmsList.map((film) => {
              return (
                <StyledFilmCard key={film.title}>
                  <div>
                    <b>Title:</b> {film.title}
                  </div>
                  <div>
                    <b>Episode:</b> {film.episode_id}
                  </div>
                  <div>
                    <b>Director:</b> {film.director}
                  </div>
                  <div>
                    <b>Producer:</b> {film.producer}
                  </div>
                  <div>
                    <b>Film created:</b> {film.created}
                  </div>
                  <div>
                    <b>Film edited:</b> {film.edited}
                  </div>
                  <div>
                    <b>Film released:</b> {film.release_date}
                  </div>
                  <div>
                    <b>Opening crawl:</b> {film.opening_crawl}
                  </div>
                  <div>
                    <b>Planets:</b>{' '}
                    <a href={film.planets[0]} target="_blank" rel="noopener noreferrer">
                      {film.planets[0]}
                    </a>
                  </div>
                  <div>
                    <b>Characters:</b>{' '}
                    <a href={film.characters[0]} target="_blank" rel="noopener noreferrer">
                      {film.characters[0]}
                    </a>
                  </div>
                  <div>
                    <b>Species:</b>{' '}
                    <a href={film.species[0]} target="_blank" rel="noopener noreferrer">
                      {film.species[0]}
                    </a>
                  </div>
                  <div>
                    <b>Starships:</b>{' '}
                    <a href={film.starships[0]} target="_blank" rel="noopener noreferrer">
                      {film.starships[0]}
                    </a>
                  </div>
                  <div>
                    <b>Vehicles:</b>{' '}
                    <a href={film.vehicles[0]} target="_blank" rel="noopener noreferrer">
                      {film.vehicles[0]}
                    </a>
                  </div>
                  <div>
                    <b>Url:</b>{' '}
                    <a href={film.url} target="_blank" rel="noopener noreferrer">
                      {film.url}
                    </a>
                  </div>
                </StyledFilmCard>
              )
            })}
          </StyledCardList>
        </>
      )}
    </StyledApp>
  )
}

const StyledApp = styled.div`
  display: grid;

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const StyledFilmCard = styled.div`
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

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import { Film } from '../Films/Film'
import { Films } from '../Films/Films'
import { Header } from '../Header/Header'
import { Home } from '../Home/Home'
import { People } from '../People/People'
import { Person } from '../People/Person'

export const App = () => {
  const [error, setError] = useState<{ message: string; status?: number } | null>(null)

  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people/" element={<People error={error} setError={setError} />} />
        <Route path="/people/:id" element={<Person error={error} setError={setError} />} />
        {/*<Route path="/species/" element={<Species />} />*/}
        {/*<Route path="/species/:name" element={<Species />} />*/}
        {/*<Route path="/planets/" element={<Planets />} />*/}
        {/*<Route path="/planets/:name" element={<Planets />} />*/}
        {/*<Route path="/starships/" element={<Starships />} />*/}
        {/*<Route path="/starships/:name" element={<Starships />} />*/}
        {/*<Route path="/vehicles/" element={<Vehicles />} />*/}
        {/*<Route path="/vehicles/:name" element={<Vehicles />} />*/}
        <Route path="/films/" element={<Films error={error} setError={setError} />} />
        <Route path="/films/:id" element={<Film error={error} setError={setError} />} />
        {/*<Route path="/*" element={<NotFound />} />*/}
      </Routes>
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

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import { Films } from '../Films/Films'
import { Header } from '../Header/Header'
import { Home } from '../Home/Home'

export const App = () => {
  const [error, setError] = useState<{ message: string; status?: number } | null>(null)

  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/people/:name" element={<People />} />*/}
        {/*<Route path="/species/:name" element={<Species />} />*/}
        {/*<Route path="/planets/:name" element={<Planets />} />*/}
        {/*<Route path="/starships/:name" element={<Starships />} />*/}
        {/*<Route path="/vehicles/:name" element={<Vehicles />} />*/}
        <Route path="/films/:name" element={<Films error={error} setError={setError} />} />
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

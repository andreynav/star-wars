import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import { Header } from '../Header/Header/Header'
import { Home } from '../Home/Home'
import { Film } from '../Sections/Films/Film'
import { Person } from '../Sections/People/Person'
import { SectionList } from '../Sections/SectionList/SectionList'
import { SpeciesOne } from '../Sections/Species/SpeciesOne'

export const App = () => {
  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people/" element={<SectionList category="people" />} />
        <Route path="/people/:id" element={<Person />} />
        <Route path="/species/" element={<SectionList category="species" />} />
        <Route path="/species/:id" element={<SpeciesOne />} />
        <Route path="/planets/" element={<SectionList category="planets" />} />
        {/*<Route path="/planets/:name" element={<Planets />} />*/}
        <Route path="/starships/" element={<SectionList category="starships" />} />
        {/*<Route path="/starships/:name" element={<Starships />} />*/}
        <Route path="/vehicles/" element={<SectionList category="vehicles" />} />
        {/*<Route path="/vehicles/:name" element={<Vehicles />} />*/}
        <Route path="/films/" element={<SectionList category="films" />} />
        <Route path="/films/:id" element={<Film />} />
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

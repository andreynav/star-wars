import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import { Header } from '../Header/Header/Header'
import { Home } from '../Home/Home'
import { Section } from '../Sections/Section'
import { SectionList } from '../Sections/SectionList'

export const App = () => {
  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people/" element={<SectionList category="people" />} />
        <Route path="/people/:id" element={<Section category="people" />} />
        <Route path="/species/" element={<SectionList category="species" />} />
        <Route path="/species/:id" element={<Section category="species" />} />
        <Route path="/planets/" element={<SectionList category="planets" />} />
        <Route path="/planets/:id" element={<Section category="planets" />} />
        <Route path="/starships/" element={<SectionList category="starships" />} />
        <Route path="/starships/:id" element={<Section category="starships" />} />
        <Route path="/vehicles/" element={<SectionList category="vehicles" />} />
        <Route path="/vehicles/:id" element={<Section category="vehicles" />} />
        <Route path="/films/" element={<SectionList category="films" />} />
        <Route path="/films/:id" element={<Section category="films" />} />
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

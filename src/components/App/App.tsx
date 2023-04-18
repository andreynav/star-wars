import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import { CategoriesList } from '../Categories/CategoriesList'
import { Category } from '../Categories/Category'
import { Header } from '../Header/Header'
import { Home } from '../Home/Home'

export const App = () => {
  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people/" element={<CategoriesList category="people" />} />
        <Route path="/people/:id" element={<Category category="people" />} />
        <Route path="/species/" element={<CategoriesList category="species" />} />
        <Route path="/species/:id" element={<Category category="species" />} />
        <Route path="/planets/" element={<CategoriesList category="planets" />} />
        <Route path="/planets/:id" element={<Category category="planets" />} />
        <Route path="/starships/" element={<CategoriesList category="starships" />} />
        <Route path="/starships/:id" element={<Category category="starships" />} />
        <Route path="/vehicles/" element={<CategoriesList category="vehicles" />} />
        <Route path="/vehicles/:id" element={<Category category="vehicles" />} />
        <Route path="/films/" element={<CategoriesList category="films" />} />
        <Route path="/films/:id" element={<Category category="films" />} />
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

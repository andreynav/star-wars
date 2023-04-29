import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import { EnumCategoriesT } from '../../types/types'
import { CategoriesList } from '../Categories/CategoriesList'
import { Category } from '../Categories/Category'
import { Header } from '../Header/Header'
import { Home } from '../Home/Home'
import { NotFound } from '../common/NotFound'

export const App = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('people')

  const setSearchCategory = (value: EnumCategoriesT) => {
    setCategory(value)
  }

  return (
    <StyledApp>
      <Header search={search} setSearch={setSearch} category={category} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/people/"
          element={
            <CategoriesList
              category="people"
              setSearchCategory={setSearchCategory}
              search={search}
            />
          }
        />
        <Route path="/people/:id" element={<Category category="people" />} />
        <Route
          path="/species/"
          element={
            <CategoriesList
              category="species"
              setSearchCategory={setSearchCategory}
              search={search}
            />
          }
        />
        <Route path="/species/:id" element={<Category category="species" />} />
        <Route
          path="/planets/"
          element={
            <CategoriesList
              category="planets"
              setSearchCategory={setSearchCategory}
              search={search}
            />
          }
        />
        <Route path="/planets/:id" element={<Category category="planets" />} />
        <Route
          path="/starships/"
          element={
            <CategoriesList
              category="starships"
              setSearchCategory={setSearchCategory}
              search={search}
            />
          }
        />
        <Route path="/starships/:id" element={<Category category="starships" />} />
        <Route
          path="/vehicles/"
          element={
            <CategoriesList
              category="vehicles"
              setSearchCategory={setSearchCategory}
              search={search}
            />
          }
        />
        <Route path="/vehicles/:id" element={<Category category="vehicles" />} />
        <Route
          path="/films/"
          element={
            <CategoriesList
              category="films"
              setSearchCategory={setSearchCategory}
              search={search}
            />
          }
        />
        <Route path="/films/:id" element={<Category category="films" />} />
        <Route path="/*" element={<NotFound />} />
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

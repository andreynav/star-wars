import { useState } from 'react'

import { EnumCategoriesT } from '../../types/types'
import { Header } from '../Header/Header'
import { Router } from '../Router/Router'

export const App = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('people')

  const setSearchCategory = (value: EnumCategoriesT) => {
    setCategory(value)
  }

  return (
    <>
      <Header search={search} setSearch={setSearch} category={category} />
      <Router search={search} setSearchCategory={setSearchCategory} />
    </>
  )
}

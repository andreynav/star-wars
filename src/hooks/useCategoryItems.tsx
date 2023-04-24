import { useEffect, useState } from 'react'

import { swAPI } from '../api/api'
import { CategoryT } from '../types/types'

export const useCategoryItems = (category: string) => {
  const [categoryItems, setCategoryItems] = useState<CategoryT[] | null>(null)
  const [imagesSrc, setImagesSrc] = useState<string[] | null>(null)
  const [error, setError] = useState<{ message: string; status?: number } | null>(null)
  const [page, setPage] = useState(1)
  const [next, setNext] = useState(false)
  const [previous, setPrevious] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [oldCategory, setOldCategory] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [resetPageOnFirstSearch, setResetPageOnFirstSearch] = useState(false)

  useEffect(() => {
    let active = true

    const fetchCategoryItems = async () => {
      setIsLoading(true)
      try {
        if (category !== oldCategory) {
          setOldCategory(category)
          setPage(1)
        }
        let results, images, next, previous
        if (search) {
          if (!resetPageOnFirstSearch) {
            setResetPageOnFirstSearch(true)
            setPage(1)
          }
          ;({ results, images, next, previous } = await swAPI.searchItems(category, search, page))
        } else {
          ;({ results, images, next, previous } = await swAPI.getCategoryItemsList(category, page))
        }
        if (active) {
          setCategoryItems(results)
          setImagesSrc(images)
          setNext(!!next)
          setPrevious(!!previous)
          setError(null)
        }
      } catch (error: any) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategoryItems().then()

    return () => {
      active = false
    }
  }, [category, page, search, oldCategory, resetPageOnFirstSearch])

  return {
    categoryItems,
    imagesSrc,
    error,
    page,
    setPage,
    next,
    previous,
    isLoading,
    search,
    setSearch
  }
}

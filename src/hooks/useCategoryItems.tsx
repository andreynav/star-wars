import { useState } from 'react'
import { useQuery } from 'react-query'

import { swAPI } from '../api/api'

export const useCategoryItems = (category: string, search: string) => {
  const [prevCategory, setPrevCategory] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [resetToFirstPage, setResetToFirstPage] = useState(false)

  const categoryError = 'Failed to fetch category items'
  const categoryKeys = ['categoryItems', category, search, page]
  const fetchCategoryItems = async () => {
    try {
      if (category !== prevCategory) {
        setPrevCategory(category)
        setPage(1)
      }
      if (search) {
        if (!resetToFirstPage) {
          setResetToFirstPage(true)
          setPage(1)
        }
        return await swAPI.searchItems(category, search, page)
      } else {
        setResetToFirstPage(false)
        return await swAPI.getCategoryItemsList(category, page)
      }
    } catch (error: unknown) {
      throw new Error(categoryError)
    }
  }

  const { data, isError, error, isFetched, isLoading, ...rest } = useQuery({
    queryKey: categoryKeys,
    queryFn: fetchCategoryItems,
    refetchOnWindowFocus: false
  })

  const categoryItems = data?.results || []
  const imagesSrc = data?.images || []
  const next = !!data?.next
  const previous = !!data?.previous

  return {
    categoryItems,
    imagesSrc,
    error: isError ? categoryError : null,
    isError,
    page,
    setPage,
    next,
    previous,
    isLoading,
    rest
  }
}

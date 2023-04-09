import { useEffect, useState } from 'react'

import { swAPI } from '../api/api'
import { CategoryT } from '../types/types'

export const useCategoryItems = (category: string) => {
  const [categoryItems, setCategoryItems] = useState<CategoryT[] | null>(null)
  const [imagesSrc, setImagesSrc] = useState<string[] | null>(null)
  const [error, setError] = useState<{ message: string; status?: number } | null>(null)
  const [page, setPage] = useState(1)
  const [next, setNext] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [oldCategory, setOldCategory] = useState<string | null>(null)

  useEffect(() => {
    const fetchCategoryItems = async () => {
      setIsLoading(true)
      try {
        if (category !== oldCategory) {
          await setOldCategory(category)
          await setPage(1)
        }
        // race condition
        const { results, images, next } = await swAPI.getCategoryItemsList(category, page)
        setCategoryItems(results)
        setImagesSrc(images)
        setNext(!!next)
        setError(null)
      } catch (e: any) {
        setIsLoading(false)
        setError(e.message)
      }
      setIsLoading(false)
    }
    fetchCategoryItems().then()
  }, [category, page])

  return { categoryItems, imagesSrc, error, page, setPage, next, isLoading }
}

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { swAPI } from '../api/api'
import { CategoryT } from '../types/types'

export const useCategory = (category: string) => {
  const { id } = useParams<{ id: string }>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<{ message: string; status?: number } | null>(null)
  const [categoryItem, setCategoryItem] = useState<CategoryT>({} as CategoryT)

  useEffect(() => {
    let active = true

    const fetchCategory = async () => {
      setIsLoading(true)
      try {
        if (id) {
          const data = await swAPI.getCategoryItem(category, id)
          if (active) {
            setError(null)
            setCategoryItem(data)
          }
        }
      } catch (error: any) {
        setError({ message: error.message })
      } finally {
        setIsLoading(false)
      }
    }
    fetchCategory().then()

    return () => {
      active = false
    }
  }, [id, category])

  return { categoryItem, error, isLoading }
}

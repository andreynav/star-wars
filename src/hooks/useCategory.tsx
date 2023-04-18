import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { swAPI } from '../api/api'
import { CategoryT } from '../types/types'

export const useCategory = (category: string) => {
  const { id } = useParams<{ id: string }>()
  const [error, setError] = useState<{ message: string; status?: number } | null>(null)
  const [categoryItem, setCategoryItem] = useState<CategoryT | null>(null)

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        if (id) {
          const data = await swAPI.getCategoryItem(category, id)
          setError(null)
          setCategoryItem(data)
        }
      } catch (error: any) {
        setError({ message: error.message })
      }
    }
    fetchCategory().then()
  }, [id, category])

  return { categoryItem, error }
}

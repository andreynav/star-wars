import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import { swAPI } from '../api/api'
import { CategoryT } from '../types/types'

export const useCategory = (category: string) => {
  const { id } = useParams<{ id: string }>()

  const categoryError = 'Failed to fetch category item'
  const categoryKeys = ['categoryItem', category, id]
  const fetchCategory = async () => {
    try {
      if (id) {
        return await swAPI.getCategoryItem(category, id)
      }
    } catch (error: unknown) {
      throw new Error(categoryError)
    }
  }

  const { data, error, isError, isLoading, ...rest } = useQuery({
    queryKey: categoryKeys,
    queryFn: fetchCategory,
    refetchOnWindowFocus: false
  })

  const categoryItem = data || ({} as CategoryT)

  return { categoryItem, error: isError ? categoryError : null, isError, isLoading, rest }
}

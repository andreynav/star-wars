import { useEffect, useState } from 'react'

import { swAPI } from '../api/api'
import { getCategoryFromUrl, getIdFromUrl } from '../utils'

export const useDetailedCardSection = (data: string[]) => {
  const [categoryItems, setCategoryItems] = useState<{ [key: string]: string[] }>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true)
      try {
        const newCategoryItems = await Promise.all(
          data.map(async (item) => {
            const id = getIdFromUrl(item)
            const itemCategory = getCategoryFromUrl(item)!
            if (!id) return
            const dataCategory = await swAPI.getCategoryItem(itemCategory, id)
            return 'name' in dataCategory ? dataCategory.name : dataCategory.title
          })
        )
        const newCategories = newCategoryItems.reduce(
          (acc: { [key: string]: string[] }, item, index) => {
            const itemCategory = getCategoryFromUrl(data[index] as string)!
            if (!acc[itemCategory]) {
              acc[itemCategory] = []
            }
            acc[itemCategory]?.push(item!)
            return acc
          },
          {}
        )
        setCategoryItems(newCategories)
      } catch (e: any) {
        setIsLoading(false)
        console.log(e.message)
      }
      setIsLoading(false)
    }
    fetchCategory().then()
  }, [data])

  return { categoryItems, isLoading }
}

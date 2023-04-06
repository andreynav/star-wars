import { CategoryT } from '../types/types'

export const getBottomData = (category: CategoryT, categoryArray: string[]) => {
  return categoryArray.map((prop) => {
    if (prop in category) {
      const data = category[prop as keyof CategoryT]
      return { title: `Related ${prop}`, data: Array.isArray(data) ? data : undefined }
    }
  })
}

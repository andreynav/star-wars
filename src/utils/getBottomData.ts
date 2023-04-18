import { bottomDataCategoryProps } from '../data/data'
import { CategoryT } from '../types/types'

export const getBottomData = (categoryItem: CategoryT, category: string) => {
  return bottomDataCategoryProps[category]?.map((prop) => {
    const data = categoryItem[prop as unknown as keyof CategoryT]
    return { title: `Related ${prop}`, data: Array.isArray(data) ? data : undefined }
  })
}

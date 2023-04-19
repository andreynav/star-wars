import { Categories } from '../data/data'

export const getImgPathCategory = (category: string) => {
  return category === Categories.PEOPLE ? Categories.CHARACTERS : category
}

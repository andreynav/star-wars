import { useCategory } from '../../hooks/useCategory'
import { CategoryPropT } from '../../types/types'
import { BackButton } from '../Card/BackButton'
import { Container } from '../common/Container'
import { Error } from '../common/Error'
import { Loader } from '../common/Loader'
import { CategoryCard } from './CategoryCard'

export const Category = ({ category }: CategoryPropT) => {
  const { categoryItem, error, isError, isLoading } = useCategory(category)

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Error>{error}</Error>
  }

  return (
    <Container>
      <BackButton />
      <CategoryCard categoryItem={categoryItem} category={category} />
    </Container>
  )
}

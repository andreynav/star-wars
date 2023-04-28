import { useCategory } from '../../hooks/useCategory'
import { CategoryPropT } from '../../types/types'
import { getProperErrorComponent } from '../../utils/getProperErrorComponent'
import { BackButton } from '../Card/BackButton'
import { Container } from '../common/Container'
import { CategoryCard } from './CategoryCard'

export const Category = ({ category }: CategoryPropT) => {
  const { categoryItem, error, isLoading } = useCategory(category)

  if (error) {
    return <Container>{getProperErrorComponent(error)}</Container>
  }

  return (
    <Container>
      <BackButton />
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <CategoryCard categoryItem={categoryItem} category={category} />
      )}
    </Container>
  )
}

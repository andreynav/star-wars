import { useCategory } from '../../hooks/useCategory'
import { CategoryPropT } from '../../types/types'
import { BackButton } from '../Card/BackButton'
import { Container } from '../common/Container'
import { CategoryCard } from './CategoryCard'

export const Category = ({ category }: CategoryPropT) => {
  const { categoryItem, error } = useCategory(category)

  if (!categoryItem) return <div>loading...</div>

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <>
          <BackButton />
          <CategoryCard categoryItem={categoryItem} category={category} />
        </>
      )}
    </Container>
  )
}

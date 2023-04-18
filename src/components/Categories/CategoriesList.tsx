import { useCategoryItems } from '../../hooks/useCategoryItems'
import { CategoryPropT } from '../../types/types'
import { Container } from '../common/Container'
import { Paginator } from '../common/Paginator'
import { CategoryCardsList } from './CategoryCardsList'

export const CategoriesList = ({ category }: CategoryPropT) => {
  const { categoryItems, imagesSrc, error, page, setPage, next, previous, isLoading } =
    useCategoryItems(category)
  const isPaginatorVisible = next || previous

  if (isLoading || !categoryItems) return <div>loading...</div>

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <>
          {isPaginatorVisible && (
            <Paginator page={page} setPage={setPage} next={next} previous={previous} />
          )}
          <CategoryCardsList
            categoryItems={categoryItems}
            imagesSrc={imagesSrc}
            category={category}
          />
        </>
      )}
    </Container>
  )
}

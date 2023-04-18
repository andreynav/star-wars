import { useCategoryItems } from '../../hooks/useCategory'
import { EnumCategoriesT } from '../../types/types'
import { Container } from '../common/Container/Container'
import { Paginator } from '../common/Paginator/Paginator'
import { CategoryCardsList } from './CategoryCardsList'

export const CategoriesList = ({ category }: { category: EnumCategoriesT }) => {
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

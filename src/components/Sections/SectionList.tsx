import { useCategoryItems } from '../../hooks/useCategory'
import { EnumCategoriesT } from '../../types/types'
import { getIdFromUrl } from '../../utils/getIdFromUrl'
import { Card } from '../Card/Card'
import { CardListContainer } from '../common/CardListContainer/CardListContainer'
import { Container } from '../common/Container/Container'

export const SectionList = ({ category }: { category: EnumCategoriesT }) => {
  const { categoryItems, imagesSrc, error, page, setPage, next, isLoading } =
    useCategoryItems(category)

  if (isLoading || !categoryItems) return <div>loading...</div>

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <>
          <button
            onClick={() => {
              if (next) setPage((prevPage) => prevPage + 1)
            }}
          >
            page {page}
          </button>
          <CardListContainer>
            {categoryItems.map((item, index) => {
              if (imagesSrc) {
                const imageIndexSrc = imagesSrc[index]
                return (
                  <Card
                    key={imageIndexSrc}
                    category={item}
                    toNavigate={`/${category}/${getIdFromUrl(item.url)}`}
                    src={imageIndexSrc}
                  />
                )
              }
            })}
          </CardListContainer>
        </>
      )}
    </Container>
  )
}

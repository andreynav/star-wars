import styled from 'styled-components'

import { useCategoryItems } from '../../hooks/useCategory'
import { EnumCategoriesT } from '../../types/types'
import { getIdFromUrl } from '../../utils/getIdFromUrl'
import { Card } from '../Card/Card'
import { CardListContainer } from '../common/CardListContainer/CardListContainer'
import { Container } from '../common/Container/Container'
import { Paginator } from '../common/Paginator/Paginator'

export const CategoriesList = ({ category }: { category: EnumCategoriesT }) => {
  const { categoryItems, imagesSrc, error, page, setPage, next, previous, isLoading } =
    useCategoryItems(category)

  if (isLoading || !categoryItems) return <div>loading...</div>

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <>
          {(next || previous) && (
            <PaginatorContainer>
              <Paginator page={page} setPage={setPage} next={next} previous={previous} />
            </PaginatorContainer>
          )}
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

const PaginatorContainer = styled.div`
  display: grid;
  padding-top: 2rem;
`

import { useEffect } from 'react'
import styled from 'styled-components'

import { useCategoryItems } from '../../hooks/useCategoryItems'
import { CategoriesListT } from '../../types/types'
import { Container } from '../common/Container'
import { Error } from '../common/Error'
import { Loader } from '../common/Loader'
import { NotFound } from '../common/NotFound'
import { Paginator } from '../common/Paginator'
import { CategoryCardsList } from './CategoryCardsList'

export const CategoriesList = ({ category, setSearchCategory, search }: CategoriesListT) => {
  const { categoryItems, imagesSrc, error, isError, page, setPage, next, previous, isLoading } =
    useCategoryItems(category, search)

  const isPaginatorVisible = next || previous
  const isCategoryItemsEmpty = categoryItems.length === 0

  useEffect(() => {
    setSearchCategory(category)
  }, [category])

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Error>{error}</Error>
  }

  return (
    <Container>
      <PaginateWrapper>
        {isPaginatorVisible && (
          <Paginator page={page} setPage={setPage} next={next} previous={previous} />
        )}
      </PaginateWrapper>
      {!isCategoryItemsEmpty ? (
        <CategoryCardsList
          categoryItems={categoryItems}
          imagesSrc={imagesSrc}
          category={category}
        />
      ) : (
        <NotFound />
      )}
    </Container>
  )
}

const PaginateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding-top: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`

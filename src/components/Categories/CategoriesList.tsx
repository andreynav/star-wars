import { useEffect } from 'react'
import styled from 'styled-components'

import { useCategoryItems } from '../../hooks/useCategoryItems'
import { getProperErrorComponent } from '../../utils/getProperErrorComponent'
import { Container } from '../common/Container'
import { Paginator } from '../common/Paginator'
import { CategoryCardsList } from './CategoryCardsList'

export const CategoriesList = ({ category, setSearchCategory, search }: any) => {
  const { categoryItems, imagesSrc, error, page, setPage, next, previous, isLoading } =
    useCategoryItems(category, search)
  const isPaginatorVisible = next || previous

  useEffect(() => {
    setSearchCategory(category)
  }, [category])

  if (error) {
    return <Container>{getProperErrorComponent(error)}</Container>
  }

  return (
    <Container>
      <PaginateWrapper>
        {isPaginatorVisible && (
          <Paginator page={page} setPage={setPage} next={next} previous={previous} />
        )}
      </PaginateWrapper>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <CategoryCardsList
          categoryItems={categoryItems}
          imagesSrc={imagesSrc}
          category={category}
        />
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

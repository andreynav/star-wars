import styled from 'styled-components'

import { useCategoryItems } from '../../hooks/useCategoryItems'
import { CategoryPropT } from '../../types/types'
import { getProperErrorComponent } from '../../utils/getProperErrorComponent'
import { Search } from '../Header/Search'
import { Container } from '../common/Container'
import { Paginator } from '../common/Paginator'
import { CategoryCardsList } from './CategoryCardsList'

export const CategoriesList = ({ category }: CategoryPropT) => {
  const {
    categoryItems,
    imagesSrc,
    error,
    page,
    setPage,
    next,
    previous,
    isLoading,
    search,
    setSearch
  } = useCategoryItems(category)
  const isPaginatorVisible = next || previous

  if (error) {
    return <Container>{getProperErrorComponent(error)}</Container>
  }

  return (
    <Container>
      <SearchPaginateWrapper>
        {isPaginatorVisible && (
          <Paginator page={page} setPage={setPage} next={next} previous={previous} />
        )}
        <Search search={search} setSearch={setSearch} />
      </SearchPaginateWrapper>
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

const SearchPaginateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding-top: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

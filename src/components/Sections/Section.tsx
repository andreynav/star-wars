import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { swAPI } from '../../api/api'
import { CardInfoCategoryData, bottomDataCategoryProps } from '../../data/data'
import { CategoryT } from '../../types/types'
import { convertToTitleCase } from '../../utils/convertToTitleCase'
import { DetailedCardContainer } from '../DetailedCard/DetailedCardContainer/DetailedCardContainer'
import { DetailedCardContainerBottom } from '../DetailedCard/DetailedCardContainerBottom/DetailedCardContainerBottom'
import { DetailedCardContainerTop } from '../DetailedCard/DetailedCardContainerTop/DetailedCardContainerTop'
import { CardImage } from '../common/CardImage/CardImage'
import { Container } from '../common/Container/Container'

export const Section = ({ category }: { category: string }) => {
  const { id } = useParams<{ id: string }>()
  const [error, setError] = useState<{ message: string; status?: number } | null>(null)
  const [categoryItem, setCategoryItem] = useState<CategoryT | null>(null)

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        if (id) {
          const data = await swAPI.getCategoryItem(category, id)
          setError(null)
          setCategoryItem(data)
        }
      } catch (error: any) {
        setError({ message: error.message })
      }
    }
    fetchCategory().then()
  }, [id, category])

  if (!categoryItem) return <div>loading...</div>

  // @ts-ignore
  const bottomData = bottomDataCategoryProps[category].map((prop) => {
    // @ts-ignore
    const data = categoryItem[prop]
    return { title: `Related ${prop}`, data: Array.isArray(data) ? data : undefined }
  })

  return (
    <Container>
      {error ? (
        <div className="error">{error.message}</div>
      ) : (
        <DetailedCardContainer>
          <DetailedCardContainerTop>
            <CardImage key={categoryItem.image} src={categoryItem.image} alt={'poster'} />
            <CardInfo>
              {/*// @ts-ignore*/}
              {CardInfoCategoryData[category].map((item) => {
                return (
                  <div key={item}>
                    <InfoTitle>{convertToTitleCase(item)}</InfoTitle>
                    {/*// @ts-ignore*/}
                    <InfoData>{categoryItem[item] ?? 'n/a'}</InfoData>
                  </div>
                )
              })}
            </CardInfo>
          </DetailedCardContainerTop>
          <DetailedCardContainerBottom bottomData={bottomData} />
        </DetailedCardContainer>
      )}
    </Container>
  )
}

const CardInfo = styled.div`
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }
`

const InfoTitle = styled.div`
  color: var(--color-data-title);
  font-size: var(--fs-esm);
`

const InfoData = styled.div`
  padding-bottom: 0.5rem;
`

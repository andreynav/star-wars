import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { imagePaths, swAPI } from '../../api/api'
import { CardInfoCategoryData, bottomDataCategoryProps } from '../../data/data'
import { CategoryT, ImagePaths } from '../../types/types'
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
          // @ts-ignore
          setCategoryItem(data)
        }
      } catch (error: any) {
        setError({ message: error.message })
      }
    }

    fetchCategory().then()
  }, [])

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
            <CardImage
              src={`${imagePaths[category as keyof ImagePaths]}${id}.jpg`}
              alt={'poster'}
            />
            <CardInfo>
              {/*// @ts-ignore*/}
              {CardInfoCategoryData[category].map((item) => {
                return (
                  <div key={item}>
                    {/*// @ts-ignore*/}
                    <b>{item}:</b> {categoryItem[item] ?? 'n/a'}
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

  & div {
    padding: 0.5rem 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }
`

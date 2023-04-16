import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { imageBaseApi, swAPI } from '../../../api/api'
import { Categories } from '../../../data/data'
import { DetailedCardSectionT } from '../../../types/types'
import { getCategoryFromUrl } from '../../../utils/getCategoryFromUrl'
import { getIdFromUrl } from '../../../utils/getIdFromUrl'
import { Card } from '../../Card/Card'
import { ShowMore } from '../ShowMore/ShowMore'

export const DetailedCardSection = ({ title, data }: DetailedCardSectionT) => {
  const [isShowMoreVisible, setIsShowMoreVisible] = useState(data.length > 3)

  const [categoryItems, setCategoryItems] = useState<{ [key: string]: string[] }>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const toggleShowMore = () => {
    setIsShowMoreVisible(!isShowMoreVisible)
  }

  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true)
      try {
        const newCategoryItems = await Promise.all(
          data.map(async (item) => {
            const id = getIdFromUrl(item)
            const itemCategory = getCategoryFromUrl(item)!
            const dataCat = await swAPI.getCategoryItem(itemCategory, id!)
            // @ts-ignore
            return dataCat?.name || dataCat?.title
          })
        )
        const newCategories = newCategoryItems.reduce((acc, item, index) => {
          // @ts-ignore
          const itemCategory = getCategoryFromUrl(data[index])!
          if (!acc[itemCategory]) {
            acc[itemCategory] = []
          }
          acc[itemCategory].push(item)
          return acc
        }, {})
        setCategoryItems(newCategories)
      } catch (e: any) {
        setIsLoading(false)
        console.log(e.message)
      }
      setIsLoading(false)
    }
    fetchCategory().then()
  }, [data])

  if (isLoading || !categoryItems) return <div>loading...</div>

  const getNameIndexShift = (sliceArgs: any): number => {
    return sliceArgs[0] === 3 ? 3 : 0
  }

  const getThumbnails = (data: any, sliceArgs: any) => {
    return (
      <ThumbnailContainer className={'thumbContainer'}>
        {data.slice(...sliceArgs).map((item: string, index: number) => {
          const imgCategory = getCategoryFromUrl(item)
          const imgPathCategory =
            imgCategory === Categories.PEOPLE ? Categories.CHARACTERS : imgCategory
          const nameIndexShift = getNameIndexShift(sliceArgs)
          return (
            <SectionItem key={item} className={'sectionItem'}>
              <Card
                // @ts-ignore
                name={categoryItems?.[getCategoryFromUrl(item)]?.[index + nameIndexShift]}
                category={getCategoryFromUrl(item)!}
                toNavigate={`/${getCategoryFromUrl(item)}/${getIdFromUrl(item)}`}
                src={`${imageBaseApi}${imgPathCategory}/${getIdFromUrl(item)}.jpg`}
              />
            </SectionItem>
          )
        })}
      </ThumbnailContainer>
    )
  }

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      {data.length > 0 ? (
        <>
          <TopContainer className={'top'}>
            {getThumbnails(data, [0, 3])}
            {/*{!isShowMoreVisible && getThumbnails(data, [3], 3)}*/}
            {isShowMoreVisible && <ShowMore onClick={toggleShowMore} nameIsShow />}
          </TopContainer>
          <BottomContainer className={'bottom'}>
            {!isShowMoreVisible && getThumbnails(data, [3])}
            {!isShowMoreVisible && data.length > 3 && <ShowMore onClick={toggleShowMore} />}
          </BottomContainer>
        </>
      ) : (
        <SectionItem>
          <SectionItemNoData>There is no data in the Jedi archives</SectionItemNoData>
        </SectionItem>
      )}
    </Section>
  )
}

const Section = styled.div`
  display: grid;
  align-content: start;
`

const SectionTitle = styled.div`
  font-weight: bold;
`

const TopContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`

const BottomContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`

const SectionItem = styled.div`
  display: grid;
`

const SectionItemNoData = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding-top: 1rem;
`

const ThumbnailContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding-top: 1rem;
  grid-template-columns: repeat(3, 1fr);
`

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
  const getNameIndexShift = (sliceArgs: number[]): number => {
    return sliceArgs[0] === 3 ? 3 : 0
  }
  const getImgPathCategory = (category: string) => {
    return category === Categories.PEOPLE ? Categories.CHARACTERS : category
  }

  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true)
      try {
        const newCategoryItems = await Promise.all(
          data.map(async (item) => {
            const id = getIdFromUrl(item)
            const itemCategory = getCategoryFromUrl(item)!
            if (!id) return
            const dataCategory = await swAPI.getCategoryItem(itemCategory, id)
            return 'name' in dataCategory ? dataCategory.name : dataCategory.title
          })
        )
        const newCategories = newCategoryItems.reduce(
          (acc: { [key: string]: string[] }, item, index) => {
            const itemCategory = getCategoryFromUrl(data[index] as string)!
            if (!acc[itemCategory]) {
              acc[itemCategory] = []
            }
            acc[itemCategory]?.push(item!)
            return acc
          },
          {}
        )
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

  const getThumbnails = (data: string[], sliceArgs: number[]) => {
    return (
      <ThumbnailContainer className={'thumbContainer'}>
        {data.slice(...sliceArgs).map((item: string, index: number) => {
          const imgCategory = getCategoryFromUrl(item)
          const imgPathCategory = getImgPathCategory(imgCategory as string)
          const nameIndexShift = getNameIndexShift(sliceArgs)
          return (
            <SectionItem key={item} className={'sectionItem'}>
              <Card
                name={categoryItems?.[getCategoryFromUrl(item) as string]?.[index + nameIndexShift]}
                category={getCategoryFromUrl(item) as string}
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

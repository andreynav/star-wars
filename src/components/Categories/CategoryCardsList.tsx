import { CategoryCardsListT } from '../../types/types'
import { getIdFromUrl } from '../../utils'
import { Card } from '../Card/Card'
import { CardListContainer } from '../common/CardListContainer'

export const CategoryCardsList = ({ categoryItems, imagesSrc, category }: CategoryCardsListT) => {
  return (
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
  )
}

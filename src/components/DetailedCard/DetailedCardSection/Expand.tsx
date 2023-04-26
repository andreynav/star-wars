import { useSectionContext } from '../../../hooks/useSectionContext'
import { CollapseExpandT } from '../../../types/types'
import { ShowMore } from './ShowMore'

export const Expand = ({ children }: CollapseExpandT) => {
  const { isDataExists, expand, isCollapsed, data, limit } = useSectionContext()
  return isDataExists && isCollapsed && data?.length > limit ? (
    <ShowMore onClick={expand}>{children}</ShowMore>
  ) : (
    <></>
  )
}

import { useSectionContext } from '../../../hooks/useSectionContext'
import { CollapseExpandT } from '../../../types/types'
import { ShowMore } from './ShowMore'

export const Collapse = ({ children }: CollapseExpandT) => {
  const { collapse, isCollapsed } = useSectionContext()
  return !isCollapsed ? <ShowMore onClick={collapse}>{children}</ShowMore> : <></>
}

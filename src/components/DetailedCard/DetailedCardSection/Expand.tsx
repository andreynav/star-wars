import { cloneElement, useContext } from 'react'

import { CollapseExpandT, SectionContextT } from '../../../types/types'
import { SectionContext } from './DetailedCardSectionData'

export const Expand = ({ children }: CollapseExpandT) => {
  const { isDataExists, expand, isCollapsed, data, limit } =
    useContext<SectionContextT>(SectionContext)
  return isDataExists && isCollapsed && data?.length > limit ? (
    cloneElement(children, { onClick: expand })
  ) : (
    <></>
  )
}

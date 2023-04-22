import { cloneElement } from 'react'

import { useSectionContext } from '../../../hooks/useSectionContext'
import { CollapseExpandT } from '../../../types/types'

export const Expand = ({ children }: CollapseExpandT) => {
  const { isDataExists, expand, isCollapsed, data, limit } = useSectionContext()
  return isDataExists && isCollapsed && data?.length > limit ? (
    cloneElement(children, { onClick: expand })
  ) : (
    <></>
  )
}

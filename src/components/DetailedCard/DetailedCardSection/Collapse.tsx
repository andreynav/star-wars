import { cloneElement } from 'react'

import { useSectionContext } from '../../../hooks/useSectionContext'
import { CollapseExpandT } from '../../../types/types'

export const Collapse = ({ children }: CollapseExpandT) => {
  const { collapse, isCollapsed } = useSectionContext()
  return !isCollapsed ? cloneElement(children, { onClick: collapse }) : <></>
}

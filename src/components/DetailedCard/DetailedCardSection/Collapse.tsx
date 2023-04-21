import { cloneElement, useContext } from 'react'

import { CollapseExpandT, SectionContextT } from '../../../types/types'
import { SectionContext } from './DetailedCardSectionData'

export const Collapse = ({ children }: CollapseExpandT) => {
  const { collapse, isCollapsed } = useContext<SectionContextT>(SectionContext)
  return !isCollapsed ? cloneElement(children, { onClick: collapse }) : <></>
}

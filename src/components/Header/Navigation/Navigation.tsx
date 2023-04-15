import styled from 'styled-components'

import { Categories } from '../../../data/data'
import { StyledNavLink } from '../../common/StyledNavLink/StyledNavLink'

const navigationItems = [
  Categories.PEOPLE,
  Categories.SPECIES,
  Categories.PLANETS,
  Categories.STARSHIPS,
  Categories.VEHICLES,
  Categories.FILMS
]

export const Navigation = () => {
  return (
    <NavigationWrapper>
      {navigationItems.map((item) => {
        const itemTitle = item === Categories.PEOPLE ? Categories.CHARACTERS : item
        return (
          <div key={item}>
            <StyledNavLink to={`/${item}/`}>{itemTitle.toUpperCase()}</StyledNavLink>
          </div>
        )
      })}
    </NavigationWrapper>
  )
}

const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  justify-content: stretch;
  align-items: center;
  border-width: 1px 0;
  border-style: solid;
  border-color: grey;
  cursor: pointer;
  align-self: center;

  & ${StyledNavLink} {
    height: 48px;
  }

  & div {
    display: grid;
    align-content: center;
    border-right: 1px solid grey;
  }

  & div:nth-child(6) {
    border-right: none;
  }

  & div:nth-child(4),
  & div:nth-child(5),
  & div:nth-child(6) {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    font-size: var(--fs-sm);

    & ${StyledNavLink} {
      height: 32px;
    }

    & div {
      display: grid;
      border-bottom: 1px solid grey;
    }

    & div:nth-child(3),
    & div:nth-child(6) {
      border-right: none;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;

    & ${StyledNavLink} {
      height: 32px;
    }

    & div {
      display: grid;
      border-right: none;
    }

    & div:nth-child(1),
    & div:nth-child(3),
    & div:nth-child(5) {
      border-right: 1px solid grey;
    }

    & div:nth-child(4) {
      border-bottom: 1px solid grey;
    }
  }
`

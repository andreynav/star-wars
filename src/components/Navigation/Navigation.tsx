import styled from 'styled-components'

import { StyledNavLink } from '../StyledNavLink/StyledNavLink'

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <div>
        <StyledNavLink to={`/people/`}>PEOPLE</StyledNavLink>
      </div>
      <div>
        <StyledNavLink to={`/species/`}>SPECIES</StyledNavLink>
      </div>
      <div>
        <StyledNavLink to={`/planets/`}>PLANETS</StyledNavLink>
      </div>
      <div>
        <StyledNavLink to={`/starships/`}>STARSHIPS</StyledNavLink>
      </div>
      <div>
        <StyledNavLink to={`/vehicles/`}>VEHICLES</StyledNavLink>
      </div>
      <div>
        <StyledNavLink to={`/films/`}>FILMS</StyledNavLink>
      </div>
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

  & div:nth-child(5),
  & div:nth-child(6) {
    border-bottom: none;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);

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
  }
`

import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { starWars } from '../../assets'
import { StyledNavLink } from '../common/StyledNavLink'
import { Navigation } from './Navigation'
import { Toggle } from './Toggle'

export const Header = () => {
  const [theme, setTheme] = useState('light')

  const onSwitchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <StyledHeaderContainer>
      <TopHeader>
        <LogoWrapper>
          <StyledNavLink to={`/`}>
            <Logo src={starWars} alt={'logo'} />
          </StyledNavLink>
        </LogoWrapper>
        <ThemeSwitcher>
          <Toggle onChange={onSwitchTheme} width={64} />
        </ThemeSwitcher>
      </TopHeader>
      <Navigation />
    </StyledHeaderContainer>
  )
}

const StyledHeaderContainer = styled.div`
  display: grid;
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`

const TopHeader = styled.div`
  display: grid;
  grid-gap: 1rem 2rem;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  align-items: center;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;

    & div:nth-child(1) {
      grid-area: 2 / 1/ 3 / 2;
    }

    & div:nth-child(2) {
      grid-area: 1 / 1/ 2 / 3;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
`

const LogoWrapper = styled.div`
  display: grid;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`

const Logo = styled.img`
  display: grid;
  border-radius: var(--radii) var(--radii) 0 0;
  min-width: 300px;
  height: 80px;

  @media (max-width: 768px) {
    height: 64px;
  }

  @media (max-width: 480px) {
    height: 64px;
  }
`

const ThemeSwitcher = styled.div`
  display: grid;
  grid-template-columns: auto;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
  align-items: center;

  & div {
    justify-items: end;
  }
`

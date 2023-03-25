import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { starWars } from '../../assets'
import { Container } from '../Container/Container'
import { Navigation } from '../Nvigation/Navigation'
import { Search } from '../Search/Search'
import { Toggle } from '../Toggle/Toggle'

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
        <Search />
        <LogoWrapper>
          <Container>
            <StyledNavLink to={`/`}>
              <Logo src={starWars} alt={'logo'} />
            </StyledNavLink>
          </Container>
        </LogoWrapper>
        <ModeSwitcher>
          <Toggle onChange={onSwitchTheme} width={96} height={48} />
        </ModeSwitcher>
      </TopHeader>
      <Navigation />
    </StyledHeaderContainer>
  )
}

// TODO: move to separate component
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  justify-self: center;
`

const StyledHeaderContainer = styled.div`
  display: grid;
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`

const TopHeader = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
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
  width: 100%;
  height: 128px;
`

const ModeSwitcher = styled.div`
  display: grid;
  grid-template-columns: auto;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
  align-items: center;
  justify-items: center;
`

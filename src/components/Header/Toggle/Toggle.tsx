import { useState } from 'react'
import styled from 'styled-components'

import { babyYodaBlack, darthVaderBlack } from '../../../assets'
import { StyledToggleSpanT, StyledToggleT, ToggleProps } from '../../../types/types'

export const Toggle = ({ onChange, width, height }: ToggleProps) => {
  const [isToggled, setIsToggled] = useState(true)

  const handleClick = () => {
    setIsToggled(!isToggled)
    onChange()
  }

  return (
    <ToggleWrapper>
      <ToggleLabel {...{ width, height }}>
        <ToggleInput
          type="checkbox"
          defaultChecked={isToggled}
          onClick={handleClick}
          {...{ width, height }}
        />
        <ToggleSpan isToggled={isToggled} {...{ width, height }} />
      </ToggleLabel>
    </ToggleWrapper>
  )
}

const ToggleWrapper = styled.div<StyledToggleT>`
  display: grid;
`

const ToggleLabel = styled.label<StyledToggleT>`
  position: relative;
  display: inline-block;
  width: ${({ width = 64 }) => `${width}px`};
  height: ${({ height = 32 }) => `${height}px`};
`

const ToggleInput = styled.input<StyledToggleT>`
  display: none;

  &:checked + span {
    background-color: transparent;
  }

  &:checked + span:before {
    transform: translateX(${({ width = 32 }) => `${width / 2}px`});
  }
`

const ToggleSpan = styled.span<StyledToggleSpanT>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  transition: 0.3s;
  border-radius: ${({ height = 32 }) => `${height / 2}px`};
  border: 1px solid var(--colors-placeholder);

  &:before {
    position: absolute;
    content: '';
    width: ${({ width = 64, indent = 3 }) => `${width / 2 - 2 * indent - 2}px`};
    height: ${({ height = 32, indent = 3 }) => `${height - 2 * indent - 2}px`};
    left: ${({ indent = 3 }) => `${indent}px`};
    bottom: ${({ indent = 3 }) => `${indent}px`};
    background-color: var(--color-toggle);
    background-image: url(${({ isToggled }) => (isToggled ? babyYodaBlack : darthVaderBlack)});
    box-shadow: var(--shadow);
    background-size: contain;
    border-radius: 50%;
    transition: 0.6s;
  }
`

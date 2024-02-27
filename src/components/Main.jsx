import React from 'react'
import styled from 'styled-components'
import { Container } from './Container'

const Wrapper = styled.main`
  padding: 2rem 0;
  background-color: var(--colors-bg);

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`

export const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}

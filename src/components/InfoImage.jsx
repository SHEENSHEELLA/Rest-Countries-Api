import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const InfoImage = ({ flags }) => {
  return <Image src={flags.png} alt={flags.alt} />
}

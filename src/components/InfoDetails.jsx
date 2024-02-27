import React from 'react'
import styled from 'styled-components'
import { InfoDetailsListGroup } from './InfoDetailsListGroup'
import { InfoDetailsList } from './InfoDetailsList'
import { InfoDetailsListItem } from './InfoDetailsListItem'

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`

export const InfoDetails = ({
  name,
  population,
  region,
  subregion,
  capital,
  languages,
}) => {
  return (
    <>
      <InfoTitle>{name.common}</InfoTitle>
      <InfoDetailsListGroup>
        <InfoDetailsList>
          <InfoDetailsListItem>
            <b>Native Name:</b>{' '}
            {Object.keys(languages).map((language) => (
              <p key={language}>
                Native Name ({language}): {name.nativeName[language].common}
              </p>
            ))}
          </InfoDetailsListItem>
          <InfoDetailsListItem>
            <b>Population:</b> {population}
          </InfoDetailsListItem>
          <InfoDetailsListItem>
            <b>Region:</b> {region}
          </InfoDetailsListItem>
          <InfoDetailsListItem>
            <b>Sub Region:</b> {subregion}
          </InfoDetailsListItem>
          <InfoDetailsListItem>
            <b>Capital:</b> {capital}
          </InfoDetailsListItem>
        </InfoDetailsList>
      </InfoDetailsListGroup>
    </>
  )
}

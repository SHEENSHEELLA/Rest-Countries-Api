import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { filterByCode } from '../utils/config'
import { InfoImage } from './InfoImage'
import { InfoDetails } from './InfoDetails'
import { InfoList } from './InfoList'
import { InfoBorderCountries } from './InfoBorderCountries'
import { fetchData } from '../utils/Utils'
import { NotFound } from '../pages/NotFound'

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`

export const Info = (props) => {
  const {
    name,
    flags,
    capital,
    population,
    region,
    subregion,
    tld,
    currencies = {},
    languages = [],
    borders = [],
    navigate,
  } = props

  const [neighbors, setNeighbors] = useState([])
  const [error, setError] = useState(null)

  // useEffect(() => {
  //   if (borders.length)
  //     axios
  //       .get(filterByCode(borders))
  //       .then(({ data }) => setNeighbors(data.map((c) => c.name.common)))
  // }, [borders])

  useEffect(() => {
    if (borders.length) {
      const url = filterByCode(borders)
      fetchData(url)
        .then((data) => setNeighbors(data.map((c) => c.name.common)))
        .catch((error) =>
          setError(
            'Failed to fetch border countries data. Please try again later.'
          )
        )
    }
  }, [borders])

  return (
    <Wrapper>
      <InfoImage flags={flags} />
      <div>
        <InfoDetails
          name={name}
          capital={capital}
          population={population}
          region={region}
          subregion={subregion}
          languages={languages}
        />
        <InfoList tld={tld} currencies={currencies} languages={languages} />
        {/* Условный рендеринг для вывода компонентов или сообщения об ошибке */}
        {error ? ( // Если есть ошибка, выводим сообщение об ошибке с помощью компонента NotFound
          <NotFound message={error} borders={borders} />
        ) : (
          <InfoBorderCountries
            borders={borders}
            navigate={navigate}
            neighbors={neighbors}
          />
        )}
      </div>
    </Wrapper>
  )
}

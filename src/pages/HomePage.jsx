import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Controls } from '../components/Controls'
import { List } from '../components/List'
import { Card } from '../components/Card'
import { ALL_COUNTRIES } from '../config'

export const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const handleSearch = (search, region) => {
    console.log('Search:', search)
    console.log('Region:', region)
    let data = [...countries]

    if (region) {
      data = data.filter((c) => c.region.includes(region))
    }
    if (search) {
      data = data.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      )
    }
    console.log('Data:', data)
    setFilteredCountries(data)
  }

  console.log('Countries:', countries)
  console.log('Filtered countries:', filteredCountries)

  useEffect(() => {
    if (countries.length === 0) {
      axios
        .get(ALL_COUNTRIES)
        .then(({ data }) => {
          setCountries(data)
          setLoading(false)
        })
        .catch((error) => console.error('Error fetching countries:', error))
    } else {
      setLoading(false)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Controls onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <List>
          {!loading &&
            (filteredCountries.length > 0 ? filteredCountries : countries).map(
              (c) => {
                const countryInfo = {
                  img: c.flags.png,
                  name: c.name.common,
                  info: [
                    {
                      title: 'Population',
                      description: c.population.toLocaleString(),
                    },
                    {
                      title: 'Region',
                      description: c.region,
                    },
                    {
                      title: 'Capital',
                      description: c.capital,
                    },
                  ],
                }

                return (
                  <Card
                    key={c.name.common}
                    onClick={() => navigate(`/country/${c.name.common}`)}
                    {...countryInfo}
                  />
                )
              }
            )}
        </List>
      )}
    </>
  )
}

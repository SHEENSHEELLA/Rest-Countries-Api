import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Controls } from '../components/Controls'
import { List } from '../components/List'
import { Card } from '../components/Card'
import { ALL_COUNTRIES } from '../utils/config'
import { fetchData } from '../utils/Utils'
import { NotFound } from './NotFound'
import { Loading } from '../components/Loading'

export const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
      fetchData(ALL_COUNTRIES)
        .then((data) => {
          setCountries(data)
          setLoading(false)
        })
        .catch((error) => {
          setError('Error fetching all countries: ' + error.message) // Установка сообщения об ошибке
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <>
      <Controls onSearch={handleSearch} />
      {error && <NotFound message={error} />}
      {loading ? (
        <Loading />
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

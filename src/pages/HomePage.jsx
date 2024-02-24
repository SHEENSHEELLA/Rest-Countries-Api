import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Controls } from '../components/Controls'
import { List } from '../components/List'
import { Card } from '../components/Card'
import { ALL_COUNTRIES } from '../config'

export const HomePage = ({ setCountries, countries }) => {
  // const [countries, setCountries] = useState([])

  const navigate = useNavigate()

  console.log(countries)

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
    }
  }, [])

  return (
    <>
      <Controls />
      <List>
        {countries.map((c) => {
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
        })}
      </List>
    </>
  )
}
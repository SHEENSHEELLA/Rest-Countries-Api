import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { searchByCountry } from '../utils/config'
import { Button } from '../components/Button'
import { Info } from '../components/Info'
import { fetchData } from '../utils/Utils'
import { NotFound } from './NotFound'

export const Details = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const [country, setCountry] = useState(null)
  const [error, setError] = useState(null)

  console.log('country', country)

  // useEffect(() => {
  //   axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]))
  // }, [name])

  useEffect(() => {
    if (name) {
      const url = searchByCountry(name)
      fetchData(url)
        .then((data) => setCountry(data[0]))
        .catch((error) =>
          setError(
            'Failed to fetch country data. Please try again later. ' +
              error.message
          )
        )
    }
  }, [name])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {error ? ( // Если есть ошибка, выводим сообщение об ошибке с помощью компонента NotFound
        <NotFound message={error} />
      ) : (
        country && <Info navigate={navigate} {...country} /> // Если нет ошибки и есть данные по стране, выводим компонент Info
      )}
    </div>
  )
}

import axios from 'axios'

export const fetchData = (url, params) => {
  return axios
    .get(url, params)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching data:', error)
      throw error
    })
}

import { useEffect, useState } from 'react'

const useLoadWeather = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const url = '/api/weather'
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const { nowData } = await response.json()

        setData(nowData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return [data]
}

export default useLoadWeather

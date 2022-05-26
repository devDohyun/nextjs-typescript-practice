import type { NextPage } from 'next'
import Home from '../components/Home'
import useLoadWeather from '../hooks/useLoadWeather'

const Index: NextPage = () => {
  const [weatherItems] = useLoadWeather()

  return (
    <>
      <Home weatherItems={weatherItems} />
    </>
  )
}

export default Index

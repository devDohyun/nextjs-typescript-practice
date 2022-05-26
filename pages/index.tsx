import type { NextPage } from 'next'
import { Weather } from '../@types'
import Home from '../components/Home'

const Index: NextPage = () => {
  const weatherItems: Weather[] = []

  return (
    <>
      <Home weatherItems={weatherItems} />
    </>
  )
}

export default Index

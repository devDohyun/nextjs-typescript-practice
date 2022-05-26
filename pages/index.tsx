import type { NextPage } from 'next'
import Link from 'next/link'
import Home from '../components/Home'
import useLoadWeather from '../hooks/useLoadWeather'

const Index: NextPage = () => {
  const [weatherItems] = useLoadWeather()

  return (
    <>
      <Link href="/test">go to test</Link>
      <Home weatherItems={weatherItems} />
    </>
  )
}

export default Index

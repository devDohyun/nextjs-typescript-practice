import { Weather } from '../../@types'
import WeatherForecast from '../Weather/Forecast'
import { StyledContainer, StyledTitle } from './styles'

const Home = ({ weatherItems }: { weatherItems: Weather[] }) => {
  return (
    <StyledContainer>
      <StyledTitle>Weather forecast</StyledTitle>
      <WeatherForecast items={weatherItems} />
    </StyledContainer>
  )
}

export default Home

import { Weather } from '../../../@types'
import ForecastItem from './Item'
import { StyledContainer } from './styles'

const WeatherForecast = ({ items }: { items: Weather[] }) => {
  return (
    <StyledContainer>
      {items.map((item, idx) => (
        <ForecastItem key={idx} item={item} />
      ))}
    </StyledContainer>
  )
}

export default WeatherForecast

import { Weather } from '../../../../@types'
import { StyledForecastItem, StyledTemperature } from './styles'

const ForecastItem = ({ item }: { item: Weather }) => {
  return (
    <StyledForecastItem>
      <h3>{item.regionName}</h3>
      <StyledTemperature>{item.Temperature}</StyledTemperature>
    </StyledForecastItem>
  )
}

export default ForecastItem

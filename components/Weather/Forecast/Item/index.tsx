import { Weather } from '../../../../@types'
import { StyledForecastItem } from './styles'

const ForecastItem = ({ item }: { item: Weather }) => {
  return (
    <StyledForecastItem>
      <h3>{item.regionName}</h3>
      <h5>{item.temperture}</h5>
    </StyledForecastItem>
  )
}

export default ForecastItem

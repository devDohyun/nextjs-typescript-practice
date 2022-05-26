import { Weather } from '../../../../@types'
import { StyledForecastItem } from './styles'

const ForecastItem = ({ item }: { item: Weather }) => {
  return <StyledForecastItem>{item.regionName}</StyledForecastItem>
}

export default ForecastItem

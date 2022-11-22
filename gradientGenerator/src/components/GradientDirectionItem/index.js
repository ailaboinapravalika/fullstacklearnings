// Write your code here
import {ListEle, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {itemDetails, onClickDirection, initDirection} = props
  const {directionId, value, displayText} = itemDetails

  const onClickButton = () => {
    onClickDirection(value)
  }

  const activeDir = value === initDirection ? 'active' : ''
  console.log(activeDir)

  return (
    <ListEle key={directionId}>
      <Button type="button" onClick={onClickButton} activeDir={activeDir}>
        {displayText}
      </Button>
    </ListEle>
  )
}

export default GradientDirectionItem

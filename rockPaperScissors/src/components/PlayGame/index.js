import {ButtonsDiv, Button, ImgEle} from './StyledComponents'

const PlayGame = props => {
  const {choicesList} = props

  return (
    <ButtonsDiv>
      {choicesList.map(choice => {
        const testIdName = `${choice.id.toLowerCase()}Button`
        const {onClickUserChoice} = props
        const onClickBtn = () => {
          onClickUserChoice(choice.id)
        }

        return (
          <Button
            key={choice.id}
            type="button"
            onClick={onClickBtn}
            data-testid={testIdName}
          >
            <ImgEle bgColor={choice.id} src={choice.imageUrl} alt={choice.id} />
          </Button>
        )
      })}
    </ButtonsDiv>
  )
}

export default PlayGame

import {
  ResultDiv,
  ChoicesDiv,
  Choice,
  YourChoice,
  ChoiceImg,
  PlayAgainButton,
  WonText,
} from './StyledComponents'

const ResultView = props => {
  const onPlayAgain = () => {
    const {onClickPlayAgain} = props
    onClickPlayAgain()
  }

  const {yourChoice, oppoChoice, winOrLose} = props

  return (
    <ResultDiv>
      <ChoicesDiv>
        <Choice>
          <YourChoice>YOU</YourChoice>
          <ChoiceImg src={yourChoice} alt="your choice" />
        </Choice>
        <Choice>
          <YourChoice>OPPONENT</YourChoice>
          <ChoiceImg src={oppoChoice} alt="opponent choice" />
        </Choice>
      </ChoicesDiv>
      <WonText>{winOrLose}</WonText>

      <PlayAgainButton type="button" onClick={onPlayAgain}>
        Play Again
      </PlayAgainButton>
    </ResultDiv>
  )
}

export default ResultView

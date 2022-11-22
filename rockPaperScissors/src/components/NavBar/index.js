import {NavEle, TitleEle, ScoreBox, ScoreTitle, Score} from './StyledComponents'

const NavBar = props => {
  const {score} = props

  return (
    <NavEle>
      <TitleEle>Rock Paper Scissors</TitleEle>
      <ScoreBox>
        <ScoreTitle>Score</ScoreTitle>
        <Score>{score}</Score>
      </ScoreBox>
    </NavEle>
  )
}

export default NavBar

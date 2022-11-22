import {Component} from 'react'

import {MainDiv, RuleBox} from './StyledComponents'

import NavBar from '../NavBar'

import PlayGame from '../PlayGame'
import RulesModal from '../RulesModal'
import ResultView from '../ResultView'

const choicesIds = ['ROCK', 'PAPER', 'SCISSORS']

const choicesNumbers = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
}

class RpsGame extends Component {
  state = {
    score: 0,
    isPlaying: true,
    yourChoice: '',
    winOrLose: '',
    oppoChoice: '',
  }

  onClickUserChoice = choice => {
    const randomChoice = Math.floor(Math.random() * 3)
    const oppoChoice = choicesIds[randomChoice]
    const userChoice = choicesNumbers[choice]
    let newScore
    let winOrLose
    const tempScore = userChoice - randomChoice
    if (tempScore === 0) {
      newScore = 0
      winOrLose = 'IT IS DRAW'
    } else if (tempScore === 1 || tempScore === -2) {
      newScore = 1
      winOrLose = 'YOU WON'
    } else {
      newScore = -1
      winOrLose = 'YOU LOSE'
    }
    const {choicesList} = this.props
    const youChoiceItem = choicesList.filter(item => item.id === choice)

    const oppoChoiceItem = choicesList.filter(item => item.id === oppoChoice)
    const yourImg = youChoiceItem[0].imageUrl
    const opponentImg = oppoChoiceItem[0].imageUrl
    console.log(youChoiceItem[0].imageUrl)
    console.log(oppoChoiceItem[0].imageUrl)

    this.setState(prevState => ({
      yourChoice: yourImg,
      oppoChoice: opponentImg,
      isPlaying: !prevState.isPlaying,
      score: prevState.score + newScore,
      winOrLose,
    }))
  }

  onClickPlayAgain = () => {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
      yourChoice: '',
      oppoChoice: '',
      winOrLose: '',
    }))
  }

  render() {
    const {score, isPlaying, yourChoice, winOrLose, oppoChoice} = this.state
    const {choicesList} = this.props

    return (
      <MainDiv>
        <NavBar score={score} />
        {isPlaying && (
          <PlayGame
            choicesList={choicesList}
            onClickUserChoice={this.onClickUserChoice}
          />
        )}
        {!isPlaying && (
          <ResultView
            yourChoice={yourChoice}
            oppoChoice={oppoChoice}
            winOrLose={winOrLose}
            onClickPlayAgain={this.onClickPlayAgain}
          />
        )}

        <RuleBox>
          <RulesModal />
        </RuleBox>
      </MainDiv>
    )
  }
}
export default RpsGame

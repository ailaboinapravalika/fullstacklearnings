/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import './index.css'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, emojisClicksList: [], winOrLose: false}

  onStartAgain = () => {
    this.setState({score: 0, emojisClicksList: [], winOrLose: false})
  }

  onSelectedEmoji = id => {
    const {emojisClicksList, topScore, score} = this.state
    let updatedTopScore
    const lose = emojisClicksList.some(emojiId => emojiId === id)
    if (lose) {
      updatedTopScore = topScore > score ? topScore : score
      this.setState({winOrLose: true, topScore: updatedTopScore})
    } else {
      const newList = [...emojisClicksList, id]
      const newLength = newList.length
      const win = newLength === 12
      updatedTopScore = newLength > topScore ? newLength : topScore
      if (win) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          topScore: updatedTopScore,
          emojisClicksList: newList,
          winOrLose: win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          emojisClicksList: newList,
          winOrLose: win,
        }))
      }
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, winOrLose} = this.state
    const updatedEmojisList = this.shuffledEmojisList()

    let mainCard
    if (winOrLose) {
      mainCard = (
        <WinOrLoseCard score={score} onStartAgain={this.onStartAgain} />
      )
    } else {
      mainCard = (
        <ul className="emoji-list-container">
          {updatedEmojisList.map(emojiItem => (
            <EmojiCard
              emojiDetails={emojiItem}
              key={emojiItem.id}
              onSelectedEmoji={this.onSelectedEmoji}
            />
          ))}
        </ul>
      )
    }

    return (
      <div className="bg-emoji-game">
        <NavBar score={score} topScore={topScore} winOrLose={winOrLose} />
        <div className="emoji-game-main-card">{mainCard}</div>
      </div>
    )
  }
}

export default EmojiGame

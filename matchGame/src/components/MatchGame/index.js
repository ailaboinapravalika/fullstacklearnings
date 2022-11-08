import {Component} from 'react'

import ImageItem from '../ImageItem'
import TabItem from '../TabItem'

import './index.css'

class MatchGame extends Component {
  state = {
    selectedTabId: '',
    selectedImage: '',
    score: 0,
    timer: 60,
    timeUp: false,
  }

  componentDidMount() {
    console.log('compinent did mount')
    const {tabsList, imagesList} = this.props
    this.setState({
      selectedTabId: tabsList[0].tabId,
      selectedImage: imagesList[0].imageUrl,
    })
    this.timerID = setInterval(this.decreaseTimer, 1000)
  }

  decreaseTimer = () => {
    const {timer} = this.state
    if (timer) {
      this.setState({
        timer: timer - 1,
      })
    } else {
      clearInterval(this.timerID)
      this.setState({timeUp: true})
    }
  }

  onTabSelect = id => {
    this.setState({selectedTabId: id})
  }

  onSelectedThumbNail = id => {
    const {selectedImage, score} = this.state
    const {imagesList} = this.props
    const lengthOfList = imagesList.length

    const imageUrlToGuess = imagesList.filter(item => item.id === id)
    if (selectedImage === id) {
      const randomIndex = Math.floor(Math.random() * lengthOfList)
      const newImageId = imagesList[randomIndex].imageUrl
      this.setState({selectedImage: newImageId, score: score + 1})
    } else {
      this.setState({timeUp: true, timer: 0})
    }
  }

  resumeGame = () => {
    this.setState({score: 0, timeUp: false, timer: 60})
    this.componentDidMount()
    console.log('resuem')
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {selectedTabId, score, timer, selectedImage, timeUp} = this.state
    const filteredImagesList = imagesList.filter(
      image => image.category === selectedTabId,
    )
    let gameContainer
    if (timeUp) {
      gameContainer = (
        <div className="trypy-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy"
          />
          <p className="your-score-heading">YOUR SCORE</p>
          <p className="final-score">{score}</p>
          <button onClick={this.resumeGame} className="play-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="reset"
            />
            <p className="reset-text">PLAY AGAIN</p>
          </button>
        </div>
      )
    } else {
      gameContainer = (
        <div className="bg-match-game">
          <div className="guess-img-container">
            <img src={selectedImage} className="guess-img" alt="match" />
          </div>
          <ul className="tabs-container">
            {tabsList.map(tab => (
              <TabItem
                tabDetails={tab}
                key={tab.tabId}
                onTabSelect={this.onTabSelect}
                selectedTabId={selectedTabId}
              />
            ))}
          </ul>
          <ul className="list-container">
            {filteredImagesList.map(imageItem => (
              <ImageItem
                imageDetails={imageItem}
                key={imageItem.id}
                onSelectedThumbNail={this.onSelectedThumbNail}
              />
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="bg-main-game">
        <nav className="nav-bar">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              className="logo-img"
              alt="website logo"
            />
          </div>
          <ul className="score-container">
            <li className="score">
              <p>
                Score: <span className="score-number">{score}</span>
              </p>
            </li>
            <li className="timer-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-img"
              />
              <p className="timer">{timer} sec</p>
            </li>
          </ul>
        </nav>
        {gameContainer}
      </div>
    )
  }
}

export default MatchGame

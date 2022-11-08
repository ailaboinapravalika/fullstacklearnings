// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {
    isRunning: false,
    timeLimit: 25,
    currentTime: 1500,
    timerStarted: false,
  }

  componentDidMount() {
    const {isRunning} = this.state
    this.timerID = setInterval(this.decreaseTime, 1000)
  }

  decreaseTime = () => {
    const {isRunning, timeLimit, currentTime} = this.state
    if (currentTime) {
      if (isRunning) {
        this.setState({currentTime: currentTime - 1})
      }
    } else {
      this.setState({isRunning: false, currentTime: 1500})
    }
  }

  onStartTimer = () => {
    const {isRunning} = this.state
    this.setState(prevState => ({
      isRunning: !prevState.isRunning,
      timerStarted: true,
    }))
  }

  onIncreaseTimer = () => {
    const {timerStarted} = this.state
    if (!timerStarted) {
      this.setState(prevState => ({
        timeLimit: prevState.timeLimit + 1,
        currentTime: (prevState.timeLimit + 1) * 60,
        isRunning: false,
      }))
    }
  }

  onDecreaseTimer = () => {
    const {timeLimit, timerStarted} = this.state
    const newTimeLimit = timeLimit - 1
    if (!timerStarted) {
      if (newTimeLimit) {
        this.setState({
          timeLimit: newTimeLimit,
          currentTime: newTimeLimit * 60,
          isRunning: false,
        })
      }
    }
  }

  onResetTimer = () => {
    this.setState({
      timeLimit: 25,
      currentTime: 1500,
      isRunning: false,
      timerStarted: false,
    })
  }

  render() {
    const {isRunning, timeLimit, currentTime} = this.state
    let minutes = Math.floor(currentTime / 60)
    let seconds = currentTime % 60
    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds

    const startOrPauseUrl = isRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altStartOrPause = isRunning ? 'pause icone' : 'play icon'

    return (
      <div className="bg-digi-timer">
        <div className="main-container">
          <h1 className="digi-heading">Digital Timer</h1>
          <div className="interactive-timer-container">
            <div className="timer-display-container">
              <div className="circular-container-timer">
                <h1 className="running-time">
                  {minutes}:{seconds}
                </h1>
                <p className="timer-status">
                  {isRunning ? 'Running' : 'Paused'}
                </p>
              </div>
            </div>
            <div className="control-panel-container">
              <div className="start-reset-container">
                <button
                  className="start-btn "
                  type="button"
                  onClick={this.onStartTimer}
                >
                  <img
                    src={startOrPauseUrl}
                    className="start-img"
                    alt={altStartOrPause}
                  />
                  <p className="start-para">{isRunning ? 'Pause' : 'Start'}</p>
                </button>
                <button
                  className="start-btn"
                  type="button"
                  onClick={this.onResetTimer}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    className="start-img"
                    alt="reset icon"
                  />
                  <p className="start-para">Reset</p>
                </button>
              </div>
              <p className="set-timer-para">Set Timer Limit</p>
              <div className="change-limit-container">
                <button
                  className="plus-btn"
                  type="button"
                  onClick={this.onDecreaseTimer}
                >
                  -
                </button>
                <p className="updated-time">{timeLimit}</p>
                <button
                  className="plus-btn"
                  type="button"
                  onClick={this.onIncreaseTimer}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer

// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {time: 0, isStarted: false, isRunning: false}

  componentDidMount() {
    this.timerID = setInterval(this.increaseTime, 1000)
  }

  increaseTime = () => {
    const {time, isRunning} = this.state
    if (isRunning) {
      this.setState({time: time + 1})
    }
  }

  onResetTimer = () => {
    this.setState({time: 0, isStarted: false, isRunning: false})
  }

  onStopTimer = () => {
    const {isStarted} = this.state
    if (isStarted) {
      this.setState(prevState => ({isRunning: !prevState.isRunning}))
    }
  }

  onStartTimer = () => {
    this.setState(prevState => ({
      isStarted: true,
      isRunning: !prevState.isRunning,
    }))
  }

  render() {
    const {time} = this.state
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds

    return (
      <div className="bg-stopwatch">
        <div className="stopwatch-main-container">
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="timer-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <h1 className="timer-heading">Timer</h1>
          </div>
          <h1 className="time">
            {minutes}:{seconds}
          </h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button green-bg"
              onClick={this.onStartTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="button red-bg"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button yellow-bg"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

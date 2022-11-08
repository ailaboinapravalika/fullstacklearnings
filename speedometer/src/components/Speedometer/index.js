// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    let currentState
    this.setState(prevState => {
      if (prevState.count <= 190) {
        currentState = {count: prevState.count + 10}
      } else {
        currentState = {count: prevState.count}
      }
      return currentState
    })
  }

  onBrake = () => {
    let currentState
    this.setState(prevState => {
      if (prevState.count >= 10) {
        currentState = {count: prevState.count - 10}
      } else {
        currentState = {count: prevState.count}
      }
      return currentState
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="title">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img"
        />
        <h1 className="speed-text">Speed is {count}mph</h1>
        <p className="guiding-line">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button className="btn-accelerate btn" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="btn-brake btn" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

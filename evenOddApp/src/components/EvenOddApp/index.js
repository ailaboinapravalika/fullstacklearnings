// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrement = () => {
    const {number} = this.state
    const randomNum = Math.ceil(Math.random() * 100)
    console.log(typeof randomNum)
    this.setState(prevState => ({number: prevState.number + randomNum}))
  }

  render() {
    const {number} = this.state
    const num = number % 2 === 0 ? 'Count is even' : 'Count is odd'

    return (
      <div className="bg-even-odd">
        <div className="card">
          <h1 className="count-data">Count {number}</h1>
          <p className="guide-line">{num}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="tag-line">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

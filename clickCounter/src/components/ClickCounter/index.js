// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickIncrease = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <span className="count"> {count} </span>
          times
        </h1>
        <p className="guiding-text">Click the button to increase the count!</p>
        <button className="button-click" onClick={this.onClickIncrease}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter

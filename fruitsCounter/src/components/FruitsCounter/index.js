// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {countMango: 0, countBanana: 0}

  onEatMango = () => {
    this.setState(prevState => ({countMango: prevState.countMango + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({countBanana: prevState.countBanana + 1}))
  }

  render() {
    const {countMango, countBanana} = this.state

    return (
      <div className="container">
        <div className="fruits-container">
          <h1 className="information">
            Bob ate <span className="count"> {countMango} </span>mangoes
            <span className="count"> {countBanana} </span>bananas
          </h1>
          <div className="images-container">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button className="btn" onClick={this.onEatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button className="btn" onClick={this.onEatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

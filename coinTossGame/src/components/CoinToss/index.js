// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {isHeads: 0, total: 0, heads: 0, tails: 0}

  onCoinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (!tossResult) {
      this.setState(prevState => ({
        isHeads: tossResult,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHeads: tossResult,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  getImageElement = () => {
    const {isHeads} = this.state
    if (!isHeads) {
      return 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    }
    return 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
  }

  render() {
    const {isHeads, total, heads, tails} = this.state
    const imgElement = this.getImageElement()

    return (
      <div className="bg-toss-coin">
        <div className="toss-coin-main-card">
          <h1 className="toss-coin-heading">Coin Toss Game</h1>
          <p className="toss-coin-sub-heading">Heads (or) Tails</p>
          <img src={imgElement} alt="toss result" className="heads-tails-img" />
          <button
            onClick={this.onCoinToss}
            type="button"
            className="toss-button"
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', noOfLetters: 'No.of letters: 0'}

  onChangeInput = event => {
    const word = event.target.value
    const number = word.length
    this.setState({searchInput: word, noOfLetters: `No.of letters: ${number}`})
  }

  render() {
    const {searchInput, noOfLetters} = this.state

    return (
      <div className="bg-calculator">
        <div className="main-card">
          <div className="card">
            <h1 className="heading">Calculate the letters you enter</h1>
            <div className="input-card">
              <label htmlFor="text" className="label-enter">
                Enter the phrase
              </label>
              <input
                id="text"
                type="text"
                className="searchbar"
                placeholder="Enter the phrase"
                onChange={this.onChangeInput}
                value={searchInput}
              />
              <p className="count-text ">{noOfLetters}</p>
            </div>
          </div>
          <div className="card">
            <img
              className="calci-img"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

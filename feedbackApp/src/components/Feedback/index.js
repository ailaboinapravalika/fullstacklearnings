// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isResponseGiven: false}

  onClickResponse = () => {
    this.setState({isResponseGiven: true})
  }

  render() {
    const {resources} = this.props
    const {isResponseGiven} = this.state
    const {emojis} = resources
    const {loveEmojiUrl} = resources
    let card
    if (isResponseGiven) {
      card = (
        <div className="thanks-card">
          <img src={loveEmojiUrl} className="love-img" alt="love emoji" />
          <h1 className="thanks">Thank You</h1>
          <p className="thanks-reply">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      )
    } else {
      card = (
        <>
          <h1 className="fb-heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emotions-box">
            {emojis.map(response => (
              <li
                key={response.id}
                className="response-option"
                onClick={this.onClickResponse}
              >
                <img
                  src={response.imageUrl}
                  className="response-option-img"
                  alt={response.name}
                />
                <p className="btn-emotion">{response.name}</p>
              </li>
            ))}
          </ul>
        </>
      )
    }

    return (
      <div className="bg-facebook">
        <div className="facebook-main-card">{card}</div>
      </div>
    )
  }
}

export default Feedback

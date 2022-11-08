// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {btn: 'Subscribe'}

  renderSubscribe = () => {
    const {btn} = this.state

    if (btn === 'Subscribe') {
      this.setState({btn: 'Subscribed'})
    } else {
      this.setState({btn: 'Subscribe'})
    }
  }

  render() {
    const {btn} = this.state

    return (
      <div className="bg-welcome">
        <h1 className="welcome-text">Welcome</h1>
        <p className="greeting">Thank You!Happy Learning</p>
        <button className="button" onClick={this.renderSubscribe}>
          {btn}
        </button>
      </div>
    )
  }
}

export default Welcome

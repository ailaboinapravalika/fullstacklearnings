// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLogged: false}

  onClickBtn = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  render() {
    const {isLogged} = this.state

    return (
      <div className="bg-box">
        <div className="card">
          {<Message isLogged={isLogged} />}
          {<Logout onClickBtn={this.onClickBtn} isLogged={isLogged} />}
          {<Login onClickBtn={this.onClickBtn} isLogged={isLogged} />}
        </div>
      </div>
    )
  }
}

export default Home

// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorText: false, errorText: ''}

  onUsernameChange = e => {
    this.setState({username: e.target.value})
  }

  onPasswordChange = e => {
    this.setState({password: e.target.value})
  }

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onWrongUsername = d => {
    console.log(d)
  }

  onSubmitForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessLogin()
    } else {
      this.onWrongUsername(data)
      this.setState({showErrorText: true, errorText: data.error_msg})
    }
  }

  render() {
    const {username, password, showErrorText, errorText} = this.state
    console.log(showErrorText, errorText)

    return (
      <div className="login-form-bg">
        <div className="web-logo-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <div className="login-img-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-img"
          />
        </div>
        <div className="form-bg">
          <div className="web-logo-bg-lg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-lg"
            />
          </div>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <label htmlFor="username" className="username-label">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="input-username"
              placeholder="Username"
              onChange={this.onUsernameChange}
              value={username}
            />
            <label htmlFor="password" className="username-label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="input-username"
              placeholder="Password"
              onChange={this.onPasswordChange}
              value={password}
            />
            <button type="submit" className="login-btn">
              Login
            </button>
            {showErrorText && <p className="error">{errorText}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm

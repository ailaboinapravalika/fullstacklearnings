import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const loginApiUrl = 'https://apis.ccbp.in/login'

class Login extends Component {
  state = {username: '', password: '', errorStatus: false, errorMsg: ''}

  onSuccessLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    console.log('submit-user-token-got', jwtToken)
  }

  authenticateUser = async e => {
    console.log('submitted')
    e.preventDefault()
    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      console.log('submit - ok')
      this.setState({errorStatus: false})
      this.onSuccessLogin(data.jwt_token)
    } else {
      console.log('submit-wrong')
      this.setState({errorStatus: true, errorMsg: data.error_msg})
    }
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  renderUserName = () => {
    const {username} = this.state

    return (
      <>
        <label htmlFor="username" className="username">
          USERNAME
        </label>
        <input
          id="username"
          className="userInput"
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor="password" className="username">
          PASSWORD
        </label>
        <input
          id="password"
          className="userInput"
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderLoginForm = () => {
    const {errorStatus, errorMsg} = this.state
    console.log('login-form-loaded')

    return (
      <form className="login-form" onSubmit={this.authenticateUser}>
        {this.renderUserName()}
        {this.renderPassword()}
        <button className="login-btn" type="submit">
          Login
        </button>
        {errorStatus && <p className="error-login">{errorMsg}</p>}
      </form>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    console.log('login-render')
    return (
      <div className="login-page-bg">
        <div className="login-form-card">
          <div className="logo-bg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </div>
          {this.renderLoginForm()}
        </div>
      </div>
    )
  }
}

export default Login

// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    secondName: '',
    firstNameError: false,
    secondNameError: false,
    registerSuccess: false,
  }

  onChangeFirstName = e => {
    this.setState({firstName: e.target.value})
  }

  onBlurFirstName = e => {
    if (e.target.value === '') {
      this.setState({firstNameError: true})
    } else {
      this.setState({firstNameError: false})
    }
  }

  onBlurSecondName = e => {
    if (e.target.value === '') {
      this.setState({secondNameError: true})
    } else {
      this.setState({secondNameError: false})
    }
  }

  onChangeSecondName = e => {
    this.setState({secondName: e.target.value})
  }

  onSubmitForm = e => {
    e.preventDefault()
    const {firstName, secondName} = this.state
    if (firstName === '') {
      this.setState({firstNameError: true})
    }
    if (secondName === '') {
      this.setState({secondNameError: true})
    }
    if (firstName !== '' && secondName !== '') {
      this.setState({
        firstNameError: false,
        secondNameError: false,
        registerSuccess: true,
      })
    }
  }

  onRegisterAgain = () => {
    this.setState({
      registerSuccess: false,
      firstName: '',
      secondName: '',
      firstNameError: false,
      secondNameError: false,
    })
  }

  getSuccessCard = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="success-text">Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn"
        onClick={this.onRegisterAgain}
      >
        Submit Another Response
      </button>
    </>
  )

  getForm = () => {
    const {
      firstName,
      secondName,
      firstNameError,
      secondNameError,
      registerSuccess,
    } = this.state

    return (
      <form className="reg-form" onSubmit={this.onSubmitForm}>
        <label htmlFor="firstName" className="label-name">
          FIRST NAME
        </label>
        <input
          className="input-name"
          type="text"
          id="firstName"
          placeholder="First name"
          onBlur={this.onBlurFirstName}
          onChange={this.onChangeFirstName}
          value={firstName}
        />
        {firstNameError && <p className="error">Required</p>}
        <label htmlFor="lastName" className="label-name">
          LAST NAME
        </label>
        <input
          className="input-name"
          type="text"
          id="lastName"
          placeholder="Last name"
          onBlur={this.onBlurSecondName}
          onChange={this.onChangeSecondName}
          value={secondName}
        />
        {secondNameError && <p className="error">Required</p>}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {registerSuccess} = this.state

    return (
      <div className="bg-reg-form">
        <h1 className="reg-title">Registration</h1>
        {registerSuccess && <>{this.getSuccessCard()}</>}
        {!registerSuccess && <>{this.getForm()}</>}
      </div>
    )
  }
}

export default RegistrationForm

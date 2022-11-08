import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem/index'

import './index.css'

const colorsList = [
  '#f59e0b',
  '#10b981',
  '#0ea5e9',
  '#f97316 ',
  '#b91c1c',
  '#14b8a6',
]

class PassWordManager extends Component {
  state = {
    passwordsList: [],
    isFilterOn: false,
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    searchInput: '',
  }

  createNewPassword = e => {
    e.preventDefault()
    const {
      passwordsList,
      websiteInput,
      userNameInput,
      passwordInput,
    } = this.state

    const colorCode = colorsList[Math.floor(Math.random() * 5)]
    const newPasswordList = [
      ...passwordsList,
      {id: uuidv4(), websiteInput, userNameInput, passwordInput, colorCode},
    ]
    this.setState({
      passwordsList: newPasswordList,
      userNameInput: '',
      websiteInput: '',
      passwordInput: '',
    })
  }

  onChangeWebsite = e => {
    this.setState({websiteInput: e.target.value})
  }

  onChangeUserName = e => {
    this.setState({userNameInput: e.target.value})
  }

  onChangePassword = e => {
    this.setState({passwordInput: e.target.value})
  }

  onChecked = () => {
    this.setState(prevState => ({
      isFilterOn: !prevState.isFilterOn,
    }))
  }

  onSearchPassword = e => {
    this.setState({searchInput: e.target.value})
  }

  onDeletePasswordItem = id => {
    this.setState(prevState => {
      const {passwordsList} = prevState
      return {
        passwordsList: passwordsList.filter(password => password.id !== id),
      }
    })
  }

  render() {
    const {
      passwordsList,
      isFilterOn,
      websiteInput,
      userNameInput,
      passwordInput,
      searchInput,
    } = this.state

    const filteredPasswordsList = passwordsList.filter(item =>
      item.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = filteredPasswordsList.length
    let listsContainer
    if (count === 0) {
      listsContainer = (
        <div className=" empty-list">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-passwords-img"
          />
          <p className="no-password-text">No Passwords</p>
        </div>
      )
    } else {
      listsContainer = filteredPasswordsList.map(password => (
        <PasswordItem
          passwordDetails={password}
          key={password.id}
          isFilterOn={isFilterOn}
          onDeletePasswordItem={this.onDeletePasswordItem}
        />
      ))
    }

    console.log(passwordsList)

    return (
      <div className="bg-password-manager">
        <nav className="nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="password-manager-logo"
            alt="app logo"
          />
        </nav>

        <div className="password-form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="form-img"
          />
          <form className="password-form" onSubmit={this.createNewPassword}>
            <h1 className="form-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website-img"
              />
              <input
                placeholder="Enter Website"
                type="text"
                className="input-bar"
                value={websiteInput}
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website-img"
              />
              <input
                placeholder="Enter username"
                type="text"
                className="input-bar"
                value={userNameInput}
                onChange={this.onChangeUserName}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website-img"
              />
              <input
                placeholder="Enter Password"
                type="password"
                className="input-bar"
                value={passwordInput}
                onChange={this.onChangePassword}
              />
            </div>
            <div className="add-btn-box">
              <button type="submit" className="add-btn">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="form-img-lg"
          />
        </div>
        <div className="password-form-container passwords-list-container">
          <div className="count-search-container">
            <div className="count-box">
              <h1 className="passwords-text">Your Passwords</h1>
              <p className="password-count">{count}</p>
            </div>

            <div className="count-box search-bar-box">
              <img
                className="search-img"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                className="search-bar"
                type="search"
                value={searchInput}
                onChange={this.onSearchPassword}
                placeholder="Search"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="count-box check-box-container">
            <input
              id="searchItem"
              className="check-box"
              type="checkbox"
              onChange={this.onChecked}
            />
            <label htmlFor="searchItem" className="filter-text">
              Show passwords
            </label>
          </div>
          <ul className="list-container">{listsContainer}</ul>
        </div>
      </div>
    )
  }
}

export default PassWordManager

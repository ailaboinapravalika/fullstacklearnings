import {Link, withRouter} from 'react-router-dom' // Write your code here

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => {
  const lightLogo =
    'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

  const darkLogo =
    'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

  const darkThemeUrl =
    'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

  const lightThemeUrl =
    'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        console.log(isDarkTheme)
        const imgLogoUrl = isDarkTheme ? darkLogo : lightLogo
        const themeLogoUrl = isDarkTheme ? darkThemeUrl : lightThemeUrl
        console.log(imgLogoUrl, themeLogoUrl)
        const optionColor = isDarkTheme ? 'light' : 'dark'
        const bgColor = isDarkTheme ? 'dark-bg' : 'light-bg'
        const onClickThemeChange = () => {
          toggleTheme()
        }

        return (
          <nav className={`navbar-bg ${bgColor}`}>
            <div>
              <Link className="link-item" to="/">
                <img src={imgLogoUrl} className="logo-img" alt="website logo" />
              </Link>
            </div>
            <ul className="nav-menu-list">
              <Link className="link-item" to="/">
                <li className={`option ${optionColor}`}>Home</li>
              </Link>
              <Link className="link-item" to="/about">
                <li className={`option ${optionColor}`}>About</li>
              </Link>
            </ul>

            <button
              type="button"
              className="theme-btn"
              onClick={onClickThemeChange}
              testid="theme"
            >
              <img src={themeLogoUrl} className="theme-logo" alt="theme" />
            </button>
          </nav>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Navbar)

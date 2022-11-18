// Write your code here

import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const optionColor = isDarkTheme ? 'light' : 'dark'
      const CardBgColor = isDarkTheme ? 'card-bg-dark' : 'card-bg-light'

      return (
        <>
          <Navbar />
          <div className="home-bg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="home-img"
              alt="not found"
            />
            <h1 className={`not-found-text ${optionColor} `}>Lost Your Way?</h1>
            <p className={`not-found-line ${optionColor} `}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

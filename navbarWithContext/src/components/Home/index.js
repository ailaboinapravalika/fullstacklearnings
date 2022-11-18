// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const Home = () => {
  const darkHome = 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

  const LightHome =
    'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const homeImgUrl = isDarkTheme ? darkHome : LightHome
        const optionColor = isDarkTheme ? 'light' : 'dark'
        const CardBgColor = isDarkTheme ? 'card-bg-dark' : 'card-bg-light'

        return (
          <>
            <Navbar />
            <div className={`home-bg ${CardBgColor} `}>
              <img src={homeImgUrl} className="home-img" alt="home" />
              <h1 className={`home-text ${optionColor} `}>Home</h1>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Home

// Write your code here
// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => {
  const darkAbout =
    'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

  const LightAbout =
    'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const aboutImgUrl = isDarkTheme ? darkAbout : LightAbout
        const optionColor = isDarkTheme ? 'light' : 'dark'
        const CardBgColor = isDarkTheme ? 'card-bg-dark' : 'card-bg-light'

        return (
          <>
            <Navbar />
            <div className={`home-bg ${CardBgColor} `}>
              <img src={aboutImgUrl} className="home-img" alt="about" />
              <h1 className={`home-text ${optionColor} `}>About</h1>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default About

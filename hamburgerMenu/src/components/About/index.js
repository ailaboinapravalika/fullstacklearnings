// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-img-lg"
      />
    </div>
  </>
)

export default About

// Write your JS code here
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const About = () => (
  <>
    <Header />
    <div className="about-bg">
      <h1 className="about-route-heading">About Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default About

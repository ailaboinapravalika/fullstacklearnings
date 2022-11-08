// Write your JS code here
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <>
    <Header />
    <div className="home-bg">
      <h1 className="home-route-heading">Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home

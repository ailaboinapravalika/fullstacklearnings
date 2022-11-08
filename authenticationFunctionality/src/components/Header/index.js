// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav-bg">
    <Link className="nav-link" to="/">
      Home
    </Link>
    <Link className="nav-link" to="/about">
      About
    </Link>
  </div>
)

export default Header

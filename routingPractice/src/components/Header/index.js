// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar-bg">
    <div className="logo-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-logo"
      />
      <h1 className="page-title">Wave</h1>
    </div>
    <ul className="nav-options-container">
      <li className="list-remove">
        <Link className="nav-option" to="/">
          Home
        </Link>
      </li>
      <li className="list-remove">
        <Link className="nav-option" to="/about">
          About
        </Link>
      </li>
      <li className="list-remove">
        <Link className="nav-option" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header

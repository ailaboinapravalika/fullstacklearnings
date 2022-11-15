import './index.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'

import {BsFillBriefcaseFill} from 'react-icons/bs'

import {FiLogOut} from 'react-icons/fi'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="nav-bar-bg">
      <div>
        <Link to="/" className="link-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="nav-logo"
          />
        </Link>
      </div>
      <div className="options-bg-sm">
        <ul className="nav-options">
          <Link to="/" className="link-item">
            <li className="nav-opt">
              <AiFillHome className="home-icon" />
            </li>
          </Link>

          <Link to="/jobs" className="link-item">
            <li className="nav-opt">
              <BsFillBriefcaseFill className="home-icon" />
            </li>
          </Link>
        </ul>

        <button type="button" className="logout-sm-btn">
          <FiLogOut className="home-icon" onClick={onClickLogout} />
        </button>
      </div>

      <ul className="lg-options">
        <Link to="/" className="link-item">
          <li className="lg-option">Home</li>
        </Link>

        <Link to="/jobs" className="link-item">
          <li className="lg-option">Jobs</li>
        </Link>
      </ul>
      <button type="button" className="logout-btn" onClick={onClickLogout}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)

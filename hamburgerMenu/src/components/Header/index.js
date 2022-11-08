// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => {
  const renderMenuBtn = () => (
    <button className="trigger-btn" type="button" testid="hamburgerIconButton">
      <GiHamburgerMenu className="hamburger-icon" />
    </button>
  )

  return (
    <div className="header-bg">
      <Link to="/" className="logo-link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>
      <Popup modal trigger={renderMenuBtn()} position="bottom right">
        {close => (
          <div className="modal-bg">
            <div className="close-btn-bg">
              <button
                className="close-btn"
                type="button"
                onClick={close}
                testid="closeButton"
              >
                <IoMdClose className="close-icon" />
              </button>
            </div>
            <ul className="modal-content">
              <Link to="/" className="logo-link">
                <li className="home-option">
                  <div className="option-bg">
                    <AiFillHome className="home-icon" />
                    <p className="home-btn-text">Home</p>
                  </div>
                </li>
              </Link>
              <Link to="/about" className="logo-link">
                <li className="home-option">
                  <div className="option-bg">
                    <BsInfoCircleFill className="home-icon" />
                    <p className="home-btn-text">About</p>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default Header

// Write your JS code here
import './index.css'

const Header = () => (
  <div className="nav-bar">
    <div className="header-bg">
      <div className="logo-logout-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo-img"
        />
        <div className="lg-nav-options-bg">
          <ul className="lg-nav-options-box">
            <li className="nav-option-lg">Home</li>
            <li className="nav-option-lg">Products</li>
            <li className="nav-option-lg">Cart</li>
          </ul>
          <button type="button" className="lg-logout-btn">
            Logout
          </button>
        </div>
        <button className="logout-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-img"
          />
        </button>
      </div>
      <ul className="nav-options-bg">
        <li className="logout-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="logout-img"
          />
        </li>
        <li className="logout-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="logout-img"
          />
        </li>
        <li className="logout-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="logout-img"
          />
        </li>
      </ul>
    </div>
  </div>
)

export default Header

import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Cart = props => {
  const accessToken = Cookies.get('jwt_token')
  if (accessToken === undefined) {
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-img"
        />
      </div>
    </>
  )
}

export default withRouter(Cart)

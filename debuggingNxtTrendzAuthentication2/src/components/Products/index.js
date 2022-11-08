import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Products = props => {
  const accessToken = Cookies.get('jwt_token')
  if (accessToken === undefined) {
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="products-img"
        />
      </div>
    </>
  )
}

export default withRouter(Products)

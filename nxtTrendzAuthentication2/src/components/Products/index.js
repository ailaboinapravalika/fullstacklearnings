// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'
import Header from '../Header'

const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    ;<Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="product-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="product-img"
        />
      </div>
    </>
  )
}

export default Products

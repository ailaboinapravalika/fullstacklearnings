// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const itemsCount = cartList.length
      const total = cartList.reduce((totalA, item) => {
        const cost = item.quantity * item.price
        return totalA + cost
      }, 0)

      return (
        <div className="cart-summary-card">
          <h1 className="total">
            Order Total: <span className="amount">Rs. {total}/-</span>
          </h1>
          <p className="items-count">{itemsCount} Items in cart</p>
          <button type="button" className="checkout">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

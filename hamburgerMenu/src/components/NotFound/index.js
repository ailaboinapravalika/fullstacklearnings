// Write your code here
import './index.css'

const NotFound = () => (
  <div className="not-found-bg">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
      className="not-found-img"
    />
    <h1 className="lost-heading">Lost Your Way?</h1>
    <p className="lost-para">
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound

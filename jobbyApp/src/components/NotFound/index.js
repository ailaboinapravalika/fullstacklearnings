import './index.css'
import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div className="page-not-found-bg">
      <div className="page-not-found-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          alt="not found"
          className="page-not-found-img"
        />
        <h1 className="page-not-found">Page Not Found</h1>
        <p className="page-not-found-para">
          We're sorry, the page you requested could not be found.
        </p>
      </div>
    </div>
  </>
)

export default NotFound

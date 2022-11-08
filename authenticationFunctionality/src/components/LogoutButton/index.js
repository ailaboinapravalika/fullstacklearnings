// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onLogoutUser = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <button className="logout-btn" type="button" onClick={onLogoutUser}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)

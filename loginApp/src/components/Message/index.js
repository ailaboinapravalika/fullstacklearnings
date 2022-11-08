// Write your code here
import './index.css'

const Message = props => {
  const {isLogged} = props
  return isLogged ? (
    <h1 className="greet">Welcome User</h1>
  ) : (
    <h1 className="greet">Please Login</h1>
  )
}
export default Message

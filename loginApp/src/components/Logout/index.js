// Write your code here
import './index.css'

const Logout = props => {
  const {onClickBtn, isLogged} = props
  const LogoutDo = () => {
    onClickBtn()
  }

  return (
    isLogged && (
      <button className="btn" onClick={LogoutDo}>
        Logout
      </button>
    )
  )
}
export default Logout

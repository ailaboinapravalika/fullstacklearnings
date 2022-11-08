// Write your code here
import './index.css'

const Login = props => {
  const {onClickBtn, isLogged} = props
  const LoginDo = () => {
    onClickBtn()
  }
  return (
    !isLogged && (
      <button className="btn" onClick={LoginDo}>
        Login
      </button>
    )
  )
}
export default Login

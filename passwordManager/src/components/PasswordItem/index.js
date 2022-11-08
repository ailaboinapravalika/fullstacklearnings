import './index.css'

const PasswordItem = props => {
  const {passwordDetails, isFilterOn, onDeletePasswordItem} = props
  const {
    id,
    websiteInput,
    userNameInput,
    passwordInput,
    colorCode,
  } = passwordDetails
  let passwordText

  if (!isFilterOn) {
    passwordText = (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
        className="password-img"
      />
    )
  } else {
    passwordText = <p className="password">{passwordInput}</p>
  }

  const deletePassword = () => {
    onDeletePasswordItem(id)
  }

  console.log(passwordDetails)
  return (
    <li className="password-item" key={id}>
      <div className="icon" style={{backgroundColor: colorCode}}>
        {userNameInput[0]}
      </div>
      <div className="password-data">
        <p className="website">{websiteInput}</p>
        <p className="name">{userNameInput}</p>
        {passwordText}
      </div>
      <button
        type="button"
        className="delete-btn"
        onClick={deletePassword}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem

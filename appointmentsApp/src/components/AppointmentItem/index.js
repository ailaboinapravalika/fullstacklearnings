// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, onStarring} = props
  const {id, title, appointmentTime, isStarred} = appointmentDetails

  const onClickStar = () => {
    onStarring(id)
  }

  const startImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li key={id} className="list-item-bg">
      <div className="list-details-box">
        <p className="title-list">{title}</p>
        <p className="time-list">{appointmentTime}</p>
      </div>
      <button
        testid="star"
        className="star-btn"
        type="button"
        onClick={onClickStar}
      >
        <img className="star" src={startImgUrl} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem

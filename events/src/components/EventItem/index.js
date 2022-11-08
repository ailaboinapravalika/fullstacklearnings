// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent, activeId} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  const onClickSingleEvent = () => {
    onClickEvent(id)
  }

  const activeBorder = activeId === id ? 'active' : ''

  return (
    <li className="event-list-item" key={id}>
      <button className="event-btn" type="button" onClick={onClickSingleEvent}>
        <img
          src={imageUrl}
          alt="event"
          className={`event-img ${activeBorder}`}
        />
      </button>

      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem

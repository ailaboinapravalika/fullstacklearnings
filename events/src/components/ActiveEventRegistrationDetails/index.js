// Write your code here
import './index.css'

const eventStatus = {
  register: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventDetails} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  const renderInitialView = () => (
    <p className="initial-text">
      Click on an event, to view its registration details"
    </p>
  )

  const renderYetToRegisterView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register"
      />
      <p className="yet-to-text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </>
  )

  const renderRegisteredView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered">You have already registered for the event</h1>
    </>
  )

  const renderClosedRegisterView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-img"
      />
      <h1 className="registered">Registrations Are Closed Now!</h1>
      <p className="closed-text">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </>
  )

  switch (registrationStatus) {
    case eventStatus.register:
      return renderYetToRegisterView()

    case eventStatus.registered:
      return renderRegisteredView()

    case eventStatus.closed:
      return renderClosedRegisterView()

    default:
      return renderInitialView()
  }
}

export default ActiveEventRegistrationDetails

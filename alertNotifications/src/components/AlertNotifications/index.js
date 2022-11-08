import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import './index.css'
import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="bg-container-alerts">
    <h1 className="alerts-heading">Alert Notifications</h1>
    <ul className="lists-bg">
      <Notification>
        <AiFillCheckCircle className="green-color icon" />
        <div className="details-notification">
          <h1 className="green-color type-notification">Success</h1>
          <p className="about-notification">
            You can access all the files in the folder
          </p>
        </div>
      </Notification>
      <Notification>
        <RiErrorWarningFill className="red-color icon" />
        <div className="details-notification">
          <h1 className="red-color type-notification">Error</h1>
          <p className="about-notification">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </Notification>
      <Notification>
        <MdWarning className="yellow-color icon" />
        <div className="details-notification">
          <h1 className="yellow-color type-notification">Warning</h1>
          <p className="about-notification">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </Notification>
      <Notification>
        <MdInfo className="blue-color icon" />
        <div className="details-notification">
          <h1 className="blue-color type-notification">Info</h1>
          <p className="about-notification">
            Anyone on the internet can view these files
          </p>
        </div>
      </Notification>
    </ul>
  </div>
)

export default AlertNotifications

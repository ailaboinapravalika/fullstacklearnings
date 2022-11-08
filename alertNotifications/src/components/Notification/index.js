// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)

  return (
    <li className="notification-item">
      {children}
      <GrFormClose className="close-icon" />
    </li>
  )
}
export default Notification

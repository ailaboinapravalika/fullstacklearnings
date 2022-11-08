// Write your code here
import './index.css'

const DestinationItem = props => {
  const {location} = props
  const {id, name, imgUrl} = location

  return (
    <li className="card">
      <img src={imgUrl} className="img-location" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem

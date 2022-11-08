// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {imgUrl, title, description, className, key} = cardDetails
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="image-box">
        <img src={imgUrl} className="img-style" alt={title} />
      </div>
    </li>
  )
}

export default CardItem

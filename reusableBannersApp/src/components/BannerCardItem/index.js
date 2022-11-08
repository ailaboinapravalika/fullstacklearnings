// Write your code here.
import './index.css'

const CardProfile = props => {
  const {cardDetails, key} = props
  const {headerText, description, className} = cardDetails
  console.log(key)
  return (
    <li className={className}>
      <div className="card">
        <h1 className="heading-text">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button-know-more">Show More</button>
      </div>
    </li>
  )
}

export default CardProfile

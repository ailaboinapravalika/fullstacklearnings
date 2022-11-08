// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {similarProductDetails} = props
  console.log(similarProductDetails)
  const {
    id,
    imageUrl,
    price,
    rating,
    title,
    totalReviews,
    brand,
  } = similarProductDetails

  return (
    <li className="similar-list-item" key={id}>
      <img src={imageUrl} className="similar-img" alt="similar product" />
      <p className="item-name">{title}</p>
      <p className="item-by">{`By ${brand}`}</p>
      <div className="rating-box">
        <p className="price">{`Rs ${price}/-`}</p>
        <div className="product-rating-box">
          <p className="item-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="stars-img"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem

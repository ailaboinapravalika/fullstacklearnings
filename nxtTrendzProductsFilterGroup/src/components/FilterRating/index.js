import './index.css'

const FilterRating = props => {
  const {activeRatingId, ratingDetails, onChangeRating} = props

  const {ratingId, imageUrl} = ratingDetails

  const onClickRating = () => {
    onChangeRating(ratingId)
  }

  const active = activeRatingId === ratingId ? 'active' : ''

  return (
    <li className="rating-filter-container" key={ratingId}>
      <button type="button" className="cat-btn" onClick={onClickRating}>
        <img src={imageUrl} alt={`rating ${ratingId}`} className="stars-img" />
        <p className={`rating-text ${active}`}>& up</p>
      </button>
    </li>
  )
}

export default FilterRating

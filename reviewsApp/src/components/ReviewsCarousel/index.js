// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {objectIndex: 0}

  onNextButtonClick = () => {
    const {objectIndex} = this.state
    const {reviewsList} = this.props
    const lengthOfReviewList = reviewsList.length
    if (objectIndex + 1 < lengthOfReviewList) {
      this.setState(prevState => ({objectIndex: prevState.objectIndex + 1}))
    }
  }

  onPrevButtonClick = () => {
    const {objectIndex} = this.state
    if (objectIndex > 0) {
      this.setState(prevState => ({objectIndex: prevState.objectIndex - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {objectIndex} = this.state
    console.log('rendered')
    return (
      <div className="bg-reviews">
        <h1 className="reviews-heading">Reviews</h1>
        <img
          src={reviewsList[objectIndex].imgUrl}
          alt={reviewsList[objectIndex].username}
          className="reviewer-image"
        />
        <div className="arrows-container">
          <button
            testid="leftArrow"
            type="button"
            className="arrow-btn"
            onClick={this.onPrevButtonClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow-img"
              alt="left arrow"
            />
          </button>

          <p className="reviewer-name">{reviewsList[objectIndex].username}</p>
          <button
            testid="rightArrow"
            type="button"
            className="arrow-btn"
            onClick={this.onNextButtonClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow-img"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company-name">{reviewsList[objectIndex].companyName}</p>
        <p className="description">{reviewsList[objectIndex].description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel

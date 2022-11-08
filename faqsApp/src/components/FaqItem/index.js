// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, onChangeExpand} = props
  const {id, questionText, answerText, isExpanded} = faqDetails
  const btnImgUrl = isExpanded
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const btnImgAltText = isExpanded ? 'minus' : 'plus'

  const onExpandCollapseBtnClick = () => {
    onChangeExpand(id)
  }

  return (
    <li className="faq-item" key={id}>
      <div className="faq-display-container">
        <h1 className="faq-question">{questionText}</h1>
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={onExpandCollapseBtnClick}
        >
          <img
            src={btnImgUrl}
            alt={btnImgAltText}
            className="expand-collapse-img"
          />
        </button>
      </div>
      {isExpanded && <p className="faq-ans">{answerText}</p>}
    </li>
  )
}

export default FaqItem

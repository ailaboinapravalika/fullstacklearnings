// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionObj, onSelectSuggestion} = props
  const {id, suggestion} = suggestionObj

  const onSelect = () => {
    onSelectSuggestion(id, suggestion)
  }

  return (
    <li className="suggestion-card">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="btn" onClick={onSelect}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem

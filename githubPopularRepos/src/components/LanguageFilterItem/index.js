// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, onClickLanguage, searchParam} = props
  const {id, language} = languageDetails

  const onClickBtn = () => {
    onClickLanguage(id)
  }

  const active = searchParam === id ? 'active' : ''

  return (
    <li className="language-item" key="id">
      <button
        type="button"
        className={`language-btn ${active}`}
        onClick={onClickBtn}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem

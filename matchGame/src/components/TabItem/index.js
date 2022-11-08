import './index.css'

const TabItem = props => {
  const {tabDetails, selectedTabId, onTabSelect} = props
  const {tabId, displayText} = tabDetails

  const selectedUnderline = selectedTabId === tabId ? 'selected-btn' : ''

  const onSelect = () => {
    onTabSelect(tabId)
  }

  return (
    <li className="list-tab-item">
      <button
        key={tabId}
        className={`fruit-btn ${selectedUnderline}`}
        type="button"
        onClick={onSelect}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

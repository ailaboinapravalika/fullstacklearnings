// Write your code here
import './index.css'

const TabItem = props => {
  const {tabData, isSelected, onSelectTab} = props
  const {tabId, displayText} = tabData

  const onTabClick = () => {
    onSelectTab(tabId)
  }
  const highlight = isSelected ? 'high-light' : ''

  return (
    <li key={tabId} className="tab" onClick={onTabClick}>
      <button type="button" className={`tab-name ${highlight}`}>
        {displayText}
      </button>
      <hr className={`line ${highlight}`} />
    </li>
  )
}

export default TabItem

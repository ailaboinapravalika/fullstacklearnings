import './index.css'

const HistoryItem = props => {
  const {eachHistory, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="history-item-card">
      <div className="history-details-card">
        <p className="time-text">{timeAccessed}</p>
        <img src={logoUrl} className="logo-url" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url-text">{domainUrl}</p>
      </div>

      <button testid="delete" type="button" className="btn" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem

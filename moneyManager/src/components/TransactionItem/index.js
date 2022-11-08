// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="transactions-column-title " key={id}>
      <p className="col-heading">{title}</p>
      <p className="col-heading">{`Rs ${amount}`}</p>
      <p className="col-heading">{type.displayText}</p>
      <button
        type="button"
        onClick={onDelete}
        className="delete-btn"
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem

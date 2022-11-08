// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {transactionList} = props
  let totalIncome = 0
  let totalExpense = 0
  if (transactionList.length > 0) {
    transactionList.map(item => {
      if (item.type.optionId === 'INCOME') {
        totalIncome += Number(item.amount)
      } else {
        totalExpense += Number(item.amount)
      }
      return 0
    })
  }
  const totalBalance = totalIncome - totalExpense
  totalBalance.toString()
  totalExpense.toString()
  totalIncome.toString()
  console.log(totalIncome, totalExpense, totalBalance)
  return (
    <div className="money-details-container">
      <div className="balance-card-container green-border">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-img"
        />
        <div className="balance-amount-container">
          <p className="balance-title">Your Balance</p>
          <p
            className="balance-amount"
            testid="balanceAmount"
          >{`Rs ${totalBalance}`}</p>
        </div>
      </div>
      <div className="balance-card-container blue-border">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-img"
        />
        <div className="balance-amount-container">
          <p className="balance-title">Your Income</p>
          <p
            className="balance-amount"
            testid="incomeAmount"
          >{`Rs ${totalIncome}`}</p>
        </div>
      </div>
      <div className="balance-card-container purple-border">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-img"
        />
        <div className="balance-amount-container">
          <p className="balance-title">Your Expenses</p>
          <p
            className="balance-amount"
            testid="expensesAmount"
          >{`Rs ${totalExpense}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

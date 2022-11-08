import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0],
    transactionList: [],
  }

  onChangeTitle = e => {
    this.setState({title: e.target.value})
  }

  onChangeAmount = e => {
    this.setState({amount: e.target.value})
  }

  onChangeTransactionType = e => {
    const selectedType = e.target.value
    if (selectedType === 'EXPENSES') {
      this.setState({type: transactionTypeOptions[1]})
    } else {
      this.setState({type: transactionTypeOptions[0]})
    }
  }

  onSubmitTransaction = e => {
    e.preventDefault()
    const {title, amount, type, transactionList} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    const newList = [...transactionList, newTransaction]
    this.setState({
      transactionList: newList,
      title: '',
      amount: '',
      type: transactionTypeOptions[0],
    })
  }

  onDeleteTransaction = id => {
    const {transactionList} = this.state
    const newList = transactionList.filter(item => item.id !== id)
    this.setState({
      transactionList: newList,
    })
  }

  render() {
    const {title, amount, type, transactionList} = this.state
    console.log(type.displayText)
    return (
      <div className="money-manager-bg">
        <div className="money-manager-main-card">
          <div className="card-title">
            <h1 className="hi-name">Hi, Richard</h1>
            <p className="greeting-welcome">
              Welcome back to your
              <span className="blue-text"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails transactionList={transactionList} />
          <div className="form-history-container">
            <form
              className="money-add-form"
              onSubmit={this.onSubmitTransaction}
            >
              <h1 className="add-transaction-heading">Add Transaction</h1>
              <label htmlFor="title" className="label-title">
                TITLE
              </label>
              <input
                id="title"
                className="input-title"
                type="text"
                value={title}
                placeholder="TITLE"
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount" className="label-title">
                AMOUNT
              </label>
              <input
                id="amount"
                className="input-title"
                value={amount}
                type="text"
                placeholder="AMOUNT"
                onChange={this.onChangeAmount}
              />
              <label htmlFor="type" className="label-title">
                TYPE
              </label>
              <select
                className="input-title"
                id="type"
                defaultValue={type.displayText}
                onChange={this.onChangeTransactionType}
              >
                <option
                  className="option-type"
                  value={transactionTypeOptions[0].optionId}
                >
                  {transactionTypeOptions[0].displayText}
                </option>
                <option
                  className="option-type"
                  value={transactionTypeOptions[1].optionId}
                >
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <div className="money-add-form large-history-box">
              <h1 className="history-title">History</h1>
              <ul className="transaction-list-container">
                <li className="transactions-column-title ">
                  <p className="col-heading">Title</p>
                  <p className="col-heading">Amount</p>
                  <p className="col-heading">Type</p>
                </li>
                {transactionList.map(transaction => (
                  <TransactionItem
                    onDeleteTransaction={this.onDeleteTransaction}
                    transactionDetails={transaction}
                    key={transaction.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {accountBalance: 2000}

  onWithdrawAmount = (id, value) => {
    const {accountBalance} = this.state
    const updatedBalance = accountBalance - value
    this.setState({accountBalance: updatedBalance})
  }

  render() {
    const {accountBalance} = this.state

    const {denominationsList} = this.props

    return (
      <div className="bg-cash-withdraw">
        <div className="main-card">
          <div className="name-card">
            <div className="profile-icon">S</div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-card">
            <p className="balance-title">Your Balance</p>
            <div>
              <p className="balance">{accountBalance}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <div className="bg-list-denominations">
            <p className="withdraw-title">Withdraw</p>
            <p className="choose-title">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-list-container">
              {denominationsList.map(denomination => (
                <DenominationItem
                  denomination={denomination}
                  key={denomination.id}
                  onWithdrawAmount={this.onWithdrawAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

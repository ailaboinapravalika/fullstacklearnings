// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, onWithdrawAmount} = props
  const {id, value} = denomination
  const onDenominationSelection = () => {
    console.log('withdraw amoun selected ')
    onWithdrawAmount(id, value)
  }

  return (
    <li className="list-bullet">
      <button className="btn" type="button" onClick={onDenominationSelection}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value, id} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

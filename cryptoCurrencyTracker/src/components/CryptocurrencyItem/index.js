// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = cryptoDetails

  return (
    <li className="list-item-box">
      <div className="currency-name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="coin-name">{currencyName}</p>
      </div>

      <p className="currency-usd">{usdValue}</p>
      <p className="currency-usd">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem

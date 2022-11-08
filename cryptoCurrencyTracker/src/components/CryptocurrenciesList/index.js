// Write your JS code here
import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const cryptoData = await response.json()
    const formattedList = cryptoData.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoCurrencyList: formattedList, isLoading: false})
  }

  getCryptoBody = () => {
    const {cryptoCurrencyList} = this.state
    console.log(cryptoCurrencyList)

    return (
      <div className="main-card">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-img"
        />
        <ul className="list-container">
          <li className="column-headings">
            <p className="col-heading coin-type">Coin Type</p>
            <p className="col-heading usd">USD</p>
            <p className="col-heading euro">EURO</p>
          </li>
          {cryptoCurrencyList.map(cryptoItem => (
            <CryptocurrencyItem
              cryptoDetails={cryptoItem}
              key={cryptoItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return isLoading ? (
      <div testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      this.getCryptoBody()
    )
  }
}

export default CryptocurrenciesList

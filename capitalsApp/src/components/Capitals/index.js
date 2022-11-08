import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    selectedCountry: countryAndCapitalsList[0],
    countryAndCapitals: countryAndCapitalsList,
  }

  onSelectedCountry = event => {
    const {countryAndCapitals} = this.state
    const newId = event.target.value
    const newCountry = countryAndCapitals.filter(
      eachCountry => eachCountry.id === newId,
    )
    this.setState({selectedCountry: newCountry[0]})
  }

  render() {
    const {selectedCountry, countryAndCapitals} = this.state

    return (
      <div className="bg-countries-capitals">
        <div className="main-card">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="choose-country-container">
            <select
              id="capitalDropDown"
              onChange={this.onSelectedCountry}
              value={selectedCountry.id}
              className="capital-drop-down"
            >
              {countryAndCapitals.map(eachCountry => (
                <option key={eachCountry.id} value={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <label className="choose-label" htmlFor="capitalDropDown">
              is capital of which country?
            </label>
          </div>
          <p className="country">{selectedCountry.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

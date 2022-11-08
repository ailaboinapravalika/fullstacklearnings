// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSelectSuggestion = (id, suggestion) => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const text = searchInput.toLowerCase()
    const updatedSuggestionsList = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(text),
    )

    return (
      <div className="bg-google-search">
        <div className="main-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-img"
            alt="google logo"
          />
          <div className="search-card">
            <div className="search-bar-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-img"
                alt="search icon"
              />
              <input
                type="search"
                className="search-bar"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onChangeInput}
              />
            </div>

            <ul className="bg-list-suggestions">
              {updatedSuggestionsList.map(suggestionObj => (
                <SuggestionItem
                  suggestionObj={suggestionObj}
                  key={suggestionObj.id}
                  onSelectSuggestion={this.onSelectSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions

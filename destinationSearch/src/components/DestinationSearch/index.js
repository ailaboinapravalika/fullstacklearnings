// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeEvent = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    console.log(searchInput)
    const text = searchInput.toLowerCase()
    console.log(text)
    const updatedSearchList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(text),
    )

    return (
      <div className="bg-location">
        <h1>Destination Search</h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeEvent}
            value={searchInput}
            className="searchbar"
          />
          <img
            className="search-i"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="locations-box">
          {updatedSearchList.map(location => (
            <DestinationItem location={location} key={location.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

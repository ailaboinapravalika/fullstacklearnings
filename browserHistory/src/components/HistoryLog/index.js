import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryLog extends Component {
  state = {searchInput: '', noHistory: false, historyList: initialHistoryList}

  onChangeInput = event => {
    const {historyList} = this.state
    const text = event.target.value.toLowerCase()
    const newHistoryList = historyList.filter(eachItem => {
      const smallCaseTitle = eachItem.title.toLowerCase()
      return smallCaseTitle.includes(text)
    })
    if (newHistoryList.length === 0) {
      this.setState({
        searchInput: event.target.value,
        noHistory: true,
      })
    } else {
      this.setState({
        searchInput: event.target.value,
        noHistory: false,
      })
    }
  }

  onDeleteItem = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )

    if (updatedHistoryList.length === 0) {
      this.setState({noHistory: true})
    } else {
      this.setState({noHistory: false})
    }
    this.setState({historyList: updatedHistoryList})
  }

  render() {
    const {searchInput, noHistory, historyList} = this.state
    const word = searchInput.toLowerCase()
    const newHistoryList = historyList.filter(eachItem => {
      const smallCaseTitle = eachItem.title.toLowerCase()
      return smallCaseTitle.includes(word)
    })

    return (
      <div>
        <nav className="nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />

          <div className="search-bar-box">
            <div className="search-img-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-logo"
              />
            </div>

            <input
              placeholder="Search History"
              className="search-bar"
              type="search"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
        </nav>
        <div className="history-container">
          {noHistory ? (
            <p className="no-history-text">There is no history to show</p>
          ) : null}
          <ul>
            {newHistoryList.map(eachHistory => (
              <HistoryItem
                eachHistory={eachHistory}
                key={eachHistory.id}
                onDeleteItem={this.onDeleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default HistoryLog

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
const repoListStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GithubPopularRepos extends Component {
  state = {popularRepos: [], isLoading: true, searchParam: 'ALL', apiStatus: ''}

  componentDidMount() {
    this.getPopularRepos()
  }

  onRenderFailure = () => {
    this.setState({apiStatus: 'FAILURE'})
  }

  getPopularRepos = async () => {
    this.setState({isLoading: true})
    const {searchParam} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${searchParam}`

    const response = await fetch(apiUrl)
    const responseData = await response.json()
    if (response.ok) {
      const popularReposList = responseData.popular_repos
      const formattedData = popularReposList.map(repoObject => ({
        name: repoObject.name,
        id: repoObject.id,
        issuesCount: repoObject.issues_count,
        forksCount: repoObject.forks_count,
        starsCount: repoObject.stars_count,
        avatarUrl: repoObject.avatar_url,
      }))

      this.setState({
        popularRepos: formattedData,
        isLoading: false,
        apiStatus: 'SUCCESS',
      })
    } else {
      this.onRenderFailure()
    }
  }

  onClickLanguage = id => {
    console.log(id)
    this.setState({searchParam: id}, this.getPopularRepos)
  }

  renderFailureView = () => (
    <div className="failure-bg">
      <img
        src="https://assets.ccbp.in/frontend/reactjs/api-failure-view.png"
        className="failure-img"
        alt="failure view"
      />
      <p className="failure-text">Something Went Wrong</p>
    </div>
  )

  renderSuccessView = () => {
    const {popularRepos} = this.state

    return (
      <div className="repo-items-bg">
        <ul className="repo-lists-container">
          {popularRepos.map(item => (
            <RepositoryItem repositoryDetails={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderRepoItems = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case repoListStatus.success:
        return this.renderSuccessView()

      case repoListStatus.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading, searchParam} = this.state

    return (
      <div className="git-hub-bg-container">
        <h1 className="popular-heading">Popular</h1>
        <div className="languages-filter-bg">
          <ul className="languages-list-container">
            {languageFiltersData.map(language => (
              <LanguageFilterItem
                languageDetails={language}
                key={language.id}
                searchParam={searchParam}
                onClickLanguage={this.onClickLanguage}
              />
            ))}
          </ul>
        </div>
        {isLoading ? this.renderLoader() : this.renderRepoItems()}
      </div>
    )
  }
}

export default GithubPopularRepos

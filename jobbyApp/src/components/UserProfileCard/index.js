import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'

const jobsApiStatus = {
  initial: 'INITIAL',
  inprogress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const profileApiUrl = 'https://apis.ccbp.in/profile'

class UserProfileCard extends Component {
  state = {userInfo: {}, profileStatus: jobsApiStatus.initial}

  componentDidMount() {
    this.getUserDetails()
  }

  getUserDetails = async () => {
    this.setState({profileStatus: jobsApiStatus.inprogress})
    const token = Cookies.get('jwt_token')
    const reqConfigoptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }

    const profileResponse = await fetch(profileApiUrl, reqConfigoptions)

    if (profileResponse.ok === true) {
      const userData = await profileResponse.json()
      const profileDetails = userData.profile_details

      console.log(profileDetails)
      const formattedData = {
        profileImageUrl: profileDetails.profile_image_url,
        name: profileDetails.name,
        shortBio: profileDetails.short_bio,
      }
      console.log(formattedData)
      this.setState({
        userInfo: formattedData,

        profileStatus: jobsApiStatus.success,
      })
    } else {
      this.setState({userInfo: {}, profileStatus: jobsApiStatus.failure})
    }
  }

  renderProfileUser = () => {
    const {userInfo} = this.state
    const {name, profileImageUrl, shortBio} = userInfo

    return (
      <div className="user-data-card">
        <img src={profileImageUrl} className="user-img" alt="profile" />
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{shortBio}</p>
      </div>
    )
  }

  renderLoader = () => (
    <div className="profile-loader-container">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderProfileFailureView = () => (
    <div className="profile-fail-view">
      <button
        type="button"
        onClick={this.getUserDetails}
        className="retry-button"
      >
        Retry
      </button>
    </div>
  )

  render() {
    const {profileStatus} = this.state

    switch (profileStatus) {
      case jobsApiStatus.inprogress:
        return this.renderLoader()
      case jobsApiStatus.success:
        return this.renderProfileUser()
      case jobsApiStatus.failure:
        return this.renderProfileFailureView()
      default:
        return null
    }
  }
}

export default UserProfileCard

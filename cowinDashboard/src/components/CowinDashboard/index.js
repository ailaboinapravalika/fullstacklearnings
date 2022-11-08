// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import './index.css'

const apiStatusConstants = {
  inprogress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {apiStatus: '', cowinDetails: {}}

  componentDidMount() {
    this.getCowinIndiaData()
    this.setState({apiStatus: apiStatusConstants.inprogress})
  }

  getCowinIndiaData = async () => {
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(vaccinationDataApiUrl, options)
    console.log(response)
    if (response.ok === true) {
      const cowinRawData = await response.json()
      console.log(cowinRawData)
      this.setState({
        apiStatus: apiStatusConstants.success,
        cowinDetails: cowinRawData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-text">Something went wrong</h1>
    </div>
  )

  renderSuccessView = () => {
    const {cowinDetails} = this.state

    return (
      <>
        <VaccinationCoverage
          coverageDetails={cowinDetails.last_7_days_vaccination}
        />
        <VaccinationByGender
          genderDetails={cowinDetails.vaccination_by_gender}
        />
        <VaccinationByAge ageDetails={cowinDetails.vaccination_by_age} />
      </>
    )
  }

  renderCharts = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inprogress:
        return this.renderLoader()

      default:
        return null
    }
  }

  render() {
    const {apiStatus} = this.state
    console.log(apiStatus)
    return (
      <div className="cowin-dashboard-bg">
        <div className="title-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <h1 className="title">Co-WIN</h1>
        </div>
        <div className="cowin-charts-container">
          <h1 className="cowin-india-heading">CoWIN Vaccination in India</h1>
          <div className="bg-charts-all">{this.renderCharts()}</div>
        </div>
      </div>
    )
  }
}

export default CowinDashboard

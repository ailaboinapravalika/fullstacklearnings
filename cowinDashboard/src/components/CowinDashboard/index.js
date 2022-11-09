// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import './index.css'

const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

const apiStatusConstants = {
  inprogress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {apiStatus: '', cowinDetails: []}

  componentDidMount() {
    this.getCowinIndiaData()
    this.setState({apiStatus: apiStatusConstants.inprogress})
  }

  getCowinIndiaData = async () => {
    const response = await fetch(vaccinationDataApiUrl)
    console.log(response)
    if (response.ok === true) {
      const cowinRawData = await response.json()

      console.log(cowinRawData)

      const last7DaysVaccination = cowinRawData.last_7_days_vaccination.map(
        item => ({
          vaccineDate: item.vaccine_date,
          dose1: item.dose_1,
          dose2: item.dose_2,
        }),
      )
      const vaccinationByAge = cowinRawData.vaccination_by_age.map(item => ({
        age: item.age,
        count: item.count,
      }))
      const vaccinationByGender = cowinRawData.vaccination_by_gender.map(
        item => ({
          count: item.count,
          gender: item.gender,
        }),
      )
      const updatedCovidData = [
        last7DaysVaccination,
        vaccinationByGender,
        vaccinationByAge,
      ]
      this.setState(prevState => ({
        apiStatus: apiStatusConstants.success,
        cowinDetails: updatedCovidData,
      }))
    } else {
      this.setState(prevState => ({apiStatus: apiStatusConstants.failure}))
    }
  }

  renderLoader = () => (
    <div>
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
        <VaccinationCoverage coverageDetails={cowinDetails[0]} />
        <VaccinationByGender genderDetails={cowinDetails[1]} />
        <VaccinationByAge ageDetails={cowinDetails[2]} />
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
    console.log('render', apiStatus)
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

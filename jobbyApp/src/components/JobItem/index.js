import {AiFillStar} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FaExternalLinkAlt} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'
import Header from '../Header'
import EmploymentCard from '../EmploymentCard'

const jobApiStatus = {
  inprogress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class JobItem extends Component {
  state = {
    apiStatus: '',
    jobOfferDetails: [],
    similarJobOffers: [],
    isLoading: false,
  }

  componentDidMount() {
    this.setState({isLoading: true, apiStatus: jobApiStatus.inprogress})
    this.renderJobItemDetails()
  }

  renderFormattedData = job => ({
    companyLogoUrl: job.company_logo_url,
    companyWebsiteUrl: job.company_website_url,

    employmentType: job.employment_type,
    id: job.id,
    jobDescription: job.job_description,
    lifeAtCompany: job.life_at_company,
    location: job.location,
    packagePerAnnum: job.package_per_annum,
    rating: job.rating,
    title: job.title,
    skills: job.skills,
  })

  getFormattedSimilarJobs = job => ({
    companyLogoUrl: job.company_logo_url,
    employmentType: job.employment_type,
    id: job.id,
    jobDescription: job.job_description,
    location: job.location,

    rating: job.rating,
    title: job.title,
  })

  renderJobItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const jobItemUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(jobItemUrl, options)

    if (response.ok) {
      const jobItemData = await response.json()
      const responseJobData = {
        jobDetails: jobItemData.job_details,
        similarJobs: jobItemData.similar_jobs,
      }

      const formattedJobItemDetails = this.renderFormattedData(
        responseJobData.jobDetails,
      )
      const formattedSimilarJobs = responseJobData.similarJobs.map(eachJob =>
        this.getFormattedSimilarJobs(eachJob),
      )
      this.setState({
        jobOfferDetails: formattedJobItemDetails,
        similarJobOffers: formattedSimilarJobs,
        isLoading: false,
        apiStatus: jobApiStatus.success,
      })
    } else {
      this.setState({isLoading: false, apiStatus: jobApiStatus.failure})
    }
  }

  renderFailureView = () => (
    <div className="not-found-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="not-found-img"
      />
      <h1 className="not-found">OOPS! Something went wrong.</h1>
      <p className="not-found-para">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        type="button"
        onClick={this.renderJobItemDetails}
        className="retry-btn"
      >
        Retry
      </button>
    </div>
  )

  renderJobItemView = () => {
    const {jobOfferDetails, similarJobOffers} = this.state
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      lifeAtCompany,
      employmentType,
      id,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      title,
      skills,
    } = jobOfferDetails

    return (
      <>
        <div className="job-card-bg" key={id}>
          <div className="company-data-bg">
            <img
              src={companyLogoUrl}
              alt="job details company logo"
              className="company-logo"
            />
            <div className="company-name-bg">
              <h1 className="job-title">{title}</h1>
              <div className="horizontal-display">
                <AiFillStar className="star" />
                <p className="rating">{rating}</p>
              </div>
            </div>
          </div>
          <div className="horizontal wrap-contents">
            <div className="horizontal location">
              <ImLocation className="location-icon" />
              <p className="rating">{location}</p>
            </div>
            <div className="horizontal-display job-type">
              <BsFillBriefcaseFill className="location-icon" />
              <p className="rating">{employmentType}</p>
            </div>

            <p className="rating">{packagePerAnnum}</p>
          </div>
          <hr className="line-hr" />
          <div className="horizontal-display visit-bg">
            <h1 className="life">Description</h1>
            <button type="button" className="horizontal visit-btn">
              <a href={companyWebsiteUrl} className="visit-link">
                Visit <FaExternalLinkAlt className="visit-icon" />
              </a>
            </button>
          </div>

          <p className="description">{jobDescription}</p>

          <h1 className="life">Skills</h1>
          <ul className="horizontal wrap-contents list-bg">
            {skills.map(skill => (
              <li className="horizontal skill" key={skill.name}>
                <img
                  src={skill.image_url}
                  alt={skill.name}
                  className="skill-img"
                />
                <p className="skill-name">{skill.name}</p>
              </li>
            ))}
          </ul>
          <h1 className="life">Life at Company</h1>
          <div className="horizontal-bg life-bg">
            <p className="life-description">{lifeAtCompany.description}</p>
            <img
              src={lifeAtCompany.image_url}
              alt="life at company"
              className="company-img"
            />
          </div>
        </div>
        <h1 className="life start-begin">Similar Jobs</h1>
        <ul className="horizontal-display wrap-contents list-bg">
          {similarJobOffers.map(job => (
            <EmploymentCard
              availableJob={job}
              key={job.id}
              altLogo="similar job company logo"
            />
          ))}
        </ul>
      </>
    )
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderJobItem = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case jobApiStatus.inprogress:
        return this.renderLoader()
      case jobApiStatus.success:
        return this.renderJobItemView()
      case jobApiStatus.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    const {isLoading} = this.state

    return (
      <>
        <Header />
        <div className="job-item-bg">
          {isLoading && this.renderLoader()}
          {!isLoading && this.renderJobItem()}
        </div>
      </>
    )
  }
}

export default JobItem

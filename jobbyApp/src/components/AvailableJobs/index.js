import Loader from 'react-loader-spinner'
import EmploymentCard from '../EmploymentCard'
import './index.css'

const AvailableJobs = props => {
  const {status, jobsDetails, getAvailableJobs} = props

  const retryJobs = () => {
    getAvailableJobs()
  }

  const jobsApiStatus = {
    inprogress: 'IN_PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
    zero: 'ZERO',
  }

  const renderJobNotFound = () => (
    <div className="not-found-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
        className="not-found-img"
      />
      <h1 className="not-found">No Jobs Found</h1>
      <p className="not-found-para">
        We could not find any jobs. Try other filters
      </p>
    </div>
  )

  const renderPageNotFound = () => (
    <div className="not-found-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="not-found-img"
      />
      <h1 className="not-found">Oops! Something Went Wrong</h1>
      <p className="not-found-para">
        We cannot seem to find the page you are looking for
      </p>
      <button type="button" onClick={retryJobs} className="retry-btn">
        Retry
      </button>
    </div>
  )

  const renderAllJobs = () => (
    <>
      <ul className="jobs-list-bg">
        {jobsDetails.map(job => (
          <EmploymentCard
            availableJob={job}
            key={job.id}
            altLogo="company logo"
          />
        ))}
      </ul>
    </>
  )

  const renderLoader = () => (
    <div className="jobs-list-bg">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  switch (status) {
    case jobsApiStatus.inprogress:
      return renderLoader()
    case jobsApiStatus.success:
      return renderAllJobs()
    case jobsApiStatus.failure:
      return renderPageNotFound()
    case jobsApiStatus.zero:
      return renderJobNotFound()
    default:
      return null
  }
}

export default AvailableJobs

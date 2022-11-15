import {Component} from 'react'
import Cookies from 'js-cookie'

import {BsSearch} from 'react-icons/bs'
import UserProfileCard from '../UserProfileCard'
import AvailableJobs from '../AvailableJobs'

import './index.css'
import Header from '../Header'
import JobsFilter from '../JobsFilter'

const jobsApiStatus = {
  inprogress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  zero: 'ZERO',
}

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class Jobs extends Component {
  state = {
    jobsList: [],
    employmentTypes: [],
    salaryRanges: '',
    search: '',

    jobApiStatus: '',
  }

  componentDidMount() {
    this.getAvailableJobs()
  }

  formatJobDetails = job => ({
    companyLogoUrl: job.company_logo_url,
    employmentType: job.employment_type,
    id: job.id,
    jobDescription: job.job_description,
    location: job.location,
    packagePerAnnum: job.package_per_annum,
    rating: job.rating,
    title: job.title,
  })

  getAvailableJobs = async () => {
    this.setState({
      jobApiStatus: jobsApiStatus.inprogress,
    })
    const {search, employmentTypes, salaryRanges} = this.state
    const jobsString = employmentTypes.join(',')

    const token = Cookies.get('jwt_token')
    console.log('job', jobsString, 'sal', salaryRanges, 'search', search)
    const jobsApiUrl = `https://apis.ccbp.in/jobs?employment_type=${jobsString}&minimum_package=${salaryRanges}&search=${search}`
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const jobsResponse = await fetch(jobsApiUrl, reqOptions)
    const jobData = await jobsResponse.json()
    if (jobsResponse.ok) {
      const formattedJobsData = jobData.jobs.map(job =>
        this.formatJobDetails(job),
      )

      const jobsCount = formattedJobsData.length
      if (jobsCount > 0) {
        this.setState({
          jobsList: formattedJobsData,
          jobApiStatus: jobsApiStatus.success,
        })
      } else {
        this.setState({
          jobsList: [],
          jobApiStatus: jobsApiStatus.zero,
        })
      }
    } else {
      this.setState({jobsList: [], jobApiStatus: jobsApiStatus.failure})
    }
  }

  onJobTypeCheckChange = job => {
    const {employmentTypes} = this.state

    this.setState(
      {employmentTypes: [...employmentTypes, job]},
      this.getAvailableJobs,
    )
  }

  onSalaryCheckChange = s => {
    this.setState(
      {
        salaryRanges: s,
      },
      this.getAvailableJobs,
    )
  }

  onSearchKey = E => {
    const searchKey = E.target.value
    this.setState({search: searchKey})
  }

  onSearchEnter = e => {
    const a = e.key

    if (a === 'Enter') {
      this.getAvailableJobs()
    }
  }

  onClickSearchBtn = () => {
    this.getAvailableJobs()
  }

  renderJobsView = () => {
    const {search, jobsList, jobApiStatus} = this.state

    return (
      <>
        <div className="lg-left-container">
          <div className="search-bar-box">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              onChange={this.onSearchKey}
              onKeyDown={this.onSearchEnter}
              value={search}
            />
            <button
              className="search-btn"
              type="button"
              onClick={this.onClickSearchBtn}
            >
              <BsSearch className="search-icon" />
            </button>
          </div>
          <UserProfileCard />
          <JobsFilter
            employmentDetails={employmentTypesList}
            salaryDetails={salaryRangesList}
            onJobTypeCheckChange={this.onJobTypeCheckChange}
            onSalaryCheckChange={this.onSalaryCheckChange}
          />
        </div>

        <div className="lg-right-container">
          <div className="search-bar-box-lg">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              onChange={this.onSearchKey}
              onKeyDown={this.onSearchEnter}
              value={search}
            />
            <button
              className="search-btn"
              type="button"
              onClick={this.onClickSearchBtn}
            >
              <BsSearch className="search-icon" />
            </button>
          </div>
          <AvailableJobs
            jobsDetails={jobsList}
            status={jobApiStatus}
            getAvailableJobs={this.getAvailableJobs}
          />
        </div>
      </>
    )
  }

  render() {
    return (
      <>
        <Header />
        <div className="jobs-bg">{this.renderJobsView()}</div>
      </>
    )
  }
}

export default Jobs

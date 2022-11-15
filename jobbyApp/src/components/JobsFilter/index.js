import {Component} from 'react'

import './index.css'

class JobsFilter extends Component {
  renderJobsLists = () => {
    const {employmentDetails, onJobTypeCheckChange} = this.props
    const onJobChange = e => {
      const jobType = e.target.value
      onJobTypeCheckChange(jobType)
    }

    return employmentDetails.map(job => (
      <li className="job-item" key={job.employmentTypeId}>
        <input
          id={job.employmentTypeId}
          type="checkbox"
          className="check-input"
          value={job.employmentTypeId}
          onChange={onJobChange}
        />
        <label htmlFor={job.employmentTypeId} className="label-job-type">
          {job.label}
        </label>
      </li>
    ))
  }

  renderSalaryList = () => {
    const {salaryDetails, onSalaryCheckChange} = this.props

    return salaryDetails.map(salary => {
      const onSalaryChange = () => {
        onSalaryCheckChange(salary.salaryRangeId)
      }

      return (
        <li className="job-item" key={salary.salaryRangeId}>
          <input
            id={salary.salaryRangeId}
            type="radio"
            className="check-input"
            onChange={onSalaryChange}
          />
          <label htmlFor={salary.salaryRangeId} className="label-job-type">
            {salary.label}
          </label>
        </li>
      )
    })
  }

  render() {
    return (
      <>
        <hr className="line-white" />
        <h1 className="type-employment-heading">Type of Employment</h1>
        <ul className="list-bg-employments">{this.renderJobsLists()}</ul>

        <hr className="line-white" />
        <h1 className="type-employment-heading">Salary Range</h1>
        <ul className="list-bg-employments">{this.renderSalaryList()}</ul>
      </>
    )
  }
}

export default JobsFilter

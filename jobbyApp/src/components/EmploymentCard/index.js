import {BsFillBriefcaseFill} from 'react-icons/bs'

import {Link, withRouter} from 'react-router-dom'

import {ImLocation} from 'react-icons/im'

import {AiFillStar} from 'react-icons/ai'

import './index.css'

const EmploymentCard = props => {
  const {availableJob, altLogo} = props

  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = availableJob

  const itemCardStyle = altLogo === 'similar job company logo' ? 'card' : ''
  const isPackage = packagePerAnnum !== undefined

  return (
    <Link className="link-item" to={`/jobs/${id}`}>
      <li className={`job-details-card-bg ${itemCardStyle}`} key={id}>
        <div className="company-data-bg">
          <img src={companyLogoUrl} alt={altLogo} className="company-logo" />
          <div className="company-name-bg">
            <h1 className="job-title">{title}</h1>
            <div className="horizontal-display">
              <AiFillStar className="star" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="horizontal-display wrap-items apart">
          <div className="horizontal-display location">
            <ImLocation className="location-icon" />
            <p className="rating">{location}</p>
          </div>
          <div className="horizontal-display job-type">
            <BsFillBriefcaseFill className="location-icon" />
            <p className="rating">{employmentType}</p>
          </div>

          {isPackage && <p className="rating">{packagePerAnnum}</p>}
        </div>
        <hr className="line-hr" />

        <h1 className="description-title">Description</h1>
        <p className="description">{jobDescription}</p>
      </li>
    </Link>
  )
}
export default withRouter(EmploymentCard)

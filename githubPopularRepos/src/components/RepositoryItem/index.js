// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    id,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = repositoryDetails

  return (
    <li key={id} className="repository-item">
      <img src={avatarUrl} className="avatar" alt={name} />
      <h1 className="name-repo">{name}</h1>
      <div className="avatar-ratings">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="rating-type"
          alt="stars"
        />
        <p className="rating-count">{`${starsCount} stars`}</p>
      </div>
      <div className="avatar-ratings">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="rating-type"
          alt="forks"
        />
        <p className="rating-count">{`${forksCount} forks`}</p>
      </div>
      <div className="avatar-ratings">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="rating-type"
          alt="open issues"
        />
        <p className="rating-count">{`${issuesCount} open issues`}</p>
      </div>
    </li>
  )
}

export default RepositoryItem

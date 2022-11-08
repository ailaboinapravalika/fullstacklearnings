// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails

  return (
    <Link className="team-card-link" to={`/team-matches/${id}`}>
      <li className="list-item-container" key={id}>
        <img src={teamImageUrl} alt={name} className="team-card-img" />
        <p className="team-card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const formattedMatchDetails = {
    competingTeam: matchDetails.competing_team,
    competingTeamLogo: matchDetails.competing_team_logo,
    matchStatus: matchDetails.match_status,
    result: matchDetails.result,
  }
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = formattedMatchDetails

  const isWin = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="recentMatches-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-logo-img"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${isWin}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

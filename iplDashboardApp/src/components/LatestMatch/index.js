// Write your code here
// use value of the key 'competing_team' for alt as `latest match ${competing_team}`
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const latesMatchDetailsObj = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,

    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latesMatchDetailsObj

  return (
    <div className="latest-matches-container">
      <div className="match-data-box">
        <p className="opp-team-name">{competingTeam}</p>
        <p className="match-date">{date}</p>
        <p className="match-venue">{venue}</p>
        <p className="match-venue">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="opp-team-img"
      />
      <hr className="hr-line" />
      <div className="match-metrics-box">
        <p className="metric-name">First Innings</p>
        <p className="match-venue">{firstInnings}</p>
        <p className="metric-name">Second Innings</p>
        <p className="metric-venue">{secondInnings}</p>
        <p className="metric-name">Man Of The Match</p>
        <p className="metric-venue">{manOfTheMatch}</p>
        <p className="metric-name">Umpires</p>
        <p className="metric-venue">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesObj: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatchesList()
  }

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamMatchesData = await response.json()

    const newTeamMatchesObj = {
      id,
      teamBannerUrl: teamMatchesData.team_banner_url,
      latestMatchDetails: teamMatchesData.latest_match_details,
      recentMatches: teamMatchesData.recent_matches,
    }

    this.setState({teamMatchesObj: newTeamMatchesObj, isLoading: false})
  }

  getTeamMatchesBody = () => {
    const {teamMatchesObj} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesObj

    return (
      <div className="matches-main-card">
        <img src={teamBannerUrl} alt="team banner" className="team-main-img" />
        <h1 className="latest-matches-title">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="match-cards-container">
          {recentMatches.map(match => (
            <MatchCard matchDetails={match} key={match.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading, teamMatchesObj} = this.state
    const bgColor = isLoading ? '' : `${teamMatchesObj.id}`
    console.log(bgColor)

    return (
      <div className={`team-matches-container ${bgColor}`}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getTeamMatchesBody()
        )}
      </div>
    )
  }
}

export default TeamMatches

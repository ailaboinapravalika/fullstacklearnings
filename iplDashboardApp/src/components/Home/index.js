// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamsList()
  }

  getIplTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamData = await response.json()
    const {teams} = teamData
    const formattedTeamsList = teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))
    this.setState({teamsList: formattedTeamsList, isLoading: false})
  }

  getTeamsListBody = () => {
    const {teamsList} = this.state

    return (
      <div className="main-card">
        <div className="title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo-img"
          />
          <h1 className="title">IPL Dashboard</h1>
        </div>
        <ul className="team-cards-container">
          {teamsList.map(team => (
            <TeamCard teamDetails={team} key={team.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading, teamsList} = this.state

    return (
      <div className="home-container">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getTeamsListBody()
        )}
      </div>
    )
  }
}
export default Home

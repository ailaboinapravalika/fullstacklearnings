// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, winOrLose} = props
  let scoreCard
  if (winOrLose) {
    scoreCard = null
    console.log(winOrLose)
  } else {
    scoreCard = (
      <div className="nav-score-container">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
    console.log(winOrLose)
  }

  return (
    <nav className="nav-bar">
      <div className="nav-title-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo-img"
          alt="emoji logo"
        />
        <h1 className="emoji-game-title">Emoji Game</h1>
      </div>
      {scoreCard}
    </nav>
  )
}

export default NavBar

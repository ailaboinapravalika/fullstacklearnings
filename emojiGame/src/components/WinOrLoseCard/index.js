// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, onStartAgain} = props
  let wishOrConsole
  let scoreType
  let finalImage
  const totalScore = `${score}/12`

  const onPlayAgain = () => {
    onStartAgain()
  }

  if (score === 12) {
    wishOrConsole = 'You Won'
    scoreType = 'Best Score'
    finalImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    wishOrConsole = 'You Lose'
    scoreType = 'Score'
    finalImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }

  return (
    <div className="win-lose-container">
      <img src={finalImage} alt="won-lose" className="win-lose-img" />
      <div className="score-card">
        <h1 className="wish-console-text">{wishOrConsole}</h1>
        <p className="score-type">{scoreType}</p>
        <p className="final-score">{totalScore}</p>
        <button type="button" className="play-button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={finalImage} alt="win or lose" className="win-lose-img-lg" />
    </div>
  )
}

export default WinOrLoseCard

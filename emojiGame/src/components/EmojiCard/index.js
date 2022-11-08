// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onSelectedEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const selectEmoji = () => {
    onSelectedEmoji(id)
  }

  return (
    <li key={id} className="list-card">
      <button type="button" className="emoji-container" onClick={selectEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard

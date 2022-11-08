import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, onLike, onDelete} = props
  const {id, name, commentText, postedTime, isLiked, colorCode} = commentDetails

  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const colorBlue = isLiked ? 'blue-like' : ''

  const onClickLike = () => {
    onLike(id)
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="list-item">
      <div className="box-name">
        <div className={`initial ${colorCode}`}>{name[0]}</div>
        <p className="name">{name}</p>
        <p className="time">{formatDistanceToNow(postedTime)}</p>
      </div>
      <p className="comment">{commentText}</p>
      <div className="likes-delete-box">
        <button className="like-btn" type="button" onClick={onClickLike}>
          <img src={imgUrl} alt="like" className="like-img" />
          <p className={`like ${colorBlue}`}> Like</p>
        </button>

        <button
          testid="delete"
          className="delete-btn"
          type="button"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
            className="delete"
          />
        </button>
      </div>
      <hr className="horizontal-line" />
    </li>
  )
}

export default CommentItem

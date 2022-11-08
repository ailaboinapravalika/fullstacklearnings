import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', commentText: '', commentsCount: 0}

  onNameChange = e => {
    this.setState({name: e.target.value})
  }

  onCommentChange = e => {
    this.setState({commentText: e.target.value})
  }

  onCommentSubmit = event => {
    event.preventDefault()
    const {commentsList, name, commentText, commentsCount} = this.state
    const newIndex = commentsCount < 7 ? commentsCount : commentsCount % 7
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
      postedTime: new Date(),
      isLiked: false,
      colorCode: initialContainerBackgroundClassNames[newIndex],
    }
    const newCommentsList = [...commentsList, newComment]
    this.setState({
      commentsList: newCommentsList,
      name: '',
      commentText: '',
      commentsCount: commentsCount + 1,
    })
  }

  onDelete = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
    this.setState(prevState => ({commentsCount: prevState.commentsCount - 1}))
  }

  onLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {commentsList, name, commentText, commentsCount} = this.state

    return (
      <div className="bg-comments">
        <div>
          <h1 className="comments-title">Comments</h1>
          <div className="main-card-comments">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img-box-small"
            />

            <div className="inputs-container">
              <p className="info-line">Say something about 4.0 Technologies</p>
              <form className="comments-form" onSubmit={this.onCommentSubmit}>
                <input
                  type="text"
                  className="name"
                  placeholder="Your Name"
                  onChange={this.onNameChange}
                  value={name}
                />
                <textarea
                  value={commentText}
                  placeholder="Your Comment"
                  rows="8"
                  cols="30"
                  className="name"
                  onChange={this.onCommentChange}
                >
                  {' '}
                </textarea>
                <button type="submit" className="add-btn">
                  Add Comment
                </button>
              </form>
            </div>
          </div>
          <hr className="line-seperator" />
          <div className="comments-box">
            <p className="count">{commentsCount}</p>
            <p className="comments">Comments</p>
          </div>
          <ul className="list-comments">
            {commentsList.map(commentElement => (
              <CommentItem
                commentDetails={commentElement}
                key={commentElement.id}
                onLike={this.onLike}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments

// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails

  return (
    <Link className="blog-link-item" to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img src={imageUrl} alt="blogImage" className="blog-item-img" />

        <div className="blog-item-details-box">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-box">
            <img src={avatarUrl} alt="avatar" className="author-img" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem

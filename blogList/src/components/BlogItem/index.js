// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, description, publishedDate} = blogDetails

  return (
    <li key={id} className="blog-item">
      <div className="title-card">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem

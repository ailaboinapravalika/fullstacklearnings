// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogList} = props

  return (
    <ul className="blog-list-container">
      {blogList.map(blog => (
        <BlogItem blogDetails={blog} key={blog.id} />
      ))}
    </ul>
  )
}

export default BlogList

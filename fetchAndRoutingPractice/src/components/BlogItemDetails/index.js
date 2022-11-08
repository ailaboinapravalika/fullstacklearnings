// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props

    const {params} = match

    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const blogData = await response.json()
    const formattedBlogData = {
      title: blogData.title,
      imageUrl: blogData.image_url,
      avatarUrl: blogData.avatar_url,
      author: blogData.author,
      content: blogData.content,
      topic: blogData.topic,
    }

    this.setState({blogDetails: formattedBlogData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content, topic} = blogDetails
    console.log(isLoading)

    return (
      <div className="main-blog-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-details-container">
            <h1 className="blog-title">{title}</h1>
            <div className="blog-author-box">
              <img
                src={avatarUrl}
                alt="authorImage"
                className="blog-author-img"
              />
              <p className="blog-author">{author}</p>
            </div>
            <div className="blog-img-box">
              <img src={imageUrl} alt={title} className="blog-img" />
            </div>
            <p className="blog-content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails

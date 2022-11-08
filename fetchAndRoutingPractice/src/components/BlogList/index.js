// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsListData: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const listData = await response.json()
    const formattedList = listData.map(listItem => ({
      id: listItem.id,
      title: listItem.title,
      imageUrl: listItem.image_url,
      avatarUrl: listItem.avatar_url,
      author: listItem.author,
      topic: listItem.topic,
    }))
    this.setState({blogsListData: formattedList, isLoading: false})
  }

  render() {
    const {blogsListData, isLoading} = this.state

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsListData.map(eachBlogItem => (
            <BlogItem blogDetails={eachBlogItem} key={eachBlogItem.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList

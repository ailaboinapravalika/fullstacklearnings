import {Component} from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-bg">
          <h1 className="home-heading">Find The Job That Fits Your Life</h1>
          <p className="app-description">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
          <Link className="link-item" to="/jobs">
            <button type="button" className="Find-btn">
              Find Jobs
            </button>
          </Link>
        </div>
      </>
    )
  }
}

export default Home

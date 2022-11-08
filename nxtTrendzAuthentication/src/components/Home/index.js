// Write your JS code here
import './index.css'

import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-bg">
      <div className="home-text-card">
        <h1 className="heading-home">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-img"
        />
        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time.Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, Celebrate the seasons new exciting fashion in
          your own way.
        </p>
        <button type="button" className="shop-nw">
          Shop Now
        </button>
      </div>
      <div className="img-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="lg-home-img"
        />
      </div>
    </div>
  </>
)

export default Home

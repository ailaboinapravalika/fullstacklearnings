// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-bg">
          {showLeftNavbar && (
            <div className="left-nav-bg">
              <h1 className="left-nav-hd">Left Navbar Menu</h1>
              <ul className="items-bg">
                <li className="item">
                  <p className="item-text">Item 1</p>
                </li>
                <li className="item">
                  <p className="item-text">Item 2</p>
                </li>
                <li className="item">
                  <p className="item-text">Item 3</p>
                </li>
                <li className="item">
                  <p className="item-text">Item 4</p>
                </li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="context-bg">
              <h1 className="left-nav-hd">Content</h1>
              <p className="item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labor et dolore magna aliqua. Ut
                enim ad minim venium.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="left-nav-bg">
              <h1 className="left-nav-hd">Right Navbar Menu</h1>
              <div className="items-bg">
                <div className="ad-box">
                  <p>Ad 1</p>
                </div>
                <div className="ad-box">
                  <p>Ad 2</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

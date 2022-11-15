// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContext = () => {
        onToggleShowContent()
      }

      const onChangeLeftNav = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNav = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-bg">
          <h1 className="layout-hd">Layout</h1>
          <div className="input-check-bg">
            <input
              id="context"
              type="checkbox"
              className="checkbox-style"
              value={showContent}
              checked={showContent}
              onChange={onChangeContext}
            />
            <label htmlFor="context" className="check-label">
              Content
            </label>
          </div>
          <div className="input-check-bg">
            <input
              id="leftBar"
              type="checkbox"
              className="checkbox-style"
              value={showLeftNavbar}
              checked={showLeftNavbar}
              onChange={onChangeLeftNav}
            />
            <label htmlFor="leftBar" className="check-label">
              Left Navbar
            </label>
          </div>
          <div className="input-check-bg">
            <input
              id="rightBar"
              type="checkbox"
              className="checkbox-style"
              value={showRightNavbar}
              checked={showRightNavbar}
              onChange={onChangeRightNav}
            />
            <label htmlFor="rightBar" className="check-label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

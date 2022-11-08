// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Dark Mode', prevMode: 'Light Mode'}

  onChange = () => {
    const {mode} = this.state
    if (mode === 'Light Mode') {
      this.setState(() => ({mode: 'Dark Mode', prevMode: 'Light Mode'}))
    } else {
      this.setState(() => ({mode: 'Light Mode', prevMode: 'Dark Mode'}))
    }
  }

  render() {
    const {mode, prevMode} = this.state
    const style = mode === 'Light Mode' ? 'light' : 'dark'

    return (
      <div className="bg-container">
        <div className={style} id="card">
          <h1>Click To Change Mode</h1>
          <button className="light" type="button" onClick={this.onChange}>
            {prevMode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

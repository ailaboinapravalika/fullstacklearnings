// Write your code here
import './index.css'

const AppItem = props => {
  const {appData} = props
  const {appId, appName, imageUrl} = appData

  return (
    <li className="app-box" key={appId}>
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem

// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planetData} = props
  const {id, imageUrl, name, description} = planetData
  console.log(name)
  return (
    <div className="planet-bg">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="name">{name}</h1>
      <p className="about">{description}</p>
    </div>
  )
}

export default PlanetItem

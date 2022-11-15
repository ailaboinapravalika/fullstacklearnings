// Write your code here

import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  }

  return (
    <div className="planets-slider-bg">
      <h1 className="planets-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(planet => (
          <PlanetItem planetData={planet} key={planet.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider

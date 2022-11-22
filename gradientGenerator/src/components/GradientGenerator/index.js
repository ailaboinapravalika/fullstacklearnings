import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  DivEle,
  Heading,
  Text,
  DirectionUlist,
  ColorsForm,
  SubDiv,
  ColorText,
  InputColor,
  ButtonEle,
  ColorsDiv,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    initDirection: gradientDirectionsList[0].value,
    initColorOne: '#8ae323',
    initColorTwo: '#014f7b',
    acitveDirection: gradientDirectionsList[0].value,
    activeColorOne: '#8ae323',
    activeColorTwo: '#014f7b',
  }

  onClickDirection = value => {
    this.setState({initDirection: value})
  }

  onChangeColor1 = e => {
    this.setState({initColorOne: e.target.value})
  }

  onChangeColor2 = e => {
    this.setState({initColorTwo: e.target.value})
  }

  onClickGenerate = E => {
    E.preventDefault()
    const {initDirection, initColorOne, initColorTwo} = this.state

    this.setState({
      acitveDirection: initDirection,
      activeColorOne: initColorOne,
      activeColorTwo: initColorTwo,
    })
  }

  render() {
    const {
      initDirection,
      initColorOne,
      initColorTwo,
      acitveDirection,
      activeColorOne,
      activeColorTwo,
    } = this.state

    return (
      <DivEle
        data-testid="gradientGenerator"
        color1={activeColorOne}
        color2={activeColorTwo}
        dir={acitveDirection}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Text>Choose Direction</Text>
        <DirectionUlist>
          {gradientDirectionsList.map(direction => (
            <GradientDirectionItem
              itemDetails={direction}
              key={direction.directionId}
              onClickDirection={this.onClickDirection}
              initDirection={initDirection}
            />
          ))}
        </DirectionUlist>
        <Text>Pick The Colors</Text>
        <ColorsForm onSubmit={this.onClickGenerate}>
          <ColorsDiv>
            <SubDiv>
              <ColorText>{initColorOne}</ColorText>
              <InputColor
                type="color"
                id="firstColor"
                value={initColorOne}
                onChange={this.onChangeColor1}
                bgColor={initColorOne}
              />
            </SubDiv>
            <SubDiv>
              <ColorText>{initColorTwo}</ColorText>
              <InputColor
                type="color"
                id="secondColor"
                value={initColorTwo}
                onChange={this.onChangeColor2}
                bgColor={initColorTwo}
              />
            </SubDiv>
          </ColorsDiv>

          <ButtonEle type="submit">Generate</ButtonEle>
        </ColorsForm>
      </DivEle>
    )
  }
}

export default GradientGenerator

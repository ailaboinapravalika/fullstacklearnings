import {Component} from 'react'
import {
  ContainerEle,
  SelectEle,
  MainContainerEle,
  Heading,
  LabelEle,
  InputEle,
  ButtonEle,
  FormEle,
  FontSizeOpt,
  GeneratedDiv,
  TextOnImg,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].displayText,
    isSubmit: false,
    memeUrl: '',
    memTopText: '',
    memeBottomText: '',
    memFontSize: '',
  }

  onChangeImg = e => {
    this.setState({imgUrl: e.target.value})
  }

  onChangeTopText = e => {
    this.setState({topText: e.target.value})
  }

  onChangeBottomText = e => {
    this.setState({bottomText: e.target.value})
  }

  onChangeFontSize = e => {
    this.setState({fontSize: e.target.value})
  }

  onSubmitForm = e => {
    e.preventDefault()
    const {imgUrl, topText, bottomText, fontSize} = this.state
    if (
      imgUrl !== '' &&
      topText !== '' &&
      bottomText !== '' &&
      FontSizeOpt !== ''
    ) {
      this.setState({
        isSubmit: true,
        memeUrl: imgUrl,
        memTopText: topText,
        memeBottomText: bottomText,
        memFontSize: fontSize,
      })
    } else {
      this.setState({
        isSubmit: false,
        memeUrl: '',
        memTopText: '',
        memeBottomText: '',
        memFontSize: '',
      })
    }
  }

  render() {
    const {
      imgUrl,
      topText,
      bottomText,
      fontSize,
      isSubmit,
      memeUrl,
      memTopText,
      memeBottomText,
      memFontSize,
    } = this.state

    const memeEl = isSubmit ? (
      <GeneratedDiv imUrl={memeUrl} data-testid="meme">
        <TextOnImg customFontSize={memFontSize}>{memTopText}</TextOnImg>
        <TextOnImg customFontSize={memFontSize}>{memeBottomText}</TextOnImg>
      </GeneratedDiv>
    ) : null

    return (
      <ContainerEle>
        <Heading>Meme Generator</Heading>
        <MainContainerEle>
          <FormEle onSubmit={this.onSubmitForm}>
            <LabelEle htmlFor="imageUrl">Image URL</LabelEle>
            <InputEle
              type="text"
              id="imageUrl"
              value={imgUrl}
              onChange={this.onChangeImg}
              placeholder="Enter the Image URL"
            />

            <LabelEle htmlFor="topText">Top Text</LabelEle>
            <InputEle
              type="text"
              id="topText"
              value={topText}
              onChange={this.onChangeTopText}
              placeholder="Enter the Top Text"
            />

            <LabelEle htmlFor="bottomText">bottom Text</LabelEle>
            <InputEle
              type="text"
              id="bottomText"
              value={bottomText}
              onChange={this.onChangeBottomText}
              placeholder="Enter the Bottom Text"
            />

            <LabelEle htmlFor="selectInput">Font Size</LabelEle>
            <SelectEle
              onChange={this.onChangeFontSize}
              id="selectInput"
              value={fontSize}
            >
              {fontSizesOptionsList.map(font => (
                <FontSizeOpt key={font.optionId} value={font.optionId}>
                  {font.displayText}
                </FontSizeOpt>
              ))}
            </SelectEle>

            <ButtonEle type="submit">Generate</ButtonEle>
          </FormEle>
          {memeEl}
        </MainContainerEle>
      </ContainerEle>
    )
  }
}

export default MemeGenerator

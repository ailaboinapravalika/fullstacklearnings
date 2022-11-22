import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {RulesDiv, RulesButton, RulesImgEle, CloseBtn} from './StyledComponents'

const overlayStyles = {background: 'rgba(0,0,0,0.5)'}

const RulesModal = () => (
  <Popup
    modal
    trigger={<RulesButton type="button">Rules</RulesButton>}
    position="left top"
    overlayStyle={overlayStyles}
  >
    {close => (
      <RulesDiv>
        <CloseBtn type="button" onClick={close}>
          <RiCloseLine />
        </CloseBtn>
        <RulesImgEle
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </RulesDiv>
    )}
  </Popup>
)

export default RulesModal

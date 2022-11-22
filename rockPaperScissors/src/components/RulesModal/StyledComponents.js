import styled from 'styled-components'

export const RulesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55vw;

  background-color: #ffffff;
  padding: 20px;
`

export const RulesButton = styled.button`
  border: 0px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
  font-size: 22px;
  color: #223a5f;
  font-weight: 400;
  align-self: flex-end;
  font-family: 'Bree Serif';
  cursor: pointer;
  outline: none;
`

export const RulesImgEle = styled.img`
  width: 94%;
  height: 80%;
`

export const CloseBtn = styled(RulesButton)`
  width: 40px;
  height: 40px;
  padding: 10px;
  background-color: #fafaf6;
  margin-left: auto;
`

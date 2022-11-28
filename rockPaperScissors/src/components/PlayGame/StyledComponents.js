import styled from 'styled-components'

export const ButtonsDiv = styled.div`
  width: 66%;
  height: 56vh;
  max-height: 500px;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 94%;
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  width: 146.7px;
  height: 146px;
  padding: 0px;
  margin: 40px;

  background-color: green;
  padding-top: 12px;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 768px) {
    width: 118px;
    height: 118px;
    padding-top: 10px;
  }
  @media screen and (max-width: 576px) {
    width: 111px;
    height: 111px;
    padding-top: 8px;
  }
  @media screen and (max-width: 428px) {
    margin: 10px;
  }
  overflow: hidden;
  border-radius: 50%;
`

export const ImgEle = styled.img`
  width: 180.7px;
  height: 180.7px;

  background-color: pink;
  @media screen and (max-width: 768px) {
    width: 144px;
    height: 144px;
  }
  @media screen and (max-width: 576px) {
    width: 136px;
    height: 136px;
  }
  border-radius: 50%;
`

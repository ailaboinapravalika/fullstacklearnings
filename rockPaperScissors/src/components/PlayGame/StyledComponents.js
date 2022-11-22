import styled from 'styled-components'

export const ButtonsDiv = styled.div`
  width: 56%;
  height: 56vh;
  max-height: 500px;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 96%;
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
  margin-bottom: 0px;
  margin-right: 60px;
  background-color: green;
  padding-top: 12px;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 768px) {
    //width: 82px;
    // height: 82px;
    // padding-top: 7px;
  }
  overflow: hidden;
  border-radius: 50%;
`

export const ImgEle = styled.img`
  width: 180.7px;
  height: 180.7px;

  background-color: pink;
  @media screen and (max-width: 768px) {
    // width: 100px;
    //  height: 98px;
  }
  border-radius: 50%;
`

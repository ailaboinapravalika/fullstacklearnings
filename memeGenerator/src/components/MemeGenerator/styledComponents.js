// Style your components here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
  font-size: 38px;
  font-weight: 600;
  width: 76%;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 30px;
  }
`
export const ContainerEle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 120px;
  padding-right: 40px;
  padding-left: 40px;
`

export const MainContainerEle = styled.div`
  width: 76%;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: 'open sans';
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap-reverse;
  }
`
export const GeneratedDiv = styled.div`
  background-image: url(${props => props.imUrl});
  background-size: cover;
  height: 400px;
  width: 100%;
  padding-top: 30px;
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 480px;
  }
`

export const TextOnImg = styled.p`
  font-size: ${props => props.customFontSize}px;
  text-align: center;
  color: #ffffff;
`

export const FormEle = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 50px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
  }
`

export const LabelEle = styled.label`
  color: #7e858e;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
`

export const InputEle = styled.input`
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 20px;
  width: 100%;
  min-width: 220px;

  color: #5a7184;
  font-size: 18px;
  margin-bottom: 30px;
`
export const SelectEle = styled.select`
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 20px;
  width: 100%;
  min-width: 220px;

  color: #5a7184;
  font-size: 18px;
  margin-bottom: 30px;
`

export const ButtonEle = styled.button`
  outline: none;
  cursor: pointer;
  color: #ffffff;
  background-color: #0b69ff;
  font-size: 20px;
  border: 0px;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 40px;
  padding-left: 40px;
  width: 200px;
`
export const FontSizeOpt = styled.option`
  color: #1e293b;
  font-size: 20px;
`

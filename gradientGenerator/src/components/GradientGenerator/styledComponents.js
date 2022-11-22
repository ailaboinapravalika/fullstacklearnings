// Style your elements here
import styled from 'styled-components'

export const DivEle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
  background-image: linear-gradient(
    to ${props => props.dir},
    ${props => props.color1},
    ${props => props.color2}
  );
`

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: #ededed;
  text-align: center;
`

export const Text = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #ededed;
`

export const DirectionUlist = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center
  align-items: center;
  flex-wrap: wrap;
`

export const ColorsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 20%;
  height: 160px;
`
export const ColorsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`

export const ColorText = styled.p`
  font-size: 18;
  font-weight: 400;
  color: #ededed;
  margin-bottom: 8px;
`

export const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputColor = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: 0px;
  outline: none;
`
export const ButtonEle = styled.button`
  border: 0px;
  border-radius: 8px;
  background-color: #00c9b7;
  padding: 20px;
  cursor: pointer;
  outline: none;
  color: #1e293b;
  width: 90px;
`

import styled from 'styled-components'

export const ResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Bree Serif';
  width: 100%;
  height: 62vh;
`

export const ChoicesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 400px;
`

export const Choice = styled(ResultDiv)`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 250px;
`

export const YourChoice = styled.p`
  font-size: 40px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 20px;
`
export const WonText = styled.p`
  font-size: 40px;
  font-weight: 500;
  color: #ffffff;
  font-family: 'roboto';
  margin: 20px;
`

export const ChoiceImg = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 20px;
  margin-right: 20px;
`

export const PlayAgainButton = styled.button`
  border: 0px;
  background-color: #ffffff;
  border-radius: 12px;
  width: 260px;
  color: #223a5f;
  font-size: 24px;
  font-weight: 500;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  outline: none;
  font-family: 'Bree Serif';
`

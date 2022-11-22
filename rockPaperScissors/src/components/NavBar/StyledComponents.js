import styled from 'styled-components'

export const NavEle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 14px;
  border: 3px solid #ffffff;
  width: 100%;
  font-family: 'Bree Serif';
  @media screen and (min-width: 768px) {
    width: 68%;
  }
`

export const TitleEle = styled.h1`
  font-size: 34px;
  font-weight: 500;
  color: #ffffff;
  margin: 0px;
  width: 150px;
  height: 120px;
`

export const ScoreBox = styled.div`
  width: 120px;
  height: 150px;
  background-color: #ffffff;
  border-radius: 14px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ScoreTitle = styled.p`
  font-size: 34px;
  font-weight: 600;
  color: #223a5f;
  margin: 0px;
`

export const Score = styled(ScoreTitle)`
  font-size: 46px;
  font-weight: 700;
  font-family: 'Roboto';
`

// Style your elements here
import styled from 'styled-components'

export const ListEle = styled.li`
  padding: 0px;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 110px;
  list-style: none;
`

export const Button = styled.button`
  border: 0px;
  border-radius: 8px;
  background-color: #ffffff;
  opacity: ${props => (props.activeDir === 'active' ? 1 : 0.5)};
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  outline: none;
  color: #1e293b;
  width: 100%;
  font-size: 18px;
`

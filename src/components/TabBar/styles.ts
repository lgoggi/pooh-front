import styled from "styled-components/native";

export const Wrapper = styled.View`
  align-items: center;
  background-color: ${(props) => props.theme.color.gray["800"]};
  border-radius: 16px 16px 0px 0px;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 24px 16px;
  position: absolute;
  width: 100%;
`

export const Title = styled.Text<{active: Boolean}>`
  color: ${ (props) => props.active ? "#F7F7F7": "#878787"} ;
  font-weight: 600;
`
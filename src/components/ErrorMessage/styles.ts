import { styled } from "styled-components/native";

export const Container = styled.View`

`

export const Message = styled.Text`
  color: ${ (props) => props.theme.color.error};
  justify-content: flex-start;
  margin: -10px auto 0;
`
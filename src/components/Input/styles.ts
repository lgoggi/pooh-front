import styled from "styled-components/native";

export const Container = styled.View`
`

export const Label = styled.Text`
  align-self: flex-start;
  background-color: ${(props) => props.theme.color.backgroundColor};
  color: ${(props) => props.theme.color.secondary};
  font-size: ${(props) => props.theme.fontSize.default};
  margin: 0 16px -8px;
  padding: 0 8px;
  z-index: 1;
`

export const UserInput = styled.TextInput`
  background-color: ${(props) => props.theme.color.backgroundColor};
  border-color: ${(props) => props.theme.color.secondary};
  border-radius: 9999px;
  border-width: 1px;
  color: ${(props) => props.theme.color.secondary};
  font-size: ${(props) => props.theme.fontSize.default};
  font-weight: 500;
  padding: 12px 20px;
`
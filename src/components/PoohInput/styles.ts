import styled from "styled-components/native";

export const Wrapper = styled.View`
  background-color: ${(props) => props.theme.color.backgroundColor};
  border-bottom-color: ${(props) => props.theme.color.secondary};
  border-bottom-width: 1px;
  padding: 16px;
  width: 100%;
`

export const Input = styled.View`
  background-color: ${(props) => props.theme.color.backgroundColor};
  border-color: ${(props) => props.theme.color.secondary};
  border-radius: 9999px;
  border-width: 1px;
  color: ${(props) => props.theme.color.secondary};
  font-size: ${(props) => props.theme.fontSize.default};
  font-weight: 500;
  padding: 16px 20px;
`
export const Label = styled.Text`
  color: ${(props) => props.theme.color.secondary};
  font-style: italic;
`
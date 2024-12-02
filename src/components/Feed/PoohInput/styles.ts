import styled from "styled-components/native";

export const Wrapper = styled.View`
  background-color: ${(props) => props.theme.color.gray["800"]};
  padding: 16px;
  width: 100%;
  border-radius:  0px 0px 16px 16px;
`

export const Input = styled.View`
  background-color: ${(props) => props.theme.color.gray["700"]};
  border-radius: 9999px;
  color: ${(props) => props.theme.color.secondary};
  font-size: ${(props) => props.theme.fontSize.default};
  font-weight: 500;
  padding: 16px 20px;
`
export const Label = styled.Text`
  color: ${(props) => props.theme.color.secondary};
  font-style: italic;
`
import { styled } from "styled-components/native";

export const Button = styled.Pressable<{disabled: boolean}>`
  align-items: center;
  background-color: ${(props) => props.theme.color.primary};
  padding: 16px 24px;
  border-radius: 9999px;
  opacity: ${ (props) => props.disabled ? 0.65 : 1};
`

export const Text = styled.Text`
  color: ${(props) => props.theme.color.backgroundColor};
  font-weight: 600;
  font-size:${(props) => props.theme.fontSize.big};
`
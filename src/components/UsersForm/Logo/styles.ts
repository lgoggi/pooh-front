import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: auto;
  max-height: 200px;
  align-items: center;
  justify-content: center;
`
export const LogoImage = styled.Image`
  resize: "contain";
  width: 100%;
  height: 100%;
`

export const Title = styled.Text`
  color: ${props => props.theme.color.primary};
  font-weight: 800;
  font-size: ${ props => props.theme.fontSize.large}
`
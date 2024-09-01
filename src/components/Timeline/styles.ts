import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: ${ (props) => props.theme.color.backgroundColor};

`

export const HighlightedText = styled.Text`
  align-self: center;
  color: ${ (props) => props.theme.color.secondary};
  font-size:  ${ (props) => props.theme.fontSize.large};
`
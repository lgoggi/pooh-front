import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.color.backgroundColor};
  color: #ebebef;

`;

export const Section = styled.View`
  gap: 24px;
  justify-content: center;
`;

export const LinkWrapper = styled.View`
  align-self: center;
  display: flex;
  flex-direction: row;
  gap: 4px;
`
export const SecondaryText = styled.Text`
 color: ${props => props.theme.color.secondary};
 font-size: 14px;
 align-self: flex-end;
`
export const Link = styled.Text`
  text-decoration: underline;
  color: ${props => props.theme.color.secondary};
  font-size: ${props => props.theme.fontSize.default};
`
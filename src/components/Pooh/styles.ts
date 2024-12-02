import styled from "styled-components/native";

export const PoohWrapper = styled.View`
  align-items: flex-start;
  background-color: ${(props) => props.theme.color.backgroundColor};
  border-bottom-color: ${(props) => props.theme.color.secondary};
  border-color: ${(props) => props.theme.color.secondary};
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 3px;
  padding: 16px 8px;
  width: 100%;
`
export const ContentWrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Content = styled.Text`
  color: ${(props) => props.theme.color.secondary};
  font-size: ${(props) => props.theme.fontSize.default};
  padding: 0 4px;
`
import styled from "styled-components/native";

export const Wrapper = styled.Modal`

`
export const Container = styled.View`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  background-color: #000000CC;
`
export const Content = styled.View`
  background-color: ${(props) => props.theme.color.backgroundColor};
  border-radius: 16px;
  height: fit-content;
  margin-top: -128px;
  width: 90%;
  padding: 16px;
  gap: 12px;
`
export const Input = styled.TextInput`
  border-color: ${(props) => props.theme.color.secondary};
  border-width: 2px;
  border-radius: 12px;
  width: 100%;
  height: fit-content;
  min-height: 15%;
  color: ${(props) => props.theme.color.secondary};
  padding: 12px;
  align-items: start;
  justify-content: start;
  text-align: 'top';
`
export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Counter = styled.Text`
  font-size: ${(props) => props.theme.fontSize.default};
  color: ${(props) => props.theme.color.secondary};
  font-weight: 800;
`
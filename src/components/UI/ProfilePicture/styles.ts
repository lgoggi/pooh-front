import styled from "styled-components/native";

export const Image =  styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  border-color: ${(props) => props.theme.color.secondary};
  border-width: 1px;
`
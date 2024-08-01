import { useContext } from "react";
import { Container, Label, UserInput } from "./styles";
import { ThemeContext } from "styled-components/native";

interface IProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  placeholder?: string;
  isPassword?: boolean;
}

export const Input = ({label, setValue, placeholder, isPassword=false}: IProps) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Label>{label}</Label>
      <UserInput onChangeText={text => setValue(text)} secureTextEntry={isPassword} cursorColor={'#EBEBEF'} placeholder={placeholder} placeholderTextColor={theme!.color.secondary} />
    </Container>
  );
};

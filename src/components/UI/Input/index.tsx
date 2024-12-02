import { useContext } from "react";
import { Container, Label, UserInput } from "./styles";
import { ThemeContext } from "styled-components/native";
import { KeyboardTypeOptions } from "react-native";

interface IProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onBlur?: () => void;
  label: string;
  placeholder?: string;
  isPassword?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  error?: boolean;
}

export const Input = ({
  value,
  label,
  setValue,
  onBlur,
  placeholder,
  isPassword = false,
  keyboardType,
  error = false,
}: IProps) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Label>{label}</Label>
      <UserInput
        value={value}
        onChangeText={(text) => setValue(text)}
        onBlur={onBlur ? () => onBlur() : () => null}
        keyboardType={keyboardType ? keyboardType : "default"}
        secureTextEntry={isPassword}
        cursorColor={"#EBEBEF"}
        placeholder={placeholder}
        placeholderTextColor={theme!.color.secondary}
        error={error}
      />
    </Container>
  );
};

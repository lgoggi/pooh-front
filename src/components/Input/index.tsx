import { Container, Label, UserInput } from "./styles";

interface IProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  placeholder?: string;
  isPassword?: boolean;
}

export const Input = ({label, setValue, placeholder, isPassword=false}: IProps) => {

  return (
    <Container>
      <Label>{label}</Label>
      <UserInput onChangeText={text => setValue(text)} secureTextEntry={isPassword} cursorColor={'#EBEBEF'} placeholder={placeholder} placeholderTextColor={'#92929D'} />
    </Container>
  );
};

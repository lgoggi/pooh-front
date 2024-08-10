import { Button, Text } from "./styles";

interface IProps {
  text: string;
  action: () => void;
  disabled?: boolean;
}

const CustomButton = ({ text, action, disabled = false }: IProps) => {
  return (
    <Button onPress={action} disabled={disabled}>
      <Text>{text}</Text>
    </Button>
  );
};

export default CustomButton;

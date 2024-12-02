import { Button, Text } from "./styles";

interface IProps {
  text: string;
  action: () => void;
  disabled?: boolean;
  padding?: string;
}

const CustomButton = ({ text, action, disabled = false, padding }: IProps) => {
  return (
    <Button onPress={action} disabled={disabled} padding={padding}>
      <Text>{text}</Text>
    </Button>
  );
};

export default CustomButton;

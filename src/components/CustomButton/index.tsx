import { Button, Text } from "./styles";

interface IProps {
  text: string;
  action: () => void;
}

const CustomButton = ({ text, action }: IProps) => {
  return (
    <Button onPress={action}>
      <Text>{text}</Text>
    </Button>
  );
};

export default CustomButton;

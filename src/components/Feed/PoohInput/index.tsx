import { Alert, Pressable } from "react-native";
import { Input, Label, Wrapper } from "./styles";

interface IProps {
  onClick: () => void;
}

const PoohInput = ({ onClick }: IProps) => {
  return (
    <Wrapper>
      <Pressable onPress={onClick}>
        <Input>
          <Label>Write something...</Label>
        </Input>
      </Pressable>
    </Wrapper>
  );
};

export default PoohInput;

import { useEffect, useState } from "react";
import { Container, Content, Counter, Input, Row, Wrapper } from "./styles";
import { Text } from "react-native";
import { Button } from "../CustomButton/styles";
import CustomButton from "../CustomButton";

interface IProps {
  showModal: boolean;
}

const PoohModal = ({ showModal }: IProps) => {
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(200);

  useEffect(() => {
    setCounter((prev) => prev - text.length);
  }, [text]);

  return (
    <Wrapper visible={showModal} transparent={true}>
      <Container>
        <Content>
          <Input
            multiline={true}
            onChangeText={(newValue) => setText(newValue)}
            textAlignVertical="top"
            value={text}
          ></Input>
          <Row>
            <Counter>{counter} characters left </Counter>
            <CustomButton
              padding="12px 18px"
              text="publish"
              action={() => console.log("oi")}
            ></CustomButton>
          </Row>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default PoohModal;

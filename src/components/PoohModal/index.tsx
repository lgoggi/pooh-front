import { useContext, useEffect, useState } from "react";
import { Container, Content, Counter, Input, Row, Wrapper } from "./styles";
import CustomButton from "../CustomButton";
import { API_URL } from "@env";
import { UserContext } from "../../providers/UserContext";
import { ActivityIndicator } from "react-native";

interface IProps {
  showModal: boolean;
  setShowPoohModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PoohModal = ({ showModal, setShowPoohModal }: IProps) => {
  const { user } = useContext(UserContext);
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(200);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const response = await fetch(`${API_URL}/pooh/publish`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + user?.token,
      },
      body: JSON.stringify({
        text: text,
        authorID: user?.username,
      }),
    });
    if (response.status === 200) {
      setLoading(false);
      setText("");
      setShowPoohModal(false);
    }
  };

  useEffect(() => {
    setCounter((prev) => prev - text.length);
  }, [text]);

  return (
    <Wrapper visible={showModal} transparent={true}>
      <Container>
        {!loading ? (
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
                action={() => handleClick()}
              ></CustomButton>
            </Row>
          </Content>
        ) : (
          <ActivityIndicator></ActivityIndicator>
        )}
      </Container>
    </Wrapper>
  );
};

export default PoohModal;

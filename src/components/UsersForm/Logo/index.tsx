import { Image } from "react-native";
import { Container, Title } from "./styles";

export const Logo = () => {
  return (
    <Container>
      <Image
        source={require("../../../assets/pooh2.png")}
        style={{
          resizeMode: "contain",
          width: "100%",
          height: "100%",
        }}
      ></Image>
      <Title>POOH</Title>
    </Container>
  );
};

import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import { API_URL } from "@env";
import { Input } from "../components/Input";
import styled from "styled-components/native";
import { Logo } from "../components/Logo";
import { View } from "react-native";

//TODO: hidepassword
//TODO: forgot password

function Login(): React.JSX.Element {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const request = await fetch(`${API_URL}/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usernameOrEmail: usernameOrEmail,
        password: password,
      }),
    });
  };

  return (
    <Container>
      <Logo />
      <Section>
        <Input
          value={usernameOrEmail}
          setValue={setUsernameOrEmail}
          label="username or email"
          placeholder="enter your username or email"
        />
        <Input
          isPassword
          value={password}
          setValue={setPassword}
          label="password"
          placeholder="enter your password"
        />
        <CustomButton text="login" action={handleLogin} />
      </Section>
    </Container>
  );
}

const Container = styled.View`
  background-color: ${(props) => props.theme.color.backgroundColor};
  color: #ebebef;
  flex-grow: 1;
  gap: 148px;
  justify-content: center;
  padding: 36px;
`;
const Section = styled.View`
  gap: 24px;
  justify-content: center;
`;

export default Login;

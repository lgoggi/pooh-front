import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { API_URL } from "@env";
import { Input } from "../components/Input";
import { UsersFormContainer } from "../components/UsersForm/UsersFormContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

//TODO: hide/show password
//TODO: forgot password

function Login({
  navigation,
}: NativeStackScreenProps<RootStackParamList>): React.JSX.Element {
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
    <UsersFormContainer redirectLink="Signup" navigation={navigation}>
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
    </UsersFormContainer>
  );
}

export default Login;

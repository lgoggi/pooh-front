import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { API_URL } from "@env";
import { Input } from "../components/Input";
import { UsersFormContainer } from "../components/UsersForm/UsersFormContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import ErrorMessage from "../components/ErrorMessage";

//TODO: hide/show password
//TODO: forgot password

function Login({
  navigation,
}: NativeStackScreenProps<RootStackParamList>): React.JSX.Element {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState<string | boolean>(false);

  const handleLogin = async () => {
    const response = await fetch(`${API_URL}/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usernameOrEmail: usernameOrEmail,
        password: password,
      }),
    });
    if (response.status === 400) {
      let error = await response.text();
      console.log("error: ", error, response.status);
      setMessageError(error);
    } else if (response.status === 403) {
      console.log("error: invalid user or password!", response.status);
      setMessageError("Invalid user or password!");
    } else {
      navigation.navigate("home");
    }
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
      <ErrorMessage error={messageError} />
      <CustomButton text="login" action={handleLogin} />
    </UsersFormContainer>
  );
}

export default Login;

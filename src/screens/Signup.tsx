import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import { API_URL } from "@env";
import { Input } from "../components/Input";
import { UsersFormContainer } from "../components/UsersForm/UsersFormContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import userMask from "../utils/masks/userMask";
import { Text } from "react-native";
import ErrorMessage from "../components/ErrorMessage";

function Signup({
  navigation,
}: NativeStackScreenProps<RootStackParamList>): React.JSX.Element {
  const regexes = {
    username: /^[0-9A-Za-z]{3,16}$/,
    email:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    password: /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/,
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [enableRequest, setEnableRequest] = useState(true);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [messageError, setMessageError] = useState<string | boolean>(false);

  const handleSignup = async () => {
    if (!enableRequest) {
      return;
    }
    setMessageError(false);
    try {
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      if (response.status !== 200) {
        let error = await response.text();
        console.log("error: ", error);
        setMessageError(error);
      } else {
        navigation.navigate("login");
      }
    } catch (er) {
      console.log(er);
    }
  };

  const handleInputError = (
    value: string,
    Regex: RegExp,
    setValue: (value: React.SetStateAction<boolean>) => void
  ) => {
    const regex = Regex;
    if (!regex.test(value)) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  const handleConfirmPasswordError = (value: string, secondValue: string) => {
    if (value === secondValue) {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(true);
    }
  };

  useEffect(() => {
    handleConfirmPasswordError(password, confirmPassword);
  }, [password, confirmPassword]);

  useEffect(() => {
    const areThereErrors =
      usernameError || emailError || passwordError || confirmPasswordError;
    const areFieldsFilled =
      username.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0;

    if (areThereErrors === false && areFieldsFilled) {
      setEnableRequest(true);
    } else {
      setEnableRequest(false);
    }
  }, [
    username,
    email,
    password,
    confirmPassword,
    usernameError,
    emailError,
    passwordError,
    confirmPasswordError,
  ]);

  return (
    <UsersFormContainer redirectLink="Login" navigation={navigation}>
      <Input
        value={username}
        setValue={setUsername}
        onBlur={() =>
          handleInputError(username, regexes.username, setUsernameError)
        }
        label="username"
        placeholder="enter your username"
        error={usernameError}
      />
      <Input
        value={email}
        setValue={setEmail}
        onBlur={() => handleInputError(email, regexes.email, setEmailError)}
        label="email"
        placeholder="enter your email"
        error={emailError}
      />
      <Input
        isPassword
        value={password}
        setValue={setPassword}
        onBlur={() =>
          handleInputError(password, regexes.password, setPasswordError)
        }
        label="password"
        placeholder="enter your password"
        error={passwordError}
      />
      <Input
        isPassword
        value={confirmPassword}
        setValue={setConfirmPassword}
        label="confirm password"
        placeholder="confirm your password"
        error={confirmPasswordError}
      />
      <ErrorMessage error={messageError} />
      <CustomButton
        text="Sign up"
        action={handleSignup}
        disabled={!enableRequest}
      />
    </UsersFormContainer>
  );
}

export default Signup;

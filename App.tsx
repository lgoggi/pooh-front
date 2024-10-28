import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Login from "./src/screens/Login";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./src/screens/Signup";
import Home from "./src/screens/Home";
import { UserProvider } from "./src/providers/UserContext";

export type RootStackParamList = {
  home: undefined;
  profile: { id: string } | undefined;
  login: undefined;
  signup: undefined;
};

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <UserProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <ThemeProvider theme={theme}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {isLogged ? (
                <Stack.Screen name="home" component={Home} />
              ) : (
                <>
                  <Stack.Screen name="login">
                    {(props) => <Login {...props} setIsLogged={setIsLogged} />}
                  </Stack.Screen>
                  <Stack.Screen name="signup" component={Signup} />
                </>
              )}
            </Stack.Navigator>
          </ThemeProvider>
        </NavigationContainer>
      </SafeAreaView>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;

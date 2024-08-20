import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Login from "./src/screens/Login";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./src/screens/Signup";

export type RootStackParamList = {
  home: undefined;
  login: undefined;
  signup: undefined;
};

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={Signup} />
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;

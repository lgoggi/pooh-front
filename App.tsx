import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Login from './src/screens/Login';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/styles/theme';



function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Login />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default App;

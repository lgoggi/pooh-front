import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Login from './src/screens/Login';



function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1D2B',
    flex: 1,
    padding: 36,
    justifyContent: 'center'
  },
});

export default App;

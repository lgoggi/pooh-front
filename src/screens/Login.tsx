
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from '../components/Input';
import  CustomButton  from '../components/CustomButton';
import {API_URL} from '@env'


//TODO: hidepassword
//TODO: forgot password




function Login(): React.JSX.Element {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =  async () => {
    const request = await fetch(`${API_URL}/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usernameOrEmail: usernameOrEmail,
        password: password
      })
    })
  }

  return (
  <View style={styles.container}>
    <Input value={usernameOrEmail} setValue={setUsernameOrEmail} label='username or email' placeholder='enter your username or email' />
    <Input isPassword value={password} setValue={setPassword} label='password' placeholder='enter your password' />
    <CustomButton  text='login' action={handleLogin}/>
  </View>

  );
}
const styles = StyleSheet.create({
  container: {
    gap: 24
  },

});

export default Login;

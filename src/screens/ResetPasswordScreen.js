import React from 'react';
import {View, Alert, TouchableOpacity, ScrollView, Text, TextInput} from 'react-native';
import styles from '../styles/ResetPasswordStyles.js';
import auth from "@react-native-firebase/auth"

const ResetPasswordScreen = () => {
  const [email, setEmail] = React.useState('');

  const forgetPassword = () => {
    if (email === '') {
      Alert.alert('Please enter your email address');
      return;
    }
    
      auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Password reset email sent!');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Reset Password</Text>

      <TextInput
        label="Email Address"
        placeholder="Enter Your Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
      />

      <TouchableOpacity
        onPress={forgetPassword}
        style={styles.button}>
        <Text style={styles.buttonText}>Send Reset Email</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ResetPasswordScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from '../styles/ChangePasswordStyles.js'; 

const ChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = async () => {
    const user = auth().currentUser;

    if (!user?.email) return Alert.alert('User not logged in.');

    if (newPassword !== confirmPassword) {
      return Alert.alert("New passwords don't match.");
    }

    try {
      // Re-authenticate
      const credential = auth.EmailAuthProvider.credential(
        user.email,
        oldPassword,
      );
      await user.reauthenticateWithCredential(credential);

      // Update password
      await user.updatePassword(newPassword);

      Alert.alert('Password updated successfully');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message || 'Something went wrong');
    }
  };
    
  /* const forgotPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter email');
      return;
    }
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Password reset email sent');
      })
      .catch(err => {
        Alert.alert('Error', err.message);
      });
  } */

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Change Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Current Password"
          secureTextEntry
          value={oldPassword}
          onChangeText={setOldPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Save Password</Text>
        </TouchableOpacity>

        <Pressable
          //onPress={forgotPassword}
          style={({pressed}) => [styles.forgotPw, pressed && styles.pressed]}>
          <Text style={styles.forgotPwText}>
            {
              '\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003'
            }
            Forgot Password?
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;

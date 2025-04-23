import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import styles from '../styles/SignUpStyles.js';
//import {auth, createUserWithEmailAndPassword} from '../firebaseConfig.js';
import auth from '@react-native-firebase/auth';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {addUser} from '../api/userRoutes.js';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSignUp = async () => {
    // navigation.navigate('TabNavigator');
    if (
      name === '' ||
      email === '' ||
      date_of_birth === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      alert('All fields are required!');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async response => {
        const user = response.user;
        const newUserData = {
          email: user.email,
          name:
            user.name ||
            user.displayName ||
            user.email.split('@')[0] ||
            'No Name',
          date_of_birth: new Date(),
          firebaseUid: user.uid,
          authProvider: 'email',
        };
        await addUser(newUserData);
        navigation.navigate('TabNavigator');
      })
      .catch(error => {
        console.log('Login error:', error.code);
        if (error.code === 'auth/network-request-failed') {
          Alert.alert(
            'Network Error',
            'Please check your internet connection.',
          );
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Invalid Email', 'The email format is incorrect.');
        } else if (error.code === 'auth/user-disabled') {
          Alert.alert('Account Disabled', 'This account has been disabled.');
        } else if (error.code === 'auth/invalid-credential') {
          Alert.alert('Login Failed', 'Invalid email or password.');
        } else if (error.code === 'auth/too-many-requests') {
          Alert.alert('Too Many Attempts', 'Try again later.');
        } else {
          Alert.alert('Login Failed', error.message);
        }
      });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate_of_birth(selectedDate.toISOString().split('T')[0]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.dateInput}>
        <Text>{date_of_birth || `Select date`}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date_of_birth ? new Date(date_of_birth) : new Date()}
          maximumDate={new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text
        style={styles.signInText}
        onPress={() => navigation.navigate('SignInScreen')}>
        Already have an account? <Text style={styles.signInLink}>Sign In</Text>
      </Text>
      <Text
        style={styles.signInText}
        onPress={() => navigation.navigate('ResetPasswordScreen')}>
        Forgot Password? <Text style={styles.signInLink}>Reset Password</Text>
      </Text>
    </ScrollView>
  );
};

export default SignUpScreen;

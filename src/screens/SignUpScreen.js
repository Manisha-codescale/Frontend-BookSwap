import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import styles from '../styles/SignUpStyles.js';
//import {auth, createUserWithEmailAndPassword} from '../firebaseConfig.js';
import auth from '@react-native-firebase/auth';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
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
      .then(() => {
        console.log('User account created & signed in!');
        alert('User account created & signed in!');
      })
      .catch(error => {
        alert(error.message);
      });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false); // Close the picker
    if (selectedDate) {
      setDate_of_birth(selectedDate.toISOString().split('T')[0]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="User Name"
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
          value={date_of_birth ? new Date(date_of_birth) : new Date()} // Default to selected date or today
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

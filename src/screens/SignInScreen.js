import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GOOGLE_WEB_CLIENT_ID} from '@env';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/SignInStyles.js';
import { addUser } from '../api/userRoutes';

GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
});

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isInProgress, setIsInProgress] = useState(false);

  const onLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async response => {
        const user = response.user;
        const newUserData = {
          email: user.email,
          name: user.displayName || user.email.split('@')[0] || 'No Name',
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
        Alert.alert('Network Error', 'Please check your internet connection.');
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
  
  const onGoogleSignIn = async () => {
    await GoogleSignin.hasPlayServices();
    const signInResult = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(signInResult.idToken);
    const response = await auth().signInWithCredential(googleCredential);
    const user = response.user;
  
    const newUserData = {
      email: user.email,
      name: user.displayName,
      date_of_birth: new Date(), 
      firebaseUid: user.uid,
      authProvider: 'google',
    };
  
    await addUser(newUserData);
  };

  const forgotPassword = async () => {
    if (!email) {
      Alert.alert('Missing Email', 'Please enter your email to reset password.');
      return;
    }
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Success', 'Password reset email sent.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const onGoogleButtonPress = async () => {
    setIsInProgress(true);
    try {
      await onGoogleSignIn();
      console.log('Signed in with Google');
      navigation.navigate('TabNavigator');
    } catch (err) {
      console.log('Google sign-in error:', err.message);
      Alert.alert('Google Sign-In Error', err.message);
    } finally {
      setIsInProgress(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Signin}>Sign In</Text>

      <TextInput
        placeholder="Email"
        style={styles.inputBox}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.inputBox}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable onPress={forgotPassword} style={({pressed}) => [styles.forgotPw, pressed && styles.pressed]}>
        <Text style={styles.forgotPwText}>Forgot Password?</Text>
      </Pressable>

      <TouchableOpacity style={styles.signIn} onPress={onLogin}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.signInText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleContent} onPress={onGoogleButtonPress} disabled={isInProgress}>
        <View style={styles.rowView}>
          <Image source={require('../assets/googleLogo.png')} style={styles.googleLogo} />
          <Text style={styles.signInText}>
            {isInProgress ? 'Signing in...' : 'Sign in with Google'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

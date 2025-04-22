import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Pressable,
  Button,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import auth, {sendPasswordResetEmail} from '@react-native-firebase/auth';
import styles from '../styles/SignInStyles.js';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
//import {GOOGLE_WEB_CLIENT_ID} from '@env';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';

//const GOOGLE_WEB_CLIENT_ID=`212138581207-io75bs1fco12t8r9fso7rb73juhjq5ba.apps.googleusercontent.com`

GoogleSignin.configure({
  webClientId: `212138581207-io75bs1fco12t8r9fso7rb73juhjq5ba.apps.googleusercontent.com`,
});

const SignInScreen = () => {
  const navigation = useNavigation();
  const [isInProgress, setIsInProgress] = useState(false);

  const onGoogleButtonPress = async () => {
    setIsInProgress(true);
    try {
      await onGoogleSignIn();
      console.log('Signed in with Google!');
      navigation.navigate('TabNavigator');
    } catch (err) {
      console.log('Google sign-in error!');
      Alert.alert('Error ', err.message);
    } finally {
      setIsInProgress(false);
    }
  };

  //async function onGoogleButtonPress() {
  const onGoogleSignIn = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const signInResult = await GoogleSignin.signIn();
    let idToken = signInResult.data?.idToken;
    if (!idToken) {
      idToken = signInResult.idToken;
    }
    if (!idToken) {
      throw new Error('No ID token found');
    }

    const googleCredential = auth.GoogleAuthProvider.credential(
      signInResult.data.idToken,
    );
    return auth().signInWithCredential(googleCredential);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('User login successful', response);
        navigation.navigate('TabNavigator');
      })
      .catch(error => {
        console.log('Firebase error :', error);
        switch (error.code) {
          case 'auth/invalid-email':
            Alert.alert('Error', 'Invalid email format');
            break;
          case 'auth/invalid-credential':
            Alert.alert('Error', 'Credentials are invalid');
            break;
          case 'auth/user-disabled':
            Alert.alert('Error', 'This account has been disabled');
            break;
          case 'auth/too-many-requests':
            Alert.alert('Error', 'Too many failed attempts. Try again later');
            break;
          default:
            Alert.alert(
              'Error',
              `${error.code}`,
              'Failed to Sign In' || error.message,
            );
        }
      });
  };

  const forgotPassword = () => {
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
  };
  return (
    <View style={styles.container}>
      <Text style={styles.Signin}>Sign In</Text>
      <TextInput
        placeholder="Email"
        style={styles.inputBox}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Password"
        style={styles.inputBox}
        secureTextEntry
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <Pressable
        onPress={forgotPassword}
        style={({pressed}) => [styles.forgotPw, pressed && styles.pressed]}>
        <Text style={styles.forgotPwText}>
          {
            '\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003'
          }
          Forgot Password?
        </Text>
      </Pressable>
      <TouchableOpacity style={styles.signIn} onPress={onLogin}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signIn}
        onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.signInText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.googleContent}
        onPress={onGoogleButtonPress}
        /* setIsInProgress(true);
          try {
            await onGoogleButtonPress();
            console.log('Signed in with Google!');
          } catch (err) {
            console.log('Google sign-in error!');
            Alert.alert('Error ', err.message);
          } finally {
            setIsInProgress(false);
          }
        }} */

        disabled={isInProgress}>
        <View style={styles.rowView}>
          <Image
            source={require('../assets/googleLogo.png')}
            style={styles.googleLogo}
          />
          <Text style={styles.signInText}>
            {' '}
            {isInProgress ? 'Signing in...' : 'Sign in with Google'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SignInScreen;

import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import SignInScreen from './src/screens/SignInScreen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View>
      <Text>Welcome to the App</Text>
    </View>
  );
};

export default App;

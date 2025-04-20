import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardScreen from './src/screens/DashBoardScreen';
import AddedBooksScreen from './src/screens/AddedBooksScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="DashBoardScreen"
          component={DashBoardScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="AddedBooksScreen"
          component={AddedBooksScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} options={{headerShown: false}} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

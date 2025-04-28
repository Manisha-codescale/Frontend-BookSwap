import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardScreen from './src/screens/DashBoardScreen';
import AddedBooksScreen from './src/screens/AddedBooksScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import BookScreen from './src/screens/BookScreen';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen';
import EditBookScreen from './src/screens/EditBookScreen';
import AddBookScreen from './src/screens/AddBookScreen';
import ThreadScreen from './src/screens/ThreadScreen';
import {UserProvider} from './src/context/UserContext';
import ChatRoomsScreen from './src/screens/ChatRoomsScreen';
//import AddedBookScreen from './src/screens/AddedBookScreen';
import {useDispatch} from 'react-redux';
import {setUid, clearUid, setToken, clearToken} from './src/app/userSlice';
import auth from '@react-native-firebase/auth';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      if (user) {
        dispatch(setUid(user.uid));
        const token = await user.getIdToken(true);
        console.log('Firebase Token:', token);
        dispatch(setToken(token));
      } else {
        dispatch(clearUid());
        dispatch(clearToken());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'DashBoardScreen') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'AddedBooksScreen') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'ChatRoomsScreen') {
              iconName = focused ? 'chat' : 'chat-outline';
            } else if (route.name === 'ProfileScreen') {
              iconName = focused ? 'account' : 'account-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
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
          name="ChatRoomsScreen"
          component={ChatRoomsScreen}
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
    // <UserProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookScreen"
          component={BookScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditBookScreen"
          component={EditBookScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddBookScreen"
          component={AddBookScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ThreadScreen"
          component={ThreadScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChatRoomsScreen"
          component={ChatRoomsScreen}
          option={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </UserProvider>
  );
};

export default App;

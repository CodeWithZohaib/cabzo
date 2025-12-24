import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './android/app/src/main/screens/SignupScreen';
import LoginScreen from './android/app/src/main/screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
// import MyRideScreen from './screens/MyRideScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Signup"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="MyRide" component={MyRideScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

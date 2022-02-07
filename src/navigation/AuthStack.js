import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignupScreen from '../screens/SignUpScreen/SignupScreen';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen name="Signup" component={SignupScreen}
            options={{headerShown: false}} 
        />
    </Stack.Navigator>
  );
};

export default AuthStack;

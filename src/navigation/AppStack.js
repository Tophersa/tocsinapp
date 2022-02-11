import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colours } from '../utilities/Colours';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Home from '../screens/Home/Home';
import OnboardingScreen from '../screens/OnBoarding/OnBoardingScreen';
import HomeTabNavigator from './HomeTabNavigator';
import AddPostScreen from '../screens/AddPostScreen/AddPostScreen'

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (

      <Stack.Navigator>
        <Stack.Screen name="HomeTabNavigator" component={HomeTabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="AddPostScreen" component={AddPostScreen} />
    </Stack.Navigator>

  );
};

export default AppStack;

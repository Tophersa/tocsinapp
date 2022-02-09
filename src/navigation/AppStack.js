import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colours } from '../utilities/Colours';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Home from '../screens/Home/Home';
import OnboardingScreen from '../screens/OnBoarding/OnBoardingScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}
            options={{headerShown: false}}
        />
    </Stack.Navigator>

  );
};

export default AppStack;

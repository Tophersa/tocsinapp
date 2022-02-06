import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colours } from '../utilities/Colours';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Home from '../screens/Home/Home';
import OnboardingScreen from '../screens/OnBoarding/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignupScreen from '../screens/SignUpScreen/SignupScreen';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}
            options={{ title: '',  headerShown: false, headerTintColor: 'white'}}
        
        /> */}
        <Stack.Screen name="LoginScreen" component={LoginScreen}
            options={{ title: '',  headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Signup" component={SignupScreen}
            //options={{ title: '',  headerShown: false}}
            options={{ title: '', headerTintColor: '#333', headerShown: false,
            headerStyle: {
              backgroundColor: Colours.SECONDARY,
              shadowColor: Colours.SECONDARY,
              elevation: 0,
            },
          headerLeft: ()=>{
            <View style={{marginLeft: 10}}>
            <Entypo.Button name="arrow-bold-left" 
            size={25}
            backgroundColor= {Colours.SECONDARY}
            color= "#333"
            onPress={()=> navigation.navigate('LoginScreen')}
            />
            </View>
          }
          }}
        />

    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

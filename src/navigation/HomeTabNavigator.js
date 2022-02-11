import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Colours} from '../utilities/Colours'

//Screens
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import PostScreen from '../screens/PostScreen/PostScreen';
import ReportScreen from '../screens/ReportScreen/ReportScreen';

//Icons
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottonTabOptions = {
  "tabBarHideOnKeyboard": true,
  "tabBarActiveTintColor": Colours.WHITE,
  "tabBarInactiveTintColor": Colours.WHITE,
  "tabBarShowLabel": true,
  "tabBarLabelPosition": "beside-icon",
  "tabBarStyle": [
    {
      "display": "flex",
      "backgroundColor": Colours.PRIMARY,
      "borderTopColor": Colours.PRIMARY,
      padding: 15,
      paddingBottom: 20,
      margin: 5,
      borderRadius: 15,
      height: 70,
      alignItems: "center",
      justifyContent: "center",
      position: 'absolute'
    },
    null
  ],
  tabBarLabelStyle: { fontWeight: '700'},
}

// const focusedColor = '#2B325D'
const focusedColor = 'red'

const Tab = createBottomTabNavigator();


const HomeTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={BottonTabOptions}>
          <Tab.Screen name="Home" component={Home}
              options={{tabBarIcon: ({color, focused}) =>(
                <Ionicons name="home" size={30} color={focused?focusedColor:color} />    
              ), headerShown: false}}
          />
          <Tab.Screen name="Alerts" component={PostScreen} 
              options={{tabBarIcon: ({color, focused}) =>(
                <MaterialCommunityIcons name="alarm-light" color={focused?focusedColor:color} size={30}/>  
              ),headerShown: false}}    
          />
          <Tab.Screen name="Report" component={ReportScreen} 
              options={{tabBarIcon: ({color, focused}) =>(
                <Entypo name="location" color={focused?focusedColor:color} size={30}/>  
              ),headerShown: false}}    
          />
          <Tab.Screen name="Profile" component={Profile} 
              options={{tabBarIcon: ({color, focused}) =>(
                <Icon name="user" size={30} color={focused?focusedColor:color} />  
              ),headerShown: false}}    
          />
        </Tab.Navigator>
      );
};

export default HomeTabNavigator;

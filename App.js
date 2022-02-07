import React from 'react';
import type {Node} from 'react';
import Home from './src/screens/Home/Home';
import Router from './src/navigation/Router';
import  Providers  from './src/navigation/index'

import {SafeAreaView,StyleSheet,Text,View,} from 'react-native';


const App: () => Node = () => {
  
  return (
    <>
      <Home/>
      {/* <Text>ffffff</Text> */}
      {/* <Router/> */}
    </>
     
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;

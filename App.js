import React from 'react';
import type {Node} from 'react';

import Router from './src/navigation/Router';


import {SafeAreaView,StyleSheet,Text,View,} from 'react-native';


const App: () => Node = () => {
  
  return (
    <>
      <Router/>
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

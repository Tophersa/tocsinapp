import { View, Text } from 'react-native';
import React from 'react';
import Router from './Router';
import {AuthProvider} from './AuthProvider';


const Providers = () => {
  return (

      <AuthProvider>
          <Router/>
      </AuthProvider>

  );
};

export default Providers;

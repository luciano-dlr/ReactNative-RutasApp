import React from 'react'
import { Text, View } from 'react-native'
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

export const App = () => {
  return (
    
    <NavigationContainer>

      <Navigation/>

    </NavigationContainer>
      
      
    
  )
}



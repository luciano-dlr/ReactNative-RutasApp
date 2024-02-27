import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { PermissionsProvider } from './src/context/PermissionsContext';


const AppState = ({ children }: any) => {

  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )

}

export const App = () => {
  return (

    <NavigationContainer>

      <AppState>

        <Navigation />

      </AppState>

    </NavigationContainer>

  )
}
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Register } from './pages/cadastro/register.page';
import { Success } from './pages/success/success.page';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen 
          name="Success" 
          component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



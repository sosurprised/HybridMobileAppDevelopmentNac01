import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './screens/login/login.screen';
import { Register } from './screens/cadastro/register.screen';
import { Success } from './screens/success/success.screen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
            name="Login"
            component={Login}
          />
        <Stack.Screen
          name="Cadastro"
          component={Register}
        />
        <Stack.Screen 
          name="Success" 
          component={Success} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}



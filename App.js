import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Dimensions } from 'react-native';
import { Login } from './screens/login/login.screen';
import { Register } from './screens/cadastro/register.screen';
import { Success } from './screens/success/success.screen';
import { Menu } from './screens/menu/menu.screen';
import { ShareExperienceForm } from './screens/share-experience-form/share-experience-form.screen';
import { Profile } from './screens/profile/profile';
import { Start } from './screens/start/start.screen';

//const Drawer = createDrawerNavigator();

//const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>

      <Start />
  //     <Stack.Navigator initialRouteName="Login">
  //       <Stack.Screen
  //           name="Login"
  //           component={Login}
  //         />
  //       <Stack.Screen
  //         name="Cadastro"
  //         component={Register}
  //       />
  //       <Stack.Screen 
  //         name="Success" 
  //         component={Success} />
  //     </Stack.Navigator> 
  //      <Drawer.Navigator>
  //       <Drawer.Screen name="Home" component={HomeScreen} />
  //       <Drawer.Screen name="Notifications" component={NotificationsScreen} />
  //     </Drawer.Navigator> 
  //  </NavigationContainer> 

  );
}

export const width = Dimensions.get('screen').width*0.8;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1788A6',
    alignItems: 'center',
  },
  containerLeft: {
    backgroundColor: '#1788A6',
  },
  text: {
      color: 'white',
      fontWeight: "400",
      fontSize: 20,
      marginHorizontal: 20,
      textAlign: "center",
  } 
});


import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createSwitchNavigator } from 'react-navigation';
import { StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Menu } from './screens/menu/menu.screen';
import StackExperiencesScreen from './navigation/stack-experiences';
import StackArticlesScreen from './navigation/stack-articles';
import StackProfileScreen from './navigation/stack-profile';
import StackShareExperienceScreen from './navigation/stack-share-experience';
import StackRegisterScreen from './navigation/stack-login';
import AuthContextProvider from './context/auth-context';
import { Contact } from './screens/contact/contact.screen';
import StackContactScreen from './navigation/stack-contact';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
           screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName; 
              let label;
              if (route.name === 'ListingExperiences') {
                iconName = 'ios-albums';
              } else if (route.name === 'ListingArticles') {
                iconName = 'ios-filing';
              }
              else if (route.name === 'Profile') {
                iconName = 'ios-person';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#1788A6',
            inactiveTintColor: 'gray',
          }}>
            <Tab.Screen 
              name="ListingExperiences" 
              component={StackExperiencesScreen} 
              options={{tabBarLabel: 'Relatos'}}/>
            <Tab.Screen 
              name="ListingArticles" 
              component={StackArticlesScreen}  
              options={{tabBarLabel: 'Artigos'}}/>
            <Tab.Screen name="Profile" 
              component={StackProfileScreen}  
              options={{tabBarLabel: 'Perfil'}}/>
          </Tab.Navigator>
  );
}

function DrawerScreens () {
  return(

      <Drawer.Navigator >
          <Drawer.Screen name="Inicio" component={Tabs} />
          <Drawer.Screen name="Compartilhe experiência" component={StackShareExperienceScreen} />
          <Drawer.Screen name="Fale Conosco" component={StackContactScreen} />
      </Drawer.Navigator>

  );
}

export const AuthContext = React.createContext({
  isAuth: true,
});

const MainComponent = () => {
  const authContext = useContext(AuthContext);

  return(<AuthContextProvider><NavigationContainer>{authContext.isAuth ? <DrawerScreens /> : <StackRegisterScreen />}</NavigationContainer></AuthContextProvider>);
} 

export default function App() {
  return (
      <MainComponent />       
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
    paddingTop: 30,
  },
  text: {
      color: 'white',
      fontWeight: "400",
      fontSize: 20,
      marginHorizontal: 20,
      textAlign: "center",
  } 
});


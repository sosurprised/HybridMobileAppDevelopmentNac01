import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Dimensions } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Icon from 'react-native-ionicons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Login } from './screens/login/login.screen';
import { Register } from './screens/cadastro/register.screen';
import { Success } from './screens/success/success.screen';
import { Menu } from './screens/menu/menu.screen';
import { ShareExperienceForm } from './screens/share-experience-form/share-experience-form.screen';
import { Profile } from './screens/profile/profile';
import { Start } from './screens/start/start.screen';
import { ListingExperiences } from './screens/listings/listing-experiences';
import Article from './models/article';
import { Reading } from './screens/reading/reading.screen';
import { ListingArticles } from './screens/listings/listing-articles';
import { CustomHeaderButton } from './components/buttons/header-button/header-button';

const Drawer = createDrawerNavigator();

const StackArticles = createStackNavigator();
const StackExperiences = createStackNavigator();
const StackProfile = createStackNavigator();
const StackLoginRegister = createStackNavigator();
const StackShareExperience = createStackNavigator();

const Tab = createBottomTabNavigator();

function StackExperiencesScreen(props) {
  return (
      <StackExperiences.Navigator initialRouteName="ListingExperiences"> 
        <StackExperiences.Screen
          name="ListingExperiences"
          component={ListingExperiences}
          options= {({ navigation }) => ({
            headerTitle: "Relatos",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                  title='Menu' 
                  iconName='ios-menu'
                  onPress={() => { navigation.toggleDrawer() }}/>
            </HeaderButtons>
            )
          }
          )}
        />
        <StackExperiences.Screen 
          name="Reading" 
          component={Reading}
          options={{
            headerTitle: ""
          }} />
      </StackExperiences.Navigator> 
  );
}

function StackArticlesScreen() {
  return (
    <StackArticles.Navigator initialRouteName="ListingArticles"> 
      <StackArticles.Screen 
        name="Reading" 
        component={Reading} 
        options={{
          headerTitle: ""
        }}
        />
      <StackArticles.Screen 
        name="ListingArticles" 
        component={ListingArticles} 
        options={{
          headerTitle: "Artigos"
        }}/>
   </StackArticles.Navigator> 
  );
}

function StackShareExperienceScreen() {
  return (
    <StackShareExperience.Navigator> 
      <StackShareExperience.Screen 
        name="ShareExperienceForm" 
        component={ShareExperienceForm} 
        options= {({ navigation }) => ({
          headerTitle: "",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item 
                title='Menu' 
                iconName='ios-menu'
                onPress={() => { navigation.toggleDrawer() }}/>
          </HeaderButtons>
          )
        }
        )}
        />
   </StackShareExperience.Navigator> 
  );
}

function StackProfileScreen() {
  return (
    <StackProfile.Navigator> 
      <StackProfile.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: "Seu perfil"
        }}
      />
   </StackProfile.Navigator> 
  );
}

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

function DrawerMenuScreen() {
  return (
    <Drawer.Navigator initialRouteName="Menu">
          <Drawer.Screen name="Tabs" component={Tabs} />
          <Drawer.Screen name="Menu" component={Menu} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
     <NavigationContainer>
       {/* <StackLoginRegister.Navigator initialRouteName="Login" screenOptions={{
       headerStyle: {
          backgroundColor: '#1788A6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
          <StackLoginRegister.Screen
            name="Login"
            component={Login}
          />
          <StackLoginRegister.Screen
            name="Cadastro"
            component={Register}
          />
        </StackLoginRegister.Navigator> */}
        {/* <Stack.Screen
            name="Menu"
            component={Menu}
          /> */}
      
          <Drawer.Navigator >
            <Drawer.Screen name="Home" component={Tabs} />
            <Drawer.Screen name="Menu" component={Menu} />
            <Drawer.Screen name="Experiences" component={StackShareExperienceScreen} />
           </Drawer.Navigator>
          
       </NavigationContainer> 
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


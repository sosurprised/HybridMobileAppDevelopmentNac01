
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/buttons/header-button/header-button';
import { Profile } from '../screens/profile/profile';

const StackProfile = createStackNavigator();

function StackProfileScreen() {
    return (
      <StackProfile.Navigator> 
        <StackProfile.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitle: "Seu perfil",
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item 
                    title='Menu' 
                    iconName='ios-menu'
                    onPress={() => { navigation.toggleDrawer() }}/>
              </HeaderButtons>
              )
          }}
        />
     </StackProfile.Navigator> 
    );
  }
  
  export default StackProfileScreen;
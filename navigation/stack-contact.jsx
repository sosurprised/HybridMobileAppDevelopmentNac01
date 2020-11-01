
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/buttons/header-button/header-button';
import Contact from '../screens/contact/contact.screen';

const StackProfile = createStackNavigator();

function StackContactScreen({navigation}) {
    return (
      <StackProfile.Navigator> 
        <StackProfile.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitle: "",
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
  
  export default StackContactScreen;
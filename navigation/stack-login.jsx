import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Register } from '../screens/cadastro/register.screen';
import CustomHeaderButton from '../components/buttons/header-button/header-button';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const StackRegister = createStackNavigator();

function StackRegisterScreen({navigation}) {
    return (
      <StackRegister.Navigator> 
        <StackRegister.Screen
            name="Cadastro"
            component={Register}
            options={{
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                      <Item 
                        title='Menu' 
                        iconName='ios-menu'
                        onPress={() => { navigation.toggleDrawer() }}/>
                  </HeaderButtons>
                  )}}
        />
     </StackRegister.Navigator> 
    );
  }

  export default StackRegisterScreen;

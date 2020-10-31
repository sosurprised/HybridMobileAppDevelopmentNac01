import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Register } from '../screens/cadastro/register.screen';
import CustomHeaderButton from '../components/buttons/header-button/header-button';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Success } from '../screens/success/success.screen';
import { Login } from '../screens/login/login.screen';

const StackRegister = createStackNavigator();

function StackRegisterScreen({navigation}) {
    return (
      <StackRegister.Navigator initialRouteName='Login'> 
        <StackRegister.Screen
            name="Cadastro"
            component={Register}
        />
         <StackRegister.Screen
            name="Login"
            component={Login}
        />
         <StackRegister.Screen
            name="Success"
            component={Success}
            options={{
                headerTitle: "Cadastro efetuado!",
            }}
        />
     </StackRegister.Navigator> 
    );
  }

  export default StackRegisterScreen;

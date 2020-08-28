import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './login.screen.style';
import { globalStyles } from '../../App';
import { useNavigation } from '@react-navigation/native';
import { FormInput } from "../../components/text-input/text-input";
import { PrimaryButton } from '../../components/buttons/primary-button/primary-button';

export function Login({props}) {
    const navigation = useNavigation();
    return(
        <View style={ globalStyles.container }>
            <View>
                <FormInput label="Email" 
                />          
            </View>
            <View>
                <FormInput label="Senha" 
                 />          
            </View>  
            <View style={ styles.button }>
                <PrimaryButton title="Login" />
            </View>
            <View>
                <Text style={ globalStyles.text }>Ainda não tem cadastro?</Text>
            </View>
            <View style={ styles.button } >
                <PrimaryButton title="Cadastrar-se" onPress={ () => navigation.navigate('Cadastro') } />
            </View>
        </View>
);
}
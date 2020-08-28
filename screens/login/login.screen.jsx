import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './login.screen.style';
import { useNavigation } from '@react-navigation/native';
import { FormInput } from "../../components/text-input/text-input";
import { PrimaryButton } from '../../components/buttons/primary-button/primary-button';

export function Login({props}) {
    const navigation = useNavigation();
    return(
        <View style={ styles.container }>
            <View>
                <FormInput label="Email" 
                // value={inputName} 
                // onChangeInput={(text) => setInputName(text) } 
                />          
            </View>
            <View>
                <FormInput label="Senha" 
                // value={inputSurname} 
                // onChangeInput={(text) => setInputsurname(text)}
                 />          
            </View>  
            <View style={ styles.button }>
                <PrimaryButton title="Login" />
            </View>
            <View>
                <Text style={ styles.text }>Ainda não tem cadastro?</Text>
            </View>
        <View style={ styles.button } >
            <PrimaryButton title="Cadastrar-se" onPress={ () => navigation.navigate('Cadastro') } />
        </View>
    </View>
);
}
//Matheus to-do inputs do cadastro
import React from 'react';
import { View, Text } from 'react-native'
import { styles } from "./cadastro.page.style";
import { FormInput } from "../../components/text-input/text-input";
import { PrimaryButton } from '../../components/buttons/primary-button/primary-button';

export function Cadastro(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <View>
                <FormInput label="Nome"/>          
            </View>
            <View>
                <FormInput label="Sobrenome"/>          
            </View>
            <View>
                <FormInput label="Data de nascimento"/>          
            </View>
            <View>
                <FormInput label="CFM/CRM/COREN"/>          
            </View>
            <View>
                <FormInput label="Ano da formação"/>        
            </View>
            <View>
                <FormInput label="Especialização"/>          
            </View>
            <PrimaryButton title="Prosseguir"/>
        </View>
    );
}
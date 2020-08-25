import React from 'react';
import { View, Text, Image } from 'react-native';
import { Check } from '../../assets/images/Images';

export function Success(props) {
    return (
        <View>
            <Image source={Check}></Image>
            <Text>Cadastro efetuado com sucesso!</Text> 
        </View>
    );
}
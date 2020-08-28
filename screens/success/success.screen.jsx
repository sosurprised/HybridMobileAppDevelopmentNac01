import React from 'react';
import { View, Text, Image } from 'react-native';
import { SuccessImage } from '../../assets/images/Images';
import { styles } from './success.screen.style';

export function Success(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={SuccessImage}></Image>
            <Text style={styles.text}>Cadastro efetuado com sucesso!</Text> 
        </View>
    );
}
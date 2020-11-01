import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { SuccessImage } from '../../assets/images/Images';
import { PrimaryButton } from '../../components/buttons/primary-button/primary-button';
import { Typography } from '../../components/typography/typography';
import { typographyStyles } from '../../components/typography/typography.styles';
import { styles } from './success.screen.style';

export function Success(props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={SuccessImage}></Image>
            <View style={styles.text}>
                <Typography style={typographyStyles.white28}>Cadastro efetuado com sucesso!</Typography> 
            </View>
            <View> style={styles.button}
                <PrimaryButton text="Fazer login" onPress={() => {navigation.navigate("Login")}}/>
            </View>
        </View>
    );
}
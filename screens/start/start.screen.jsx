import React from 'react';
import { View, Image } from 'react-native';
import { globalStyles } from '../../App';
import { useNavigation } from '@react-navigation/native';
import { typographyStyles } from '../../components/typography/typography.styles';
import { Typography } from '../../components/typography/typography';
import { styles } from './start.screen.style';
import { StartPage } from '../../assets/images/Images';

export function Start({props}) {
    //const navigation = useNavigation();
    return(
        <View style={globalStyles.container}>
            <Typography text="dáVida" style={typographyStyles.white42} />    
            <Image source={StartPage} style={styles.imag} />                    
        </View> 
        
    )};
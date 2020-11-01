import React from 'react';
import { View, Image } from 'react-native';
import { globalStyles } from '../../App';
import { useNavigation } from '@react-navigation/native';
import { typographyStyles } from '../../components/typography/typography.styles';
import { Typography } from '../../components/typography/typography';
import { styles } from './contact.screen.style';
import { StartPage } from '../../assets/images/Images';

export function Contact({props}) {
    //const navigation = useNavigation();
    return(
        <View style={globalStyles.container}>
                 <View style={styles.title}>
                    <Typography text="dáVida" style={typographyStyles.white42} />  
                </View>  
                <Typography text=" Precisa de ajuda? Fale com a gente!" style={typographyStyles.white18} /> 
                <Typography text="contato@davida.com.br" style={typographyStyles.white18} /> 
                <Typography text="(11) 1111 - 1111" style={typographyStyles.white18} /> 
                <Image source={StartPage} style={styles.img} />                           
        </View> 
        
    )};

export default Contact;
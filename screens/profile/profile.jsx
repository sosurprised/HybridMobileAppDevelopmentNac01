import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../../App';
import { useNavigation } from '@react-navigation/native';
import { typographyStyles } from '../../components/typography/typography.styles';
import { Typography } from '../../components/typography/typography';
import { styles } from '../profile/profile.style';

export function Profile({props}) {
    //const navigation = useNavigation();
    return(
            <View style={globalStyles.container}>
                <Typography text="Seu perfil" style={typographyStyles.white24}/>     
                <View style={globalStyles.containerLeft}> 
                    <View style={styles.textGroup}>
                        <Typography text="Nome:" style={typographyStyles.white12}/>   
                        <Typography text="Maria da Silva" style={typographyStyles.white18}/>  
                    </View>  
                    <View style={styles.textGroup}>   
                        <Typography text="Especialização:" style={typographyStyles.white12}/>
                        <Typography text="Cirurgia" style={typographyStyles.white18}/>
                    </View>        
                    <View style={styles.textGroup}>      
                        <Typography text="E-mail:" style={typographyStyles.white12}/>     
                        <Typography text="mariadasilva@fiap.com.br" style={typographyStyles.white18}/>   
                    </View>
                    <View style={styles.textGroup}>
                        <Typography text="UF:" style={typographyStyles.white12}/>     
                        <Typography text="SP" style={typographyStyles.white18}/>   
                    </View>
                    <View style={styles.textGroup}>
                        <Typography text="Cidade:" style={typographyStyles.white12}/>     
                        <Typography text="São Paulo" style={typographyStyles.white18}/> 
                    </View>
                </View>
            </View>        
    )};
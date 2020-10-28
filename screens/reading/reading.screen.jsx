import React from 'react';
import { View, WebView } from 'react-native';
import { Typography } from '../../components/typography/typography';
import { typographyStyles } from '../../components/typography/typography.styles';
import { styles } from './reading.screen.style';

export function Reading ({ route, navigation}) {
    const { itemId , data } = route.params; 
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Typography style={typographyStyles.blue36} text={data.title} />                
            </View>
            <View style={styles.text}> 
                <Typography style={typographyStyles.black14} text={data.text} />
            </View>
        </View>
    );
}


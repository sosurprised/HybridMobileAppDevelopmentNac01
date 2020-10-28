import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width*0.8;

export const styles = StyleSheet.create({
    menuButton: {      
        minHeight: 80,
        width: width,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        borderBottomColor: 'white', 
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    }
});
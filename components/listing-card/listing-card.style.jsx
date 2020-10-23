import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    menuButton: {      
        minHeight: 100,
        width: width,
        paddingTop: 10,
        paddingHorizontal: 5, 
        borderWidth: 1,
        borderColor: 'transparent',
        borderBottomColor: '#1788A6', 
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    buttonText: {
        color: '#1788A6',
        fontWeight: 'bold',
        fontSize: 28,
    }
});
import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width*0.8;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1788A6',
        marginHorizontal: 5,
    },
    input: {              
        minWidth: width,
        height: 100,
        paddingVertical: 5,
        marginVertical: 3,    
        borderWidth: 1,
        borderColor: "#58D7F2", 
        borderRadius: 5,
        backgroundColor: 'white',    
    },
    inputLabel: {
        color: 'white',
        fontWeight: "300",
        fontSize: 18,
        marginTop: 3,
    },
    title: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 46,
    }
});
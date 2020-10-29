import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width*0.92;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1788A6',
        marginHorizontal: 15,
        paddingTop: 15,
    },
    input: {              
        minWidth: width,
        height: 42,
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
import { StyleSheet, Dimensions } from 'react-native';

export const width = Dimensions.get('screen').width*0.90;

export const styles = StyleSheet.create({
    container: {
        width: width,
        textAlign: "justify",
        paddingBottom: 30,
        paddingTop: 20,
    },
    input: {
        paddingBottom: 5,
    },
    title: {
        width: width,
        textAlign: 'center',
    },
    button: {
        marginTop: 25,
    }
});
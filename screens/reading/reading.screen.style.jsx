import { StyleSheet, Dimensions } from 'react-native';

export const width = Dimensions.get('screen').width*0.95;

export const styles = StyleSheet.create({
    container: {
        width: width,
        textAlign: "justify",
        paddingHorizontal: 16,
    },
    title: {
        paddingVertical: 20,
    },
    text: {
        flex: 1,
        alignContent: 'center',
        textAlign: 'justify',
    }
});
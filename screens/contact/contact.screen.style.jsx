import { StyleSheet, Dimensions } from 'react-native';

export const width = Dimensions.get('screen');

export const styles = StyleSheet.create({
    img: {
        //height: width,
       // width: width,
       position: 'absolute',
       bottom: 0,
       
    },
    title: {
        paddingTop: 50,
    } 
});
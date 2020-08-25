import React from 'react';
import { styles } from './primary-button.style';
import { TouchableOpacity, Text } from 'react-native';

export function PrimaryButton (props) {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={props.onPress}>
        <Text style={styles.buttonText}> {props.title}</Text>
    </TouchableOpacity>
  );
}





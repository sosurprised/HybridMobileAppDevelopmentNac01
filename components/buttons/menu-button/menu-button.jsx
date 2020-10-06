import React from 'react';
import { styles } from './menu-button.style';
import { TouchableOpacity, Text } from 'react-native';

export function MenuButton (props) {
  return (
    <TouchableOpacity style={styles.menuButton} onPress={props.onPress}>
        <Text style={styles.buttonText}> {props.title} </Text>
    </TouchableOpacity>
  );
}


import React from 'react';
import { styles } from './listing-card.style';
import { TouchableOpacity, Text } from 'react-native';
import { Typography } from '../typography/typography';

export function ListingCard (props) {
  return (
    <TouchableOpacity style={styles.menuButton} onPress={props.onPress}>
        <Typography style={styles.buttonText} text={props.title} />
    </TouchableOpacity>
  );
}


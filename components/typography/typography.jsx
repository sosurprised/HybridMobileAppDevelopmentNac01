import React from 'react';
import { View, Text } from 'react-native';

export function Typography(props) {
    return (
        <View>
            <Text style={props.style}>
                {props.text}
            </Text>
        </View>
    );
}
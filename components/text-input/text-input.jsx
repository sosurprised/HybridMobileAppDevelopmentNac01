import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from "./text-input.style";

export function FormInput(props) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.inputLabel}>
                    {props.label}
                </Text>
            </View>
            <View style={styles.input}>
                <TextInput
                // value={title}
                // onChangeText={this.handleTitleChange}
                />
            </View>           
        </View>
    );
}
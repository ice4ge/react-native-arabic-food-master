import React from 'react';
import {
    View,
    Text,
    TextInput,
} from 'react-native';

import { styles } from './styles';

export const GlobalTextInput = ({ labelText, passwordInput }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.labelText}>
                {labelText}
            </Text>
            <TextInput style={styles.inputForm} secureTextEntry={passwordInput}></TextInput>
        </View>
    )
}



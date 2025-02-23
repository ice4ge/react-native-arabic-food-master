import React from 'react';

import {
    View,
    Text,
} from 'react-native';
import { styles } from './styles';

export const GlobalButtons = ({ text }) => {
    return (
        <View style={styles.container}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
        </View>
    )
}

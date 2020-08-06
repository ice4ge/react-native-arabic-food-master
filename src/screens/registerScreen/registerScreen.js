import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import { RegisterComponent } from '../../components';
import { styles } from './styles';

export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <RegisterComponent></RegisterComponent>
        </View>
    )
}

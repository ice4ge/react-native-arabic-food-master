import React from 'react';
import {
    View,
} from 'react-native';

import { styles } from './styles';

import { LoginComponent } from '../../components';

export const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <LoginComponent />
        </View>
    )
}

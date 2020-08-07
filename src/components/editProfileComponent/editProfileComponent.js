import React from 'react';

import {
    View,
    Text,
} from 'react-native';
import { styles } from './styles';

import { GlobalTextInput } from '../globalInputLabel';
import { GlobalButtons } from '../globalButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const EditProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.editCard}>
                <GlobalTextInput labelText={'Email'} passwordInput={false} />
                <GlobalTextInput labelText={'Old Password'} passwordInput={false} />
                <GlobalTextInput labelText={'New password'} passwordInput={false} />
                <GlobalTextInput labelText={'Ratio'} passwordInput={false} />
                <TouchableOpacity>
                    <GlobalButtons text={'Submit'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

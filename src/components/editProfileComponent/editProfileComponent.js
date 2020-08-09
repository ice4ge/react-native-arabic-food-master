import React from 'react';

import {
    View,
    Text,
} from 'react-native';
import { styles } from './styles';

import { GlobalTextInput } from '../globalInputLabel';
import { GlobalButtons } from '../globalButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GlobalNumberPicker } from '../globalPicker';

const ratioNumberList = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

export const EditProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.editCard}>
                <GlobalTextInput labelText={'Email'} passwordInput={false} />
                <GlobalTextInput labelText={'Old Password'} passwordInput={false} />
                <GlobalTextInput labelText={'New password'} passwordInput={false} />
                <GlobalNumberPicker list={ratioNumberList} text="Ratio" />
                <TouchableOpacity>
                    <GlobalButtons text={'Submit'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

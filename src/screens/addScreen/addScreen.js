import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { styles } from './styles';
import { HeaderComponent } from '../../components';
import { EditProfile } from '../../components';

export const AddScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent text={'Edit Profile'}/>
            <EditProfile />
        </View>
    )
}
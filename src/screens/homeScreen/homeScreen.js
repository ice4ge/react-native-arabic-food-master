import React from 'react';
import {
    View,
} from 'react-native';

import { HeaderComponent } from '../../components';
import { HomeComponent } from '../../components';

import { fooData } from './foodData';

import { styles } from './styles';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent text={'Home'} />
            <HomeComponent fooData={fooData} />
        </View>
    )
}

import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import { styles } from './styles';
import { MenuBarIcon } from './menuBarIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const HeaderComponent = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.menuRow}>
                <TouchableOpacity>
                    <MenuBarIcon />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.headerText}>Food</Text>
            </View>
        </View>
    )
}

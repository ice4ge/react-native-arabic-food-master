import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import { styles } from './styles';
import { MenuBarIcon } from './menuBarIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const HeaderComponent = ({ text }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.menuRow}>
                <View>
                    <Text style={styles.headerText}>{text}</Text>
                </View>
                <View style={styles.menuBarContainer}>
                    <TouchableOpacity style={styles.menuBar}>
                        <MenuBarIcon />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

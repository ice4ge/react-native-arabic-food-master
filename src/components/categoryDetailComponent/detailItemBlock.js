import React from 'react';

import {
    View,
    Text,
} from 'react-native';
import { styles } from './styles';

export const SearchResultBlock = ({ blockData }) => {
    return (
        <View style={styles.blockContainer}>
            <Text style={styles.categoryName}>{blockData.name}</Text>
            <View style={styles.rightCicleContainer}>
                <View style={styles.rightCicle}></View>
            </View>
        </View>
    )
}

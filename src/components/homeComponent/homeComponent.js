import React from 'react';

import {
    View,
    Text,
    FlatList,
} from 'react-native';

import { styles } from './styles';
import { FoodBlock } from './foodBlock';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GlobalButtons } from '../globalButton';

export const HomeComponent = ({ fooData }) => {
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={fooData}
                    keyExtractor={(item, index) => `key${index}ForMenu`}
                    renderItem={({ item }) => (
                        <FoodBlock blockData={item} />
                    )}
                />
            </View>
            <TouchableOpacity>
                <GlobalButtons text={'Details'} />
            </TouchableOpacity>
        </View>
    )
}

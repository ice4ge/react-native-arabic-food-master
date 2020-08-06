import React from 'react';

import {
    View,
    Text,
    Image,
} from 'react-native';

import { styles } from './styles';

export const FoodBlock = ({ blockData }) => {
    return (
        <View style={styles.blockContainer}>
            <View style={styles.foodBlock}>
                <View style={styles.titleRow}>
                    <Text style={styles.blockText}>{blockData.number}</Text>
                    <Text style={styles.blockText}>&nbsp;&nbsp;{blockData.name}</Text>
                </View>
                <Text style={styles.blockText}>{blockData.rightText}</Text>
            </View>
            {blockData.url == 'pizza' && <Image style={styles.foodImage} source={require('../../assets/foods/pizza.jpg')} />}
            {blockData.url == 'water' && <Image style={styles.foodImage} source={require('../../assets/foods/water.jpg')} />}
            {blockData.url == 'rice' && <Image style={styles.foodImage} source={require('../../assets/foods/rice.jpg')} />}
        </View>
    )
}

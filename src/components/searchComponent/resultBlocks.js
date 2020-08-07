import React from 'react';

import {
    View,
    Text,
    Image,
} from 'react-native';
import { styles } from './styles';

export const SearchResultBlock = ({ blockData }) => {
    return (
        <View style={styles.blockContainer}>
            {blockData.name == 'Dairy' && <Image source={require('../../assets/categories/dairy.png')} />}
            {blockData.name == 'Carb' && <Image source={require('../../assets/categories/carb.png')} />}
            {blockData.name == 'Fruit' && <Image source={require('../../assets/categories/fruit.png')} />}
            {blockData.name == 'Drinks' && <Image source={require('../../assets/categories/drinks.png')} />}
            {blockData.name == 'Sweets' && <Image source={require('../../assets/categories/sweets.png')} />}
            {blockData.name == 'Restaurants' && <Image source={require('../../assets/categories/restaurants.png')} />}
            <Text style={styles.categoryName}>{blockData.name}</Text>
        </View>
    )
}

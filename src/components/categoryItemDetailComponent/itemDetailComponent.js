import React, { useState } from 'react';

import {
    View,
    Text,
    Image,
    FlatList,
} from 'react-native';

import { styles } from './styles';
import { HeartIcon } from './heartIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ItemDetailComponent = ({ detailData }) => {
    const [heartColor, setHeartColor] = useState('#999999');

    const toggleHeartColor = () => {
        setHeartColor(heartColor === '#999999' ? 'red' : '#999999');
    }

    return (
        <View style={styles.container}>
            <View style={styles.detailCard}>
                <Text style={styles.titleText}>Item</Text>
                <Text style={styles.descriptionText}>For every 30g</Text>
                <View style={styles.itemDetailViewContainer}>
                    <Image style={styles.itemImage} source={require('../../assets/foods/rice.jpg')} />
                    <View style={styles.itemDetailView}>
                        <FlatList
                            data={detailData}
                            keyExtractor={(item, index) => `key${index}ForMenu`}
                            renderItem={({ item }) => (
                                <View style={styles.dataRow}>
                                    <Text style={styles.itemAmount}>{item.amount}g</Text>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>
                <Text style={styles.countText}>Total</Text>
                <View style={styles.totalCountAmount}>
                    <Text style={styles.amountCountNumber}>44</Text>
                </View>
                <Text style={styles.countText}>Dose</Text>
                <View style={styles.doseCountAmount}>
                    <Text style={styles.amountCountNumber}>2.9</Text>
                </View>
                <TouchableOpacity onPress={() => toggleHeartColor()}>
                    <View style={styles.IconContainer}>
                        <HeartIcon color={heartColor} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

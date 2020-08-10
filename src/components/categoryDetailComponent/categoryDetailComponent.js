import React, { useState, useRef } from 'react';

import {
    View,
    FlatList,
    ScrollView,
    Text,
    TextInput,
} from 'react-native';

import { styles } from './styles';
import { SearchResultBlock } from './detailItemBlock';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { NavigationNames } from '../../navigations/navigationNames';
import { SearchIcon } from './searchIcon';

export const CategoryDetailComponent = ({ itemData }) => {
    const [focused, setFocused] = useState(false);
    const search = useRef();

    const handleFocus = () => {
        setFocused(true);
    }
    const handleBlur = () => {
        setFocused(false);
    }

    const labelStyle = {
        position: 'absolute',
        left: '55%',
        textAlign: 'right',
        top: !focused ? 18 : 0,
        fontSize: !focused ? 20 : 14,
        color: !focused ? '#f7a222' : '#f7a222',
    };
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.blocksContainer}>
                    <View style={styles.mainBlock}>
                        <View style={styles.searchBlock}>
                            <SearchIcon />
                            <Text style={labelStyle}>Search an item</Text>
                            <TextInput
                                ref={search}
                                style={styles.searchInput}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                blurOnSubmit
                            />
                        </View>
                    </View>
                    <View style={{ width: '85%', paddingBottom: 150, }}>
                        {itemData.map((items, i) =>
                            <TouchableOpacity key={i} onPress={() => navigation.navigate(NavigationNames.CategoryItemDetailScreen)}>
                                <SearchResultBlock blockData={items} />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

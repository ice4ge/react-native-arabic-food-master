import React, { useState, useRef } from 'react';

import {
    View,
    FlatList,
    ScrollView,
    TextInput,
    Text,
} from 'react-native';

import { styles } from './styles';
import { SearchResultBlock } from './resultBlocks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { NavigationNames } from '../../navigations/navigationNames';
import { SearchIcon } from './searchIcon';

export const SearchComponent = ({ searchData }) => {
    const navigation = useNavigation();
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
                        <FlatList
                            data={searchData}
                            keyExtractor={(item, index) => `key${index}ForMenu`}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate(NavigationNames.CategoryDetailsScreen)}>
                                    <SearchResultBlock blockData={item} />
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

import React from 'react';

import {
    View,
    FlatList,
    ScrollView,
} from 'react-native';

import { styles } from './styles';
import { SearchResultBlock } from './resultBlocks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { NavigationNames } from '../../navigations/navigationNames';

export const SearchComponent = ({ searchData }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.blocksContainer}>
                    <View style={styles.mainBlock}>
                        <View style={styles.searchBlock}></View>
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

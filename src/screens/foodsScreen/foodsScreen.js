import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { HeaderComponent } from '../../components';
import { SearchComponent } from '../../components';

import { styles } from './styles';
import { searchData } from './searchData';

export const FoodsScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent text={'Search Foods'}/>
            <SearchComponent searchData={searchData} />
        </View>
    )
}

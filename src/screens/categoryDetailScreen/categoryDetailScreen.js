import React from 'react';

import {
    View,
    Text,
} from 'react-native';
import { HeaderComponent } from '../../components';
import { styles } from './styles';
import { detailsData } from './detailsData';
import { CategoryDetailComponent } from '../../components';

export const CategoryDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent text={'Category Items'}/>
            <CategoryDetailComponent itemData={detailsData}/>
        </View>
    )
}

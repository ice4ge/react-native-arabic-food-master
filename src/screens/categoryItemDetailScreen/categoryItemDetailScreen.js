import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { styles } from './styles';
import { HeaderComponent } from '../../components';
import { ItemDetailComponent } from '../../components';
import { detailData } from './detailData';

export const CategoryItemDetailScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent text={'Item'}/>
            <ItemDetailComponent detailData={detailData} />
        </View>
    )
}

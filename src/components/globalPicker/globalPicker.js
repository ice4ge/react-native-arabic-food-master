import React, { useState } from 'react';

import {
    View,
    Text,
    Picker,
} from 'react-native';
import { styles } from './styles';

export const GlobalNumberPicker = ({ list, text }) => {
    const [selectedIndex, setselectedIndex] = useState();
    return (
        <View style={styles.container}>
            <Text style={styles.labelText}>
                {text}
            </Text>
            <View style={styles.inputForm}>
                <Picker
                    selectedValue={selectedIndex}
                    style={{width: '100%', height: '100%',}}
                    onValueChange={(itemValue, itemIndex) => setselectedIndex(itemValue)}
                >
                    {list.map((numbers, i) =>
                        <Picker.Item key={i} label={`1: ${numbers}`} value={numbers} />
                    )}
                </Picker>
            </View>
        </View>
    )
}

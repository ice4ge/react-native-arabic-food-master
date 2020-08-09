import React from 'react';

import {
    View,
    Image,
} from 'react-native';
import { GlobalTextInput } from '../globalInputLabel';

import { styles } from './styles';
import { GlobalButtons } from '../globalButton';
import { useNavigation } from "@react-navigation/native";
import { NavigationNames } from '../../navigations/navigationNames';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GlobalNumberPicker } from '../globalPicker';

const ratioNumberList = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

export const RegisterComponent = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={require('../../assets/logo.jpg')} />
            <View style={styles.fromContainer}>
                <GlobalTextInput labelText={'Email'} passwordInput={false} />
                <GlobalTextInput labelText={'Password'} passwordInput={true} />
                <GlobalTextInput labelText={'Confirm Password'} passwordInput={true} />
                <GlobalNumberPicker list={ratioNumberList} text="Ratio" />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(NavigationNames.LoginScreen)}>
                <GlobalButtons text={'Register'} />
            </TouchableOpacity>
        </View>
    )
}

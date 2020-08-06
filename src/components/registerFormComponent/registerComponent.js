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

export const RegisterComponent = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={require('../../assets/logo.jpg')} />
            <View style={styles.fromContainer}>
                <GlobalTextInput labelText={'Email'} passwordInput={false} />
                <GlobalTextInput labelText={'Password'} passwordInput={true} />
                <GlobalTextInput labelText={'Confirm Password'} passwordInput={true} />
                <GlobalTextInput labelText={'Ratio'} passwordInput={false} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(NavigationNames.LoginScreen)}>
                <GlobalButtons text={'Register'} />
            </TouchableOpacity>
        </View>
    )
}

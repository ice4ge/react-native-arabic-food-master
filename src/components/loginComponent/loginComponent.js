import React from 'react';

import {
    View,
    Image,
    Text,
} from 'react-native';

import { GlobalTextInput } from '../globalInputLabel';
import { GlobalButtons } from '../globalButton';
import { useNavigation } from "@react-navigation/native";
import { NavigationNames } from '../../navigations/navigationNames';

import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const LoginComponent = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={require('../../assets/logo.jpg')} />
            <View style={styles.fromContainer}>
                <GlobalTextInput labelText={'Email'} passwordInput={false} />
                <GlobalTextInput labelText={'Password'} passwordInput={true} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(NavigationNames.RootTabContainer, { screen: NavigationNames.HomeScreen })}>
                <GlobalButtons text={'Log in'} />
            </TouchableOpacity>
            <View style={styles.registerArea}>
                <Text style={styles.registerText}>Don't you have account?</Text>
                <View style={styles.registerButtonArea}>
                    <TouchableOpacity onPress={() => navigation.navigate(NavigationNames.RegisterScreen)}>
                        <Text style={styles.registerButton}>Register</Text>
                    </TouchableOpacity>
                    <Text style={styles.registerText}> to create account.</Text>
                </View>
            </View>
        </View>
    )
}

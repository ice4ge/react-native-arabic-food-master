import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { NavigationNames } from './navigationNames';

import {
    AddTabIcon,
    FoodsTabIcon,
    HomeTabIcon,
} from './tabStyleIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const TabNavigationStyle = ({ route }) => {
    return (
        <View>
            {route.name === NavigationNames.HomeTab &&
                <>
                    <TouchableOpacity>
                        <HomeTabIcon />
                    </TouchableOpacity>
                </>
            }
            {route.name === NavigationNames.FoodsTab &&
                <>
                    <TouchableOpacity>
                        <FoodsTabIcon />
                    </TouchableOpacity>
                </>
            }
            {route.name === NavigationNames.AddTab &&
                <>
                    <TouchableOpacity>
                        <AddTabIcon />
                    </TouchableOpacity>
                </>
            }
        </View>
    )
}

export const stackScreenOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: "#FAFAFA",
  }
};

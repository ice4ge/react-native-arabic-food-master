import React from 'react';
import Svg, { Path, G } from "react-native-svg"

export const MenuBarIcon = () => {
    return (
        <Svg fill="#000000" viewBox="0 0 50 50" width="60px" height="30px">
            <Path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" fill={'white'} />
        </Svg>
    )
}

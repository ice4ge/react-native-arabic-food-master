import React from 'react';
import Svg, { Path, G } from "react-native-svg"

export const HeartIcon = ({ color }) => {
    return (
        <Svg id="Capa_1" enable-background="new 0 0 512 512" height="30" viewBox="0 0 512 512" width="30">
            <G>
                <G>
                    <Path d="m246.122 477.289c-144.417-126.367-246.122-193.304-246.122-299.774 0-80.513 57.4-146.515 136-146.515 54.544 0 95.017 33.497 120 81.015 24.981-47.515 65.454-81.015 120-81.015 78.609 0 136 66.015 136 146.515 0 106.457-101.572 173.291-246.122 299.773-5.657 4.949-14.1 4.949-19.756.001z" fill={color} />
                </G>
            </G>
        </Svg>
    )
}

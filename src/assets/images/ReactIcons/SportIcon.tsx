import React from 'react';
import Svg, { Path, Rect, G } from 'react-native-svg';

const SportIcon = ({width=36, active}) => {
    return (
        <Svg width={width} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G id="ic-sport-jump-rope">
                <Rect stroke={`${active ? '#ffae2b' : '#868687'}`} className="cls-1" x="4" y="14" width="4" height="8" rx="2"/>
                <Rect stroke={`${active ? '#ffae2b' : '#868687'}`} className="cls-1" x="16" y="2" width="4" height="8" rx="2"/>
                <Path stroke={`${active ? '#ffae2b' : '#868687'}`} d="M6,14V8A3,3,0,0,1,9,5H9a3,3,0,0,1,3,3v8a3,3,0,0,0,3,3h0a3,3,0,0,0,3-3V10"/>
            </G>
        </Svg>
    );
};

export default SportIcon;
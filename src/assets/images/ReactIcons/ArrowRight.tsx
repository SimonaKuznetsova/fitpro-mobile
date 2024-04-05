import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRight = ({width=28}) => {
    return (
        <Svg style={{zIndex: 100}} width={width} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#ffae2b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></Svg>
    );
};

export default ArrowRight;
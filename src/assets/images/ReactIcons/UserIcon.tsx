import React from 'react';
import Svg, {Path, G, Use, Defs} from 'react-native-svg';
import {Image} from "react-native";

const UserIcon = ({width=30}) => {
    return (
        <Svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12.1992 12C14.9606 12 17.1992 9.76142 17.1992 7C17.1992 4.23858 14.9606 2 12.1992 2C9.43779 2 7.19922 4.23858 7.19922 7C7.19922 9.76142 9.43779 12 12.1992 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M3 22C3.57038 20.0332 4.74796 18.2971 6.3644 17.0399C7.98083 15.7827 9.95335 15.0687 12 15C16.12 15 19.63 17.91 21 22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
};

export default UserIcon;
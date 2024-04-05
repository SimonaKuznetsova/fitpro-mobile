import React from 'react';
import {Button, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SvgUri from "react-native-svg-uri";
import CardBasic from "../components/CardBasic.tsx";
import LogoIcon from "../assets/images/ReactIcons/LogoIcon.tsx";
import DirectIcon from "../assets/images/ReactIcons/DirectIcon.tsx";
import UserIcon from "../assets/images/ReactIcons/UserIcon.tsx";
import CardDirect from "../components/CardDirect.tsx";

const DirectScreen = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'yellow', height: '100%' }}>
        <CardDirect />
        <CardDirect />
        <CardDirect />
    </ScrollView>
  );
};

export default DirectScreen;

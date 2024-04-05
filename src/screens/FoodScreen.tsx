import React from 'react';
import {Button, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SvgUri from "react-native-svg-uri";
import CardBasic from "../components/CardBasic.tsx";
import LogoIcon from "../assets/images/ReactIcons/LogoIcon.tsx";
import DirectIcon from "../assets/images/ReactIcons/DirectIcon.tsx";
import UserIcon from "../assets/images/ReactIcons/UserIcon.tsx";
import CardDirect from "../components/CardDirect.tsx";

const FoodScreen = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'black', height: '100%'}}>
        <Image source={require('../assets/images/health-food.jpg')} style={{width: 'auto', height: 300}}/>
        <View style={{width: 'auto', height: 300, backgroundColor: 'red', position: 'absolute'}}/>
        <Text style={{fontSize: 40, margin: 40, position: 'absolute', color: 'white', fontWeight: 'bold'}}>Weekly Meal Plan</Text>
    </ScrollView>
  );
};

export default FoodScreen;

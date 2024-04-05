import React from 'react';
import {Button, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SvgUri from "react-native-svg-uri";
import ArrowRight from "../assets/images/ReactIcons/ArrowRight.tsx";

const CardDirect = ({navigation, item}) => {
    return (
        <TouchableOpacity
            style={{
            width: '100%',
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.12,
            shadowRadius: 4,
            elevation: 5,
            flexDirection: 'row'}}>

            <View style={{flexDirection: 'row', padding: 10}}>
                <View style={{width: 60, height: 60, borderRadius: 30, backgroundColor: 'grey', marginRight: 20, opacity: 1}}>
                    <Image source={require("../assets/images/coach-profile-image.jpeg")} style={{width: 60, height: 60, borderRadius: 30}} />
                </View>
                <View>
                    <Text style={{fontSize: 18, marginBottom: 10}}>Chat with <Text style={{fontWeight: 'bold'}}>Body Maker</Text></Text>
                    <Text style={{fontSize: 22}}>Great job! =)</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CardDirect;

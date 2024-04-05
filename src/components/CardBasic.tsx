import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import CircularProgress from 'react-native-circular-progress-indicator';
import SvgUri from 'react-native-svg-uri';

const CardBasic = ({navigation, item}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#3a393a',
        margin: 20,
        // shadowColor: '#000',
        // shadowOffset: {width: 0, height: 1},
        // shadowOpacity: 0.12,
        // shadowRadius: 4,
        elevation: 5,
        borderRadius: 10,
        flexDirection: 'column-reverse',
      }}
      onPress={() => (item.navHandler ? item.navHandler() : null)}>
      <View
        style={{
          justifyContent: 'space-between',
          padding: 20,
          flex: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 5}}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              width: '100%',
              marginBottom: 14,
              fontWeight: 'normal',
              textTransform: 'uppercase',
            }}>
            {item.title}
          </Text>
          <View
            style={{
              borderBottomColor: '#575757',
              borderBottomWidth: 1,
              width: 70,
              marginBottom: 14,
              opacity: 0.3,
            }}
          />
          <Text style={{color: '#c3c2c2', fontSize: 15, width: '100%'}}>
            {item.description}
          </Text>
        </View>
        <AnimatedCircularProgress
          size={60}
          width={8}
          fill={70}
          tintColor="#ffae2b"
          style={{flex: 1}}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="grey">
          {fill => <Text style={{color: 'white', fontWeight: 'bold'}}>7/10</Text>}
        </AnimatedCircularProgress>
      </View>

      <View style={{backgroundColor: '#7d8bc8', height: 80, flex: 2}}>
        <Image source={item.image} style={{width: 'auto', height: '100%'}} />
        <View
          style={{
            height: 80,
            width: '100%',
            backgroundColor: '#9CADCE',
            position: 'absolute',
            opacity: 0.4,
          }}
        />
        <Text
          style={{
            position: 'absolute',
            right: 10,
            top: 0,
            color: 'white',
            fontSize: 35,
            opacity: 0.75,
            fontStyle: 'italic',
            fontWeight: 'bold',
          }}>
          {item.imageText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardBasic;

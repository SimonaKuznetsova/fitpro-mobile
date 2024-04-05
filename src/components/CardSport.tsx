import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ArrowRight from '../assets/images/ReactIcons/ArrowRight.tsx';
import CircleIndicator from './CircleIndicator.tsx';

const CardSport = ({navigation, item, selectedItem}) => {
  const [expanded, setExpanded] = useState(false);
  const [position, setPosition] = useState('initial');
  const animatedHeight = useRef(
    new Animated.Value(
      selectedItem === item.dayNo || selectedItem === null ? -400 : 0,
    ),
  ).current;
  const animatedShadowOpacity = new Animated.Value(expanded ? 0 : 0.12);

  const fadeAnim = useRef(new Animated.Value(0.12)).current;
  const animatedOpacity = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.12,
      duration: 1500,
      useNativeDriver: true,
    }).start();
    // Animated.timing(animatedOpacity, {
    //     toValue: 0,
    //     duration: 1500,
    //     useNativeDriver: true,
    // }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
    // Animated.timing(animatedOpacity, {
    //     toValue: 1,
    //     duration: 1500,
    //     useNativeDriver: true,
    // }).start();
  };

  const handlePress = () => {
    console.log('handle press');
    setExpanded(!expanded);

    if (expanded) {
      fadeIn();
    } else {
      fadeOut();
    }
  };

  useEffect(() => {
    console.log('expanded---', expanded);
  }, [expanded]);

  return (
    <Animated.View
      style={{
        // height: animatedHeight,
        opacity: animatedOpacity,
        height: expanded ? 800 : 120,
        width: '100%',
        maxWidth: '100%',
        backgroundColor: '#2c2929',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: fadeAnim,
        // shadowOpacity: 0.12,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 10,
        marginBottom: 25,
        // flexDirection: 'row',
        flexDirection: 'row',
        zIndex: 100,
      }}>
      <TouchableOpacity
        onPress={() => {
          item.goTo();
          handlePress();
        }}
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        {item.leftImage ? (
          <View style={{width: expanded ? '30%' : '40%'}}>
            <Image
              source={item.image}
              style={{width: '100%', height: expanded ? '40%' : '100%'}}
            />
            {/* <View
              style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: '#7d8bc8',
                padding: 3,
                width: '100%',
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                {item.status}
              </Text>
            </View> */}
          </View>
        ) : null}

        <View style={{padding: 10, flex: 1, justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <CircleIndicator maxCount={5} currentCount={3} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: '#ffae2b',
                marginBottom: 8,
              }}>
              Day {item.dayNo}
            </Text>
          </View>

          <View>
            <Text
              numberOfLines={1}
              style={{
                width: '100%',
                textAlign: item.leftImage ? 'right' : 'left',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#cdc9c9',
              }}>
              {item.title}
            </Text>
            {/* <Text
              style={{
                width: '100%',
                textAlign: item.leftImage ? 'right' : 'left',
                fontSize: 16,
                color: '#949494',
              }}>
              {item.description}
            </Text> */}
          </View>

          <View
            style={{
              alignItems: item.leftImage ? 'flex-end' : 'flex-start',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}>
            {expanded && (
              <Text
                style={{
                  top: -17,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  transform: 'rotate(180deg)',
                }}>
                Back to workout list
              </Text>
            )}
            <ArrowRight />
          </View>
        </View>

        {!item.leftImage ? (
          <View style={{width: expanded ? '20%' : '60%'}}>
            <Image
              source={item.image}
              style={{width: '100%', height: expanded ? '40%' : '100%'}}
            />
            {expanded && <View
              style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: '#7d8bc8',
                padding: 3,
                width: '100%',
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                {item.status}
              </Text>
            </View>}
          </View>
        ) : null}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CardSport;

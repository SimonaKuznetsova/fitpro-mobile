import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen2 from '../screens/HomeScreen.tsx';
import HomeScreen from '../screens/HomeScreen.tsx';
import SportScreen from '../screens/SportScreen.tsx';
import HomeIcon from '../assets/images/ReactIcons/HomeIcon.tsx';
import SportIcon from '../assets/images/ReactIcons/SportIcon.tsx';
import FoodIcon from '../assets/images/ReactIcons/FoodIcon.tsx';
import SettingsIcon from '../assets/images/ReactIcons/SettingsIcon.tsx';
import {StatusBar, View, SafeAreaView, Animated} from 'react-native';
import DirectIcon_ from '../assets/images/ReactIcons/DirectIcon_.tsx';
import FoodScreen from '../screens/FoodScreen.tsx';
import useScreenWidth from '../hooks/useScreenWidth.ts';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabIcon = ({focused, activeColor, inactiveColor}) => {
  const colorValue = new Animated.Value(focused ? 1 : 0);

  useEffect(() => {
    Animated.timing(colorValue, {
      toValue: focused ? 1 : 0,
      duration: 250,
      useNativeDriver: false, // Установите это в true, если изменяете только свойства прозрачности или трансформации
    }).start();
  }, [focused]);

  const iconColor = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: [inactiveColor, activeColor],
  });

  return (
    <Animated.View // Используйте Animated.View или другой анимированный компонент
      style={{...yourIconStyle, color: iconColor}}>
      {/* Ваша иконка */}
    </Animated.View>
  );
};

function getNavIcon(name: any, active: any) {
  if (name === 'Main') {
    return <HomeIcon active={active} width={30} />;
  } else if (name === 'Sport') {
    return <SportIcon active={active} width={30} />;
  } else if (name === 'Food') {
    return <FoodIcon active={active} width={30} />;
  } else if (name === 'Direct') {
    return <DirectIcon_ active={active} width={30} />;
  } else {
    return <SettingsIcon active={active} width={30} />;
  }
}

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          // if (route.name === 'Main') {
          //   return <HomeIcon active={focused} width={30} />;
          // } else if (route.name === 'Sport') {
          //   return <SportIcon active={focused} width={30}/>;
          // } else if (route.name === 'Food') {
          //   return <FoodIcon active={focused} width={30}/>;
          // } else if (route.name === 'Direct') {
          //   return <DirectIcon_ active={focused} width={30}/>;
          // } else {
          //   return <SettingsIcon active={focused} width={30}/>;
          // }
          return getNavIcon(route.name, focused);
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: -20,
          margin: 20,
          marginBottom: 70,
          padding: 0,
          paddingTop: 10,
          paddingBottom: 10,
          height: 70,
          backgroundColor: '#1a1a1a',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          borderRadius: 50,
          borderWidth: 0.5,
          borderColor: '#868687',
          transition: '1s ease all',
        },
      })}>
      <Tab.Screen name="Main" component={HomeScreen} />
      {/* <Tab.Screen name="Direct" component={DirectScreen} /> */}
      <Tab.Screen name="Sport" component={SportScreen} />
      <Tab.Screen name="Food" component={FoodScreen} />
      <Tab.Screen name="Settings" component={Screen2} />
    </Tab.Navigator>
  );
}

const MainNavigator = () => {
  const screenWidth = useScreenWidth();
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffae2b'}}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={BottomTabNavigation}
            options={{headerShown: false}}
          />

          <Stack.Screen name="Day 1" component={HomeScreen} />
          <Stack.Screen name="Day 2" component={HomeScreen} />
          <Stack.Screen name="Day 3" component={HomeScreen} />
          <Stack.Screen name="Day 4" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <View
        style={{
          backgroundColor: 'black',
          height: 0,
          width: screenWidth,
          marginBottom: -60,
          zIndex: -1000,
        }}
      />
    </SafeAreaView>
  );
};

export default MainNavigator;

//colors: grey for bottom nav menu - color: #1a1a1a;

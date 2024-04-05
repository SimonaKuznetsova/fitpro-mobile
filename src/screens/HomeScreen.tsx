import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import CardBasic from '../components/CardBasic.tsx';
import LogoIcon from '../assets/images/ReactIcons/LogoIcon.tsx';
import DirectIcon from '../assets/images/ReactIcons/DirectIcon.tsx';
import UserIcon from '../assets/images/ReactIcons/UserIcon.tsx';
import {LineChart} from 'react-native-chart-kit';
import useScreenWidth from '../hooks/useScreenWidth.ts';
import NotificationsIcon from '../assets/images/ReactIcons/NotificationIcon.tsx';

const HomeScreen = ({navigation}) => {
  const screenWidth = useScreenWidth();

  return (
    <View style={{}}>
      <View
        style={{
          position: 'absolute',
          zIndex: 1000,
          width: '100%',
          backgroundColor: '#ffae2b',
          height: 280,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          borderBottomEndRadius: 60,
          borderBottomStartRadius: 60,
        }}>
        <View>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
          <Image
            source={require('../assets/images/logooo1.psd')}
            style={{width: 70, height: 70, marginLeft: -15}}
          />

          <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#3a393a',
              justifyContent: 'center',
              alignItems: 'center',
              height: 35,
              width: 35,
              borderRadius: 50,
              marginRight: 10,
            }}>
              <View style={{width: 7, height: 7, borderRadius: 100, position: 'absolute', backgroundColor: 'red', right: 3, top: 0}}/>
            <TouchableOpacity>
              <NotificationsIcon />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#3a393a',
              justifyContent: 'center',
              alignItems: 'center',
              height: 35,
              width: 35,
              borderRadius: 50,
            }}>
            <TouchableOpacity>
              <UserIcon />
            </TouchableOpacity>
          </View>
          </View>
        </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: screenWidth - 35,
            }}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginBottom: 10,
                  textTransform: 'uppercase',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Initial Weight
              </Text>
              <Text style={{color: '#f6e4ce', fontWeight: 'bold', fontSize: 18}}>57.8 kg</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginBottom: 10,
                  textTransform: 'uppercase',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Current Weight
              </Text>
              <Text style={{color: '#f6e4ce', fontWeight: 'bold', fontSize: 18}}>53.3 kg</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-end',
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginBottom: 10,
                  textTransform: 'uppercase',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Result
              </Text>
              <Text style={{color: '#f6e4ce', fontWeight: 'bold', fontSize: 18}}>-4.5 kg</Text>
            </View>
          </View>

          <View style={{width: '100%', marginLeft: -13, paddingHorizontal: 20}}>
            <LineChart
              data={{
                labels: [],
                datasets: [
                  {
                    // data: [59, 48],
                    data: [59, 54],
                  },
                ],
              }}
              width={screenWidth - 70} // from react-native
              height={100}
              // yAxisLabel=""
              yAxisInterval={10}
              yAxisSuffix=" kg"
              chartConfig={{
                backgroundGradientFrom: '48',
                backgroundGradientTo: '59',
                decimalPlaces: 1, // optional, defaults to 2dp
                color: (opacity = 1) => '#3a393a',
                labelColor: (opacity = 1) => '#3a393a',
                style: {
                  borderRadius: 0,
                },
                propsForDots: {
                  r: '4',
                  strokeWidth: '1',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 25,
                borderRadius: 3,
              }}
            />
          </View>
        </View>

      </View>
      <ScrollView
        style={{backgroundColor: 'black', height: '100%', paddingTop: 280}}>
        <CardBasic
          item={{
            imageTextOpacity: 0.65,
            imageText: 'Warm up',
            image: require('../assets/images/run-image.jpg'),
            title: 'Training program',
            description: "Here's a personalized workout selected just for you.",
            navHandler: () => navigation.navigate('Sport'),
          }}
        />
        <CardBasic
          item={{
            imageTextOpacity: 0.95,
            imageText: 'Maintain balance',
            image: require('../assets/images/health-food.jpg'),
            title: 'Meal plan',
            description: 'A balanced meal plan awaits you here.',
            navHandler: () => navigation.navigate('Food'),
          }}
        />
        <CardBasic
          item={{
            imageTextOpacity: 0,
            imageText: 'Share reports',
            image: require('../assets/images/watch-progress.jpeg'),
            title: 'Track your progress',
            description:
              'Share your results every week and track your progress.',
          }}
        />
        <CardBasic
          item={{
            imageTextOpacity: 0,
            imageText: 'Develop yourself',
            image: require('../assets/images/robots-run.webp'),
            title: 'Interesting facts & useful tips',
            description:
              "Read helpful recommendations, and you're likely to discover something new.",
          }}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

import React, {useEffect, useRef, useState} from 'react';
import {Button, Image, ScrollView, Text, View} from 'react-native';
import SvgUri from "react-native-svg-uri";
import CardBasic from "../components/CardBasic.tsx";
import ICON from "../assets/images/tab-sport.svg";
import ArrowRight from "../assets/images/ReactIcons/ArrowRight.tsx";
import CardSport from "../components/CardSport.tsx";

const SportScreen = ({navigation}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [someState, setSomeState] = useState('initial');
    const [lessonsData, setLessonsData] = useState([
        {
            title: 'Stretching',
            status: 'Completed',
            dayNo: 1,
            leftImage: true,
            // goTo: () => navigation.navigate('Day 1'),
            goTo: () => handleItemClick(1),
            image: require('../assets/images/stretch-day.jpeg'),
            description: 'Today, take some time to develop the flexibility of your body.'
        },
        {
            title: 'Arm and Back',
            status: 'Pending',
            dayNo: 2,
            leftImage: false,
            // goTo: () => navigation.navigate('Day 2'),
            goTo: () => handleItemClick(2),
            image: require('../assets/images/hand-day.jpeg'),
            description: 'This workout is dedicated to strengthening the muscles of the back and arms.'
        },
        {
            title: 'Leg and Glute',
            status: 'Unavailable',
            dayNo: 3,
            leftImage: true,
            // goTo: () => navigation.navigate('Day 3'),
            goTo: () => handleItemClick(3),
            image: require('../assets/images/leg-day.jpeg'),
            description: 'These exercises are aimed at strengthening the legs and glutes.'
        },
        {
            title: 'Cardio',
            status: 'Unavailable',
            dayNo: 4,
            leftImage: false,
            // goTo: () => navigation.navigate('Day 4'),
            goTo: () => handleItemClick(4),
            image: require('../assets/images/run-day.jpeg'),
            description: 'No strength training today. Just a run.'
        },
    ])
    const [lessonItems, setLessonItems] = useState(lessonsData)
    const scrollViewRef = useRef();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('ON SCREEN SPORT');
            scrollToTopAnimated();
        });

        return unsubscribe;
    }, [navigation]);

    const handleItemClick = (item) => {
        // if (selectedItem === item) {
        //     console.log('=== pass');
        //     setSelectedItem(null);
        // } else {
        //     console.log('!== faild');
        //     setSelectedItem(item);
        // }

        setSelectedItem(prevSelectedItem => {
            if (prevSelectedItem === item) {
                console.log('=== pass');
                return null;
            } else {
                console.log('!== faild');
                return item;
            }
        });
        // console.log('clicked--->>>')
        // setSomeState('clicked');
        // if (lessonItems.length > 1) {
        //     setLessonItems(lessonsData.filter(lesson => lesson.dayNo === item))
        // } else {
        //     setLessonItems(lessonsData)
        // }

        // setSelectedItem(selectedItem === item ? null : item);
    };

    // useEffect(() => {
    //     console.log('someState', someState)
    //     if (someState === 'clicked') {
    //         setSomeState('initial')
    //     }
    // }, [someState]);

    useEffect(() => {
        // console.log('selectedItem--->>>', selectedItem)
        if (selectedItem !== null) {
            const filteredLessons = lessonsData.filter(lesson => lesson.dayNo === selectedItem);
            console.log('made 1 lesson', filteredLessons);
            setLessonItems(filteredLessons);
            // setTimeout(() => {
            //     setLessonItems(filteredLessons);
            // }, 1500)
        } else {
            console.log('made many lessons', lessonsData);
            // setTimeout(() => {
            //     setLessonItems(lessonsData);
            // }, 1500)
            setLessonItems(lessonsData);
        }
    }, [selectedItem]);

    const scrollToTop = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: false });
    };

    const scrollToTopAnimated = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true }); // Примерно полсекунды для анимации
    };

    useEffect(() => {
        if (lessonItems.length === 1) {
            scrollToTopAnimated();
        }
    }, [lessonItems]);


    return (
    <ScrollView ref={scrollViewRef} style={{display: 'flex', backgroundColor: 'black', paddingTop: 30, paddingHorizontal: 20}} contentContainerStyle={{ paddingBottom: 40 }} >
        {!selectedItem && <Text style={{fontSize: 30, textTransform: 'uppercase', marginBottom: 20}}>My trainings</Text>}

        {lessonItems.map((lesson, index) => {
            return <CardSport
                selectedItem={selectedItem}
                item={lesson}
                key={lesson.title}
            />
        })}
    </ScrollView>
  );
};

export default SportScreen;

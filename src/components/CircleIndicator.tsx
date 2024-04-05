import React, { useEffect, useState } from 'react';
import {
  View,
} from 'react-native';

const CircleIndicator = ({maxCount, currentCount}) => {
  const [serviceArray, setServiceArray] = useState([0,1,2,3,4,5,6,7])

  useEffect(() => {
    const arr = [];

    for (let i = 0; i < maxCount; i++) {
        arr.push(i);
    }

    setServiceArray(arr);
  }, [maxCount]);

  return (
    <View style={{flexDirection: 'row'}}>
      {serviceArray.map((_, index) => {
        return <View style={{width: 9, height: 9, backgroundColor: index < currentCount ? '#ffae2b' : '#ffae2b00', marginRight: 5, borderRadius: 50, borderWidth: index < currentCount ? 0 : 1, borderColor: '#ffae2b'}} />;
      })}
    </View>
  );
};

export default CircleIndicator;

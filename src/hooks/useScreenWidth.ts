import React, {useEffect, useState} from 'react';
import {ScaledSize, Dimensions} from 'react-native';

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width,
  );

  useEffect(() => {
    const onChange = ({window}: {window: ScaledSize}) => {
      setScreenWidth(window.width);
    };

    Dimensions.addEventListener('change', onChange);

    // return () => {
    //   Dimensions.removeEventListener('change', onChange);
    // };
  }, []);

  return screenWidth;
};

export default useScreenWidth;

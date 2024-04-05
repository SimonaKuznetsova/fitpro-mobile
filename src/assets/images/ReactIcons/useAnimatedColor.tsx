import { useEffect, useState } from 'react';
import { Animated } from 'react-native';

function useAnimatedColor(active: any, outputRange: any) {
  const [colorAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(colorAnimation, {
      toValue: active ? 1 : 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, [active, colorAnimation]);

  const color = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: outputRange,
  });

  return color;
}

export default useAnimatedColor;

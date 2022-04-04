import React, { useEffect } from 'react';
import { Animated, Easing, Dimensions } from 'react-native';

import { BackgroundImage } from './BackgroundImage';
import { SIZES, images } from '../constants';

const translateIn = {
  inX: -(Dimensions.get('window').width * 0.9375),
  inY: -(Dimensions.get('window').height * 0.9375),
};

export default function BackgroundAnimation() {
  const initialValue = 0;
  const translateValue = new Animated.Value(initialValue);

  useEffect(() => {
    const translate = () => {
      translateValue.setValue(initialValue);
      Animated.timing(translateValue, {
        toValue: SIZES.ANIMATION_TO_VALUE,
        duration: SIZES.ANIMATION_DURATION,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => translate());
    };

    translate();
  }, [translateValue]);

  const translateAnimation = translateValue.interpolate({
    inputRange: [SIZES.INPUT_RANGE_START, SIZES.INPUT_RANGE_END],
    outputRange: [SIZES.OUTPUT_RANGE_START, SIZES.OUTPUT_RANGE_END],
  });

  const AnimatedImage = Animated.createAnimatedComponent(BackgroundImage);

  return (
    <AnimatedImage
      source={images.background2}
      resizeMode="repeat"
      style={{
        zIndex: 10,
        transform: [
          {
            translateX: translateAnimation,
          },
          {
            translateY: translateAnimation,
          },
        ],
      }}
      translateIn={translateIn}
    />
  );
}
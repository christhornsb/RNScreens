import React from 'react';
import { View, SafeAreaView, Image, ActivityIndicator } from 'react-native';

import BackgroundAnimation from '../animated';
import { COLORS, images, SIZES } from '../constants';


export default function OnBoarding() {
    
  return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white}}>
        <SafeAreaView>
            <View style={{paddingVertical: SIZES.padding, }}>
                <Image 
                    source={images.logo}
                    resizeMode="contain"
                    style={{
                    height: 250,
                    width: 500,
                    opacity: 1
                }}
                />
                <ActivityIndicator size="large" color={COLORS.primary}/>
            </View>

        </SafeAreaView>
        <BackgroundAnimation />
        </View>
  );
}

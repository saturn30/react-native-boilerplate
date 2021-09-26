import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import RNBootSplash from 'react-native-bootsplash';

function Splash() {
  function onLottieLoad() {
    RNBootSplash.hide({fade: true});
  }

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        onLayout={onLottieLoad}
        source={require('@assets/splash/splash.json')}
        style={{width: 300}}
        autoPlay
      />
    </View>
  );
}

export default Splash;

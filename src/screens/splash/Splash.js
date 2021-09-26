import React from 'react';
import RNBootSplash from 'react-native-bootsplash';

import * as S from './Splash.styled';

function Splash() {
  return (
    <S.Wrap>
      <S.SplashLottie
        onLayout={onLottieLoad}
        source={require('@assets/splash/splash.json')}
        autoPlay
      />
    </S.Wrap>
  );

  function onLottieLoad() {
    RNBootSplash.hide({fade: true});
  }
}

export default Splash;

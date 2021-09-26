import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { FadeOut } from 'react-native-reanimated';

import * as S from './Splash.styled';

function Splash({ setIsLoading }) {
  return (
    <S.Wrap exiting={FadeOut}>
      <S.SplashLottie
        onLayout={onLottieLoad}
        source={require('@assets/splash/splash.json')}
        onAnimationFinish={onAnimationFinish}
        autoPlay
        loop={false}
        speed={1.5}
      />
    </S.Wrap>
  );

  function onLottieLoad() {
    RNBootSplash.hide({ fade: true });
  }

  function onAnimationFinish() {
    setIsLoading(false);
  }
}

export default Splash;

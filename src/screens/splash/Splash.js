import React from 'react';
import { FadeOut } from 'react-native-reanimated';

import * as S from './Splash.styled';
import useHook from './Splash.hook';

function Splash({ setIsLoading }) {
  const { splashRef, onLottieLoad, onAnimationFinish } = useHook(setIsLoading);

  return (
    <S.Wrap exiting={FadeOut}>
      <S.SplashLottie
        ref={splashRef}
        onLayout={onLottieLoad}
        source={require('@assets/splash/splash.json')}
        onAnimationFinish={onAnimationFinish}
        loop={false}
        speed={1.5}
      />
    </S.Wrap>
  );
}

export default Splash;

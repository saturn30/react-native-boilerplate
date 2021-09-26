import React, { useRef } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { FadeOut } from 'react-native-reanimated';

import * as S from './Splash.styled';

function Splash({ setIsLoading }) {
  const splashRef = useRef();

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

  async function onLottieLoad() {
    await RNBootSplash.hide();
    splashRef.current.play();
  }

  function onAnimationFinish() {
    setIsLoading(false);
  }
}

export default Splash;

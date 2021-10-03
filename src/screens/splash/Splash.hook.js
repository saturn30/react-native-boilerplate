import { useState, useEffect, useRef } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { setI18n } from '@i18n';
import { useIsSplashingAtom } from '@atoms';

function useHook() {
  const splashRef = useRef();
  const [, setIsSplashing] = useIsSplashingAtom();

  const [isSettingFinished, setIsSettingFinished] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    if (isSettingFinished && isAnimationFinished) {
      hideSplash();
    }
  }, [isSettingFinished, isAnimationFinished]);

  return { splashRef, onLottieLoad, onAnimationFinish };

  async function onLottieLoad() {
    await RNBootSplash.hide();
    splashRef.current.play();
    setting();
    setIsSettingFinished(true);
  }

  function onAnimationFinish() {
    setIsAnimationFinished(true);
  }

  function setting() {
    setI18n();
    if (__DEV__) hideSplash();
  }

  function hideSplash() {
    setIsSplashing(false);
  }
}

export default useHook;

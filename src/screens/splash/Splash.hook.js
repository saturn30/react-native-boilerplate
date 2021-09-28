import { useState, useEffect, useRef } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { setI18n } from '@i18n';

// setIsLoading -> 추후 recoil 전역상태로 옮기기
function useHook(setIsLoading) {
  const splashRef = useRef();

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
  }

  function hideSplash() {
    setIsLoading(false);
  }
}

export default useHook;

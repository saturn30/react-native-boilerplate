import LottieView from 'lottie-react-native';
import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';
import { tw } from 'react-native-tailwindcss';

export const Wrap = styled(Animated.View)`
  ${[tw.flex, tw.flex1, tw.justifyCenter, tw.itemsCenter, tw.bgBlue100, tw.z10]}
`;

export const SplashLottie = styled(LottieView)`
  width: 300px;
`;

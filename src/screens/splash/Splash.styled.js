import LottieView from 'lottie-react-native';
import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';
import { t } from 'react-native-tailwindcss';

export const Wrap = styled(Animated.View)`
  ${[t.flex, t.flex1, t.justifyCenter, t.itemsCenter, t.bgBlue100, t.z10]}
`;

export const SplashLottie = styled(LottieView)`
  width: 300px;
`;

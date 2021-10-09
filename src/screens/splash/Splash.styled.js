import LottieView from 'lottie-react-native';
import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';
import tw from 'tailwind-rn';

export const Wrap = styled(Animated.View)`
  ${tw('flex flex-1 justify-center items-center bg-blue-100 z-10')};
`;

export const SplashLottie = styled(LottieView)`
  width: 300px;
`;

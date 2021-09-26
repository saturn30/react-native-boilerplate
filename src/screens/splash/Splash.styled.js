import {View} from 'react-native';
import LottieView from 'lottie-react-native';

import {t, styled} from '@utils/styles';

export const Wrap = styled(View)`
  ${[t.flex, t.flex1, t.justifyCenter, t.itemsCenter, t.bgBlue100]}
`;

export const SplashLottie = styled(LottieView)`
  width: 300px;
`;

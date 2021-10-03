import { TouchableOpacity, Text as RNText } from 'react-native';

import styled from 'styled-components/native';
import { tw } from 'react-native-tailwindcss';

export const Button = styled(TouchableOpacity)`
  ${[tw.p3, tw.bgBlue500, tw.roundedLg, tw.w64]}
`;

export const Text = styled(RNText)`
  ${[tw.textCenter, tw.textWhite]}
`;

import { View, Text } from 'react-native';

import styled from 'styled-components/native';
import { tw } from 'react-native-tailwindcss';

export const Wrap = styled(View)`
  ${[tw.flex, tw.flex1, tw.justifyCenter, tw.itemsCenter]}
`;

export const StyledText = styled(Text)`
  ${[tw.textBlue900]}
`;

import { View, Text } from 'react-native';

import styled from 'styled-components/native';
import { t, color } from 'react-native-tailwindcss';

export const Wrap = styled(View)`
  ${[t.flex, t.flex1, t.justifyCenter, t.itemsCenter]}
`;

export const StyledText = styled(Text)`
  ${[color.blue700]}
`;

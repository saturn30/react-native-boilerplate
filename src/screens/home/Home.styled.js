import { View, Text } from 'react-native';

import { t, color, styled } from '@utils/styles';

export const Wrap = styled(View)`
  ${[t.flex, t.flex1, t.justifyCenter, t.itemsCenter]}
`;

export const StyledText = styled(Text)`
  ${[color.blue700]}
`;

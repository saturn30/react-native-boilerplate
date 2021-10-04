import { View, Text } from 'react-native';

import styled from 'styled-components/native';
import tw from 'tailwind-rn';

export const Wrap = styled(View)`
  ${tw('flex flex-1 justify-center items-center')}
`;

export const StyledText = styled(Text)`
  ${tw('text-blue-900')}
`;

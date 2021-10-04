import { TouchableOpacity, Text as RNText } from 'react-native';

import styled from 'styled-components/native';
import tw, { getColor } from 'tailwind-rn';

export const Button = styled(TouchableOpacity)`
  ${tw('p-3 bg-blue-300 rounded-lg w-40')};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Text = styled(RNText)`
  ${tw('text-white')};
`;

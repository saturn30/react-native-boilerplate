import { TouchableOpacity, Text as RNText } from 'react-native';

import styled from 'styled-components/native';
import tw from 'tailwind-rn';

export const Button = styled(TouchableOpacity)`
  ${tw('p-3 bg-blue-300 rounded-lg')};
`;

export const Text = styled(RNText)`
  ${tw('text-white')};
`;

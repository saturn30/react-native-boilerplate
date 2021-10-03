import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Button } from './Button';

storiesOf('Test Component', module).add('Button', () => (
  <Button>테스트</Button>
));

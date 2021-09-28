import React from 'react';

import { translate } from '@i18n';
import * as S from './Home.styled';

function Home() {
  return (
    <S.Wrap>
      <S.StyledText>{translate('hello')}</S.StyledText>
    </S.Wrap>
  );
}

export default Home;

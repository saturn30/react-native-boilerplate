import React from 'react';

import { t } from '@i18n';
import { Button } from '@components';

import * as S from './Home.styled';

function Home() {
  return (
    <S.Wrap>
      <S.StyledText>{t.hello({ name: 'kim' })}</S.StyledText>
      <S.StyledText>{t.scope1.scope2.message2()}</S.StyledText>
      <Button>버튼</Button>
    </S.Wrap>
  );
}

export default Home;

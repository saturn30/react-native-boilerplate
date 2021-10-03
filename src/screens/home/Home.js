import React from 'react';

import { Button } from '@components';
import { t } from '@i18n';

import * as S from './Home.styled';

function Home() {
  return (
    <S.Wrap>
      {/* <S.StyledText>isDEV : {__DEV__ ? 'true' : 'false'}</S.StyledText> */}
      <S.StyledText>{t.hello({ name: 'kim' })}</S.StyledText>
      <S.StyledText>{t.scope1.scope2.message2()}</S.StyledText>
      <Button>버튼</Button>
    </S.Wrap>
  );
}

export default Home;

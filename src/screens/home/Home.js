import React from 'react';

import { text } from '@i18n';
import * as S from './Home.styled';

function Home() {
  return (
    <S.Wrap>
      <S.StyledText>{text.hello({ name: 'kim' })}</S.StyledText>
      <S.StyledText>{text.scope1.scope2.message()}</S.StyledText>
    </S.Wrap>
  );
}

export default Home;

import React from 'react';

import { Button } from '@components/buttons';
import { t } from '@i18n';
import { useAuth } from '@hooks/auth';

import * as S from './Home.styled';

function Home() {
  const { anonymousLogin, logout } = useAuth();
  return (
    <S.Wrap>
      <S.StyledText>{t.hello({ name: 'kim' })}</S.StyledText>
      <S.StyledText>{t.scope1.scope2.message2()}</S.StyledText>
      <Button onPress={anonymousLogin}>로그인</Button>
      <Button onPress={logout}>로그아웃</Button>
    </S.Wrap>
  );
}

export default Home;

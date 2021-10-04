import React from 'react';
import * as S from './Button.styled';

export function Button({ children }) {
  return (
    <S.Button>
      <S.Text>{children}</S.Text>
    </S.Button>
  );
}

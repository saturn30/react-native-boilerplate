import React from 'react';
import p from 'prop-types';
import * as S from './Button.styled';

export function Button({ children, backgroundColor, ...rest }) {
  return (
    <S.Button backgroundColor={backgroundColor} {...rest}>
      <S.Text>{children}</S.Text>
    </S.Button>
  );
}

Button.propTypes = {
  backgroundColor: p.oneOf(['blue', 'purple']),
  children: p.string,
};

Button.defaultProps = {
  backgroundColor: 'blue',
  children: 'Some message',
};

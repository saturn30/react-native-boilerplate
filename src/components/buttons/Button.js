import * as S from './Button.styled';

console.log(S);

export function Button({ children }) {
  return (
    <S.Button>
      <S.Text>{children}</S.Text>
    </S.Button>
  );
}

// googletranslate.js import 하면 run 함수 즉시실행되서 테스트가 무한 재실행 됨.. 그냥 함수 복붙해서 테스트
function addSpanTag(text) {
  return text.replaceAll(/{{[^{}]+}}/g, '<span translate="no">$&</span>');
}

function deleteSpanTag(text) {
  return text.replaceAll(/<\/?span[^>]*>/g, '');
}

describe('interpolate 정규식 교체', () => {
  const text = '안녕하세요 {{name}}님';
  const reg = /{{[^{}]+}}/g;

  test('span 태그로 교체하기', () => {
    expect(addSpanTag(text)).toEqual(
      '안녕하세요 <span translate="no">{{name}}</span>님',
    );
  });

  test('span 태그 삭제하기', () => {
    const withSpan = addSpanTag(text);
    expect(deleteSpanTag(withSpan)).toEqual(text);
  });
});

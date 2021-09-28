import { languages } from '@constants';

import * as translations from './locales';

describe('i18n 설정 테스트', () => {
  test('translations 객체 생성 테스트', () => {
    languages.forEach(lang => {
      expect(require(`./locales/${lang}.json`)).toEqual(translations[lang]);
    });
  });
});

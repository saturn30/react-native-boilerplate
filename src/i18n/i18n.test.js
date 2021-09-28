import i18n from 'i18n-js';
import { LANGUAGES } from '@constants';

import * as translations from './locales';
import { value2Translate } from './i18n';

describe('i18n 설정 테스트', () => {
  test('translations 객체 생성 테스트', () => {
    LANGUAGES.forEach(lang => {
      expect(require(`./locales/${lang}.json`)).toEqual(translations[lang]);
    });
  });

  test('value2Translate 함수 테스트', () => {
    const en = {
      home: '홈',
      page: {
        page1: '페이지1',
        page2: '페이지2',
      },
    };

    i18n.translations = { en };

    expect(value2Translate(en).page.page1()).toEqual(en.page.page1);
  });
});

import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import { DEFAULT_LOCALE, LANGUAGES, TEXT } from '@constants';
import * as translations from './locales';

export function setI18n() {
  i18n.fallbacks = true;
  i18n.translations = translations;
  i18n.defaultLocale = DEFAULT_LOCALE;
  i18n.locale =
    RNLocalize.findBestAvailableLanguage(LANGUAGES)?.languageTag ||
    DEFAULT_LOCALE;
}

export function translate(key, options) {
  return i18n.t(key, options);
}

export const text = value2Translate(TEXT);

export function value2Translate(translation, scope = []) {
  return convertObj(translation, convertFunc);

  function convertFunc({ key, value }) {
    if (typeof value === 'object') {
      return value2Translate(value, [...scope, key]);
    }
    return makeTranslate([...scope, key].join('.'));
  }
}

function convertObj(obj, convertFunc, ...rest) {
  return Object.keys(obj).reduce((acc, key) => {
    return { ...acc, [key]: convertFunc({ key, value: obj[key], ...rest }) };
  }, {});
}

function makeTranslate(key) {
  return options => i18n.t(key, options);
}

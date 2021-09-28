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
  return Object.keys(translation).reduce((acc, key) => {
    if (typeof translation[key] === 'object') {
      return {
        ...acc,
        [key]: value2Translate(translation[key], [...scope, key]),
      };
    }
    return { ...acc, [key]: makeTranslate([...scope, key].join('.')) };
  }, {});
}

function makeTranslate(key) {
  return options => i18n.t(key, options);
}

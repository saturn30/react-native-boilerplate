import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import { defaultLocale, languages } from '@constants';
import * as translations from './locales';

export function setI18n() {
  console.log(RNLocalize.getLocales());

  i18n.fallbacks = true;
  i18n.translations = translations;
  i18n.defaultLocale = defaultLocale;
  i18n.locale =
    RNLocalize.findBestAvailableLanguage(languages)?.languageTag ||
    defaultLocale;
}

export function translate(key, options) {
  return i18n.t(key, options);
}

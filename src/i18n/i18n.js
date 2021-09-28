import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

export const languages = ['ko', 'en'];

export function setI18n() {
  i18n.fallbacks = true;
  i18n.translations = languages.reduce(
    (acc, cur) => ({ ...acc, [cur]: require(`./locales/${cur}.json`) }),
    {},
  );
  i18n.defaultLocale = 'en';
  i18n.locale = RNLocalize.findBestAvailableLanguage().languageTag;
}

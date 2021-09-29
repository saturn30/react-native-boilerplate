const { Translate } = require('@google-cloud/translate').v2;
const fs = require('fs');
const path = require('path');

import { LANGUAGES, TEXT } from '@constants';
import { googleTranslateKey } from './key';

// Instantiates a client
const translate = new Translate({ key: googleTranslateKey });

(async function run() {
  saveLocaleJson();
  saveLocaleIndexJs();
})();

function saveLocaleIndexJs() {
  fs.writeFileSync(
    path.resolve(__dirname, '../src/i18n/locales/index.js'),
    LANGUAGES.reduce(
      (acc, lang) =>
        acc + `export { default as ${lang} } from './${lang}.json';\n`,
      '',
    ),
  );
}

function saveLocaleJson() {
  LANGUAGES.forEach(async lang => {
    const result = await translateObj(TEXT, lang);
    fs.writeFileSync(
      path.resolve(__dirname, `../src/i18n/locales/${lang}.json`),
      JSON.stringify(result),
    );
  });
}

async function translateObj(obj, lang) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    result[key] =
      typeof value === 'object'
        ? await translateObj(value, lang)
        : deleteSpanTag(
            (await translate.translate(addSpanTag(value), lang))[0],
          );
  }
  return result;
}

function addSpanTag(text) {
  return text.replaceAll(/{{[^{}]+}}/g, '<span translate="no">$&</span>');
}

function deleteSpanTag(text) {
  return text.replaceAll(/<\/?span[^>]*>/g, '');
}

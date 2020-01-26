import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import common_es from "./translations/es/common.json";
import common_en from "./translations/en/common.json";

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(initReactI18next)
.use(LanguageDetector).init({
    fallbackLng: 'en-US',
    debug: true,
    resources: {
      "en-US": {
        translation: common_en,
      },
      "es-ES": {
        translation: common_es,
      },
    },
    react: {
      wait: true,
    },
    keySeparator: '-',
  })

export default i18n
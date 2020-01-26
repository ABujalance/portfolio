import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import common_es from "./translations/es/common.json";
import common_en from "./translations/en/common.json";

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: common_en,
      },
      es: {
        translation: common_es,
      },
    },
    react: {
      wait: true,
    },
    keySeparator: '-',
  })

export default i18n
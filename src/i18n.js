import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './Locales/En.json'; 
import translationES from './Locales/Es.json'; 

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // este será nuestro idioma predeterminado
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


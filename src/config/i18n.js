import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        // special options for react-i18next
        // learn more: https://react.i18next.com/components/i18next-instance
        react: {
            wait: true,
        },
        resources: {
            en: {
                translation: {
                    greeting: 'Hello there!',
                },
            },
            ua: {
                translation: {
                    greeting: 'Ласкаво просимо!',
                },
            },
        },
    });

export default i18n;

import i18next from '/web_modules/i18next.js';
import XHR from '/web_modules/i18next-xhr-backend.js';
import LanguageDetector from '/web_modules/i18next-browser-Languagedetector.js';

i18next.use(LanguageDetector).use(XHR).init({
    backend: {
        loadPath: '/locales/{{lng}}/pasted.json',
    },
    debug: true,
}).then((t) => {
    console.log(i18next.t('welcome'));
})

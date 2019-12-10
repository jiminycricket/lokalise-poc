import { Component, h, render } from '/web_modules/preact.js';
import { useEffect, useState } from '/web_modules/preact/hooks.js';
import htm from '/web_modules/htm.js';

import i18next from '/web_modules/i18next.js';
import XHR from '/web_modules/i18next-xhr-backend.js';
import LanguageDetector from '/web_modules/i18next-browser-Languagedetector.js';

const html = htm.bind(h);

function App(props) {
    const [greeting, setGreeting] = useState('');

    async function init() {
        await i18next.use(LanguageDetector).use(XHR).init({
            backend: {
                loadPath: '/locales/{{lng}}/pasted.json',
            },
            debug: true,
        });
        setGreeting(i18next.t('welcome'));
    }

    useEffect(() => init(), []);

    return html`<div>${greeting}</div>`;
}

const app = html`<${App} />`;
render(app, document.getElementById('app'));

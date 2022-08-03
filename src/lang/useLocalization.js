import { useState, useEffect } from 'react';

let initLocale = 'en';
if (navigator.language === 'es-ES') {
    initLocale = 'es';
}

function loadMessages(locale) {
    switch (locale) {
        case 'en':
            return import('./en.json');
        case 'es':
            return import('./es.json');
        default:
            return import('./en.json');
    }
}

function useLocalization() {
    const [locale, setLocale] = useState(initLocale);
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        loadMessages(locale).then(setMessages);
    }, [locale]);

    return ({
        locale,
        setLocale,
        messages,
    });
}
export default useLocalization;

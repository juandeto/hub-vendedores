import React from 'react';

const reactI18next = jest.genMockFromModule('react-i18next');

reactI18next.useTranslation = () => {
    return {
        t: (str) => str,
        i18n: {
            changeLanguage: () => new Promise(() => {})
        }
    };
};

module.exports = reactI18next;

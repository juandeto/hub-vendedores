/// <reference types="react-scripts" />
import { resources } from 'i18n/i18n';

declare module 'react-i18next' {
  type DefaultResources = typeof resources['en'];
  interface Resources extends DefaultResources {}
}

export interface JsxProps {
    type: string,
    // eslint-disable-next-line
    properties: any,
    key?: number
}

export interface JsxRef {
    id: string,
    // eslint-disable-next-line
    cardContent: any ,
    // eslint-disable-next-line
    dropdownContent: any
}

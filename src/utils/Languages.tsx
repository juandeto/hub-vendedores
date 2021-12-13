
export const lngs: Languages = {
    es: { nativeName: 'Español' },
    pr: { nativeName: 'Portuguese' }
  };

  export type Languages = {
      [key: string]: {
          [key: string]: string
      }
  }
import { merge } from 'ts-deepmerge';

declare module '@emotion/react' {
  type GlobalTheme = typeof theme;
  export interface Theme extends GlobalTheme {
    _declaration: true;
  }
}

export const theme = {
  name: 'dark',
  colors: {
    link: '#646cff',
    linkHover: '#535bf2',
    primary: 'rgba(255, 255, 255, 0.87)',
    primaryBackground: '#242424',
  },
};

export const lightTheme = merge(theme, {
  name: 'light',
  colors: {
    link: '#646cff',
    linkHover: '#747bff',
    primary: '#213547',
    primaryBackground: '#fff',
  },
});

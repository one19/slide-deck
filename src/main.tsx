import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import GlobalReset from './GlobalReset.tsx';
import GlobalTypography from './GlobalTypography.tsx';
import { merge } from 'ts-deepmerge';
import App from './App.tsx'

const theme = {
  colors: {
    link: '#646cff',
    linkHover: '#535bf2',
    primary: 'rgba(255, 255, 255, 0.87)',
    primaryBackground: '#242424',
  },
}

export const lightTheme = merge(theme, {
  colors: {
    link: '#646cff',
    linkHover: '#747bff',
    primary: '#213547',
    primaryBackground: '#fff',
  },
});

declare module '@emotion/react' {
  type GlobalTheme = typeof theme;
  export interface Theme extends GlobalTheme {
    _declaration: true;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalReset />
      <GlobalTypography />
      <App />
    </ThemeProvider>
  </StrictMode>,
)

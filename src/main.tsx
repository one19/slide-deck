import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import GlobalReset from './GlobalReset.tsx';
import GlobalTypography from './GlobalTypography.tsx';
import { theme } from './themes';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalReset />
      <GlobalTypography />
      <App />
    </ThemeProvider>
  </StrictMode>,
);

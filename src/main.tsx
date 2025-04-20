import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import GlobalTypography from './GlobalTypography';
import GlobalHueRotate from './GlobalHueRotate';
import HiddenHeader from './HiddenHeader';
import GlobalReset from './GlobalReset';
import { theme } from './themes';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalReset />
      <GlobalTypography />
      <GlobalHueRotate />
      <HiddenHeader />
      <App />
    </ThemeProvider>
  </StrictMode>,
);

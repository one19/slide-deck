import type { Preview } from '@storybook/react-vite';
import { ThemeProvider } from '@emotion/react';
import GlobalReset from '../src/GlobalReset';
import GlobalTypography from '../src/GlobalTypography';
import { theme, lightTheme } from '../src/themes';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        icon: 'circlehollow',
        items: ['dark', 'light'],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = context.globals.theme || 'dark';

      return (
        <ThemeProvider theme={selectedTheme === 'light' ? lightTheme : theme}>
          <GlobalReset />
          <GlobalTypography />
          <Story />
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    backgrounds: { disabled: true },
  },
};

export default preview;

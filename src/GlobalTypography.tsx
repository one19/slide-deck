import { Global, css, useTheme } from '@emotion/react';

const GlobalTypography = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        body,
        #root {
          display: flex;
          place-items: center;
          min-width: 320px;
          min-height: 100vh;
          width: 100%;
          font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
          font-weight: 400;

          color-scheme: light dark;
          background-color: ${theme.colors.primaryBackground};

          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        span,
        b,
        a,
        button {
          color: ${theme.colors.primary};
          font-size: inherit;
          line-height: 1.5;
        }

        h1 {
          font-size: 3.2em;
          line-height: 1.1;
        }

        a {
          font-weight: 500;
          color: ${theme.colors.link};
          text-decoration: inherit;
        }
        a:hover {
          color: ${theme.colors.linkHover};
        }

        * {
          z-index: 1;
        }
      `}
    />
  );
};

export default GlobalTypography;

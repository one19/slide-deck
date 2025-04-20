import { Global, css, keyframes } from '@emotion/react';

const hueRotate = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

const GlobalHueRotate = () => (
  <Global
    styles={css`
      body {
        animation: ${hueRotate} 1800s linear infinite;
      }
    `}
  />
);

export default GlobalHueRotate;

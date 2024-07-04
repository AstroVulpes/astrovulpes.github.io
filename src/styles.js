import { createGlobalStyle } from 'styled-components';

import VT323 from './fonts/VT323-Regular.woff';

export default createGlobalStyle`

@font-face {
  font-family: 'VT323';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url(${VT323});
  }`
// src/styles/globalStyle.js
import React from 'react';
import { css, Global } from '@emotion/react';

const globalStyle = css`
  /* 在这里定义全局样式 */
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #222222; // 修改背景颜色为深灰色
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const GlobalStyle = () => <Global styles={globalStyle} />;

export default GlobalStyle;
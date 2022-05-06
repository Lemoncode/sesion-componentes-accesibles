import { css } from '@emotion/css';

export const screenReaderOnly = css`
position: absolute;
width: 1px;
height: 1px;
padding: 0;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
-webkit-clip-path: inset(50%);
clip-path: inset(50%);
border: 0;`;

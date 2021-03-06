import { injectGlobal } from '@emotion/css';

injectGlobal`

  body, * {
    margin: 0;
    padding: 0;
    font-family: Open Sans;
  }

  body {
    height: 100vh;

    display: flex;
    flex-direction: column;
    overflow: hidden;

    & > :nth-child(n) {
      height: 100%;
    }
  }
`;

import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;

  main {
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;

    & > :nth-child(even) {
      flex-grow: 1;
      flex-basis: calc(100% / 3);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      padding: 2rem;
      border: 1px solid black;

      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5;
      letter-spacing: 0.00938em;
    }
  }
`;

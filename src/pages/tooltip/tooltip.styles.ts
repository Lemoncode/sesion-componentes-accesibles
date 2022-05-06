import { css } from '@emotion/css';

export const field = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  & input {
    border: 1px solid black;
    box-sizing: content-box;
    background: none;
    height: 1.4375em;
    margin: 0;
    display: block;
    min-width: 0;
    width: 100%;
    padding: 1rem 0.5rem;
  }
`;

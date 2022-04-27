import { css } from '@emotion/css';

export const toolbar = css`
  /* display: flex;
  flex-direction: row;
  gap: 1rem; */
`;

export const list = css`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const link = css`
  cursor: pointer;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
`;

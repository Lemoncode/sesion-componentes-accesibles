import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  user-select: none;
`;

export const input = css`
  display: none;
`;

export const imageContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const image = css`
  width: 100%;
  max-width: 20px;
`;

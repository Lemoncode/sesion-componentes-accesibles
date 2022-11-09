import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  user-select: none;
`;

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
  border: 0;
`;

export const input = css`
  &:focus + span {
    border: 1px solid #262626;
  }
  &:focus + span:not(.checked) {
    border: 1px solid #493ba7;
  }
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

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
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
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

import { css } from '@emotion/css';

export const root = css`
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  cursor: pointer;
  /* min-height: 1px; */

  &.open {
    cursor: default;
    /* min-height: 64px; */
  }
  /* transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
`;

export const title = css`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  &.open {
    padding-bottom: 1rem;
  }
`;

export const icon = css`
  transition: transform 0.3s;
  &.open {
    transform: rotate(180deg);
  }
`;
export const body = css`
  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

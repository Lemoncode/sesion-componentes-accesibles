import { css } from '@emotion/css';

export const root = css`
  width: 100%;
  max-width: 500px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  cursor: pointer;
  &.open {
    cursor: default;
  }

  & > :nth-child(n) {
    padding: 1rem;
  }
`;

export const title = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  cursor: pointer;
  user-select: none;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  width: 100%;

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
  background-color: white;
`;

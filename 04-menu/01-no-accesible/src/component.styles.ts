import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  max-width: 900px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  padding: 1rem;
`;

export const logo = css`
  width: 100%;
  max-width: 64px;
`;

export const menuButton = css`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: none;
  background-color: transparent;
`;

export const menu = css`
  display: none;
  position: absolute;
  top: 0;
  right: 0;

  list-style: none;
  border-radius: 4px;
  background-color: white;
  padding: 0;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
    rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;

  &.open {
    display: flex;
  }
  flex-direction: column;
  gap: 0rem;
  padding-top: 8px;
  padding-bottom: 8px;

  & > :nth-child(n) {
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
`;

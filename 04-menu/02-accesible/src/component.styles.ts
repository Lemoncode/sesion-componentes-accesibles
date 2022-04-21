import { css } from '@emotion/css';

export const root = css`
  position: relative;
  width: 100%;
  max-width: 900px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  padding: 16px 24px;
`;

export const menubar = css`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const logo = css`
  cursor: pointer;
  width: 100%;
  max-width: 36px;
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

export const submenu = css`
  opacity: 0;
  z-index: -1;
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
    opacity: 1;
    z-index: 0;
  }
  display: flex;
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

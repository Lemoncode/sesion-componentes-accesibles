import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 1rem;
`;

export const fieldContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  & label {
    flex-basis: 15%;
  }

  & input {
    flex-basis: 70%;
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
  }
  & button {
    flex-basis: 15%;
    box-sizing: border-box;
    padding: 5px 15px;
    width: 100%;
    min-width: 128px;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const chatlog = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  & ul {
    width: 100%;
    list-style: none;
    height: 400px;
    padding: 1rem;
    border: 1px solid black;
    overflow: auto;
  }
`;

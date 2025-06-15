import { css } from "@emotion/react";

export const header = css`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  padding: 2rem 5rem;
  height: 8rem;
  background-color: #f8c275;
  color: #fff;
  & > div > span:first-of-type {
    font-size: 3rem;
    font-weight: 800;
  }
  & > div > span:last-of-type {
    font-size: 2.5rem;
    margin-left: 1rem;
    font-weight: 600;
  }
`;
